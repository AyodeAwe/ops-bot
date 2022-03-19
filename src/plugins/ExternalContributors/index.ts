import { Probot } from "probot";
import { JenkinsPermissions } from "../JobComponentTrigger/jenkins_permission";
import { PRExternalContributors } from "./pull_request";
import { PRReviewExternalContributors } from "./pull_request_comment";

export const initJobComponentTrigger = (app: Probot) => {
    app.on(
      [
        "pull_request.opened",
        "pull_request.synchronize",
        "pull_request.closed"
      ],
      async (context) => {
      await new PRExternalContributors(
        context
      ).pipePR();
    });

    app.on(["issue_comment.created"],
      async (context) => {
      await new PRReviewExternalContributors(
        context,
        new JenkinsPermissions()
      ).pipePR();
    });
  };
  