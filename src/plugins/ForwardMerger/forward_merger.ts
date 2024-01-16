import { OpsBotPlugin } from "../../plugin";
import { PayloadRepository } from "../../types";
import {
  isVersionedBranch,
  getVersionFromBranch,
} from "../../shared";
import { basename } from "path";
import { Context } from "probot";
import { PushEventsType } from ".";


export class ForwardMerger extends OpsBotPlugin {
  context: Context;
  branchName: string;
  repo: PayloadRepository;
  branchVersionNumber: string;
  defaultBranch: string;

  constructor(context: Context, private payload: Context<PushEventsType>["payload"]) {
    super("forward_merger", context);
    this.context = context;
    this.branchName = basename(this.payload.ref);
    this.repo = payload.repository;
    this.branchVersionNumber = getVersionFromBranch(this.branchName);
    this.defaultBranch = this.repo.default_branch;
  }

  async mergeForward() {
    if (await this.pluginIsDisabled()) return;

    if (!isVersionedBranch(this.branchName)) {
      this.logger.info("Will not merge forward on non-versioned branch");
      return;
    }

    if (this.branchName !== this.defaultBranch) {
      this.logger.info("Will not merge forward on non-default branch");
      return;
    }

    const branches = await this.getBranches();
    const sortedBranches = this.sortBranches(branches);
    const nextBranch = this.getNextBranch(sortedBranches);
    
    if (nextBranch) {
      const pr = await this.openPR(nextBranch);
      
      if (pr) {
        const merge = await this.mergePR(pr);
        if (merge.merged) {
          await this.issueComment(pr.number, "**SUCCESS** - forward-merge complete.");
        } else {
          await this.issueComment(pr.number, "**FAILURE** - Unable to forward-merge due to an error, **manual** merge is necessary. Do not use the `Resolve conflicts` option in this PR, follow these instructions https://docs.rapids.ai/maintainers/forward-merger/ \n **IMPORTANT**: When merging this PR, do not use the [auto-merger](https://docs.rapids.ai/resources/auto-merger/) (i.e. the `/merge` comment). Instead, an admin must manually merge by changing the merging strategy to `Create a Merge Commit`. Otherwise, history will be lost and the branches become incompatible.");
        }
      }
    }
  }

  async getBranches() {
    const { data: branches } = await this.context.octokit.repos.listBranches({
      owner: this.repo.owner.login,
      repo: this.repo.name,
      per_page: 100,
    });
    return branches.filter((branch: any) => isVersionedBranch(branch.name));
  }

  sortBranches(branches: any) {
    return branches.sort((a: any, b: any) => {
      const [yearA, monthA] = getVersionFromBranch(a.name).split('.').map(Number)
      const [yearB, monthB] = getVersionFromBranch(b.name).split('.').map(Number)
      if (yearA !== yearB) {
        return yearA - yearB;
      } else {
        return monthA - monthB;
      }
    });
  }

  getNextBranch(sortedBranches: any) {
    const currentBranchIndex = sortedBranches.findIndex(
      (branch: any) => branch.name === this.branchName
    );
    const nextBranch = sortedBranches[currentBranchIndex + 1];
    return nextBranch;
  }

  async openPR(nextBranch: any) {
    if (!nextBranch) {
      this.logger.info("No next branch found, will not open PR");
      return;
    };
    const { data: pr } = await this.context.octokit.pulls.create({
      owner: this.repo.owner.login,
      repo: this.repo.name,
      title: "Forward-merge " + this.branchName + " into " + nextBranch.name,
      head: this.branchName,
      base: nextBranch.name,
      maintainer_can_modify: true,
      body: `Forward-merge triggered by push to ${this.branchName} that creates a PR to keep ${nextBranch.name} up-to-date. If this PR is unable to be immediately merged due to conflicts, it will remain open for the team to manually merge.`,
    });
    return pr;
  }

  async mergePR(pr: any) {
    this.logger.info("Merging PR");
    const { data: merge } = await this.context.octokit.pulls.merge({
      owner: this.repo.owner.login,
      repo: this.repo.name,
      pull_number: pr.number,
      sha: pr.head.sha,
    });
    return merge;
  }

  async issueComment(id, comment) {
    await this.context.octokit.issues.createComment({
      owner: this.repo.owner.login,
      repo: this.repo.name,
      issue_number: id,
      body: comment,
    });
  }
}