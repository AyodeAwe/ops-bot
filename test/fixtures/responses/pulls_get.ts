/*
 * Copyright (c) 2022, NVIDIA CORPORATION.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

type RespParams = {
  body?: string;
};

export const makeResponse = ({ body = "" }: RespParams = {}) => ({
  data: {
    url: "https://api.github.com/repos/rapidsai/cudf/pulls/6775",
    id: 521774755,
    node_id: "MDExOlB1bGxSZXF1ZXN0NTIxNzc0NzU1",
    html_url: "https://github.com/rapidsai/cudf/pull/6775",
    diff_url: "https://github.com/rapidsai/cudf/pull/6775.diff",
    patch_url: "https://github.com/rapidsai/cudf/pull/6775.patch",
    issue_url: "https://api.github.com/repos/rapidsai/cudf/issues/6775",
    number: 1234,
    state: "closed",
    locked: false,
    title: "[REVIEW] Implement cudf.DateOffset for months ",
    user: {
      login: "VibhuJawa",
      id: 53796099,
      node_id: "MDQ6VXNlcjUzNzk2MDk5",
      avatar_url: "https://avatars1.githubusercontent.com/u/53796099?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/VibhuJawa",
      html_url: "https://github.com/VibhuJawa",
      followers_url: "https://api.github.com/users/VibhuJawa/followers",
      following_url:
        "https://api.github.com/users/VibhuJawa/following{/other_user}",
      gists_url: "https://api.github.com/users/VibhuJawa/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/VibhuJawa/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/VibhuJawa/subscriptions",
      organizations_url: "https://api.github.com/users/VibhuJawa/orgs",
      repos_url: "https://api.github.com/users/VibhuJawa/repos",
      events_url: "https://api.github.com/users/VibhuJawa/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/VibhuJawa/received_events",
      type: "User",
      site_admin: false,
    },
    body:
      body ||
      "Implements `cudf.DateOffset` - an object used for calendrical arithmetic, similar to pandas.DateOffset - for month units only.\n\nCloses https://github.com/rapidsai/cudf/issues/6754",
    created_at: "2020-11-16T16:25:22Z",
    updated_at: "2020-12-15T23:37:28Z",
    closed_at: "2020-12-15T23:37:28Z",
    merged_at: "2020-12-15T23:37:28Z",
    merge_commit_sha: "1963111b0010e339b0a0d5368c2e96b6d48e6244",
    assignee: {
      login: "VibhuJawa",
      id: 53796099,
      node_id: "MDQ6VXNlcjUzNzk2MDk5",
      avatar_url: "https://avatars1.githubusercontent.com/u/53796099?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/VibhuJawa",
      html_url: "https://github.com/VibhuJawa",
      followers_url: "https://api.github.com/users/VibhuJawa/followers",
      following_url:
        "https://api.github.com/users/VibhuJawa/following{/other_user}",
      gists_url: "https://api.github.com/users/VibhuJawa/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/VibhuJawa/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/VibhuJawa/subscriptions",
      organizations_url: "https://api.github.com/users/VibhuJawa/orgs",
      repos_url: "https://api.github.com/users/VibhuJawa/repos",
      events_url: "https://api.github.com/users/VibhuJawa/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/VibhuJawa/received_events",
      type: "User",
      site_admin: false,
    },
    assignees: [
      {
        login: "VibhuJawa",
        id: 53796099,
        node_id: "MDQ6VXNlcjUzNzk2MDk5",
        avatar_url: "https://avatars1.githubusercontent.com/u/53796099?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/VibhuJawa",
        html_url: "https://github.com/VibhuJawa",
        followers_url: "https://api.github.com/users/VibhuJawa/followers",
        following_url:
          "https://api.github.com/users/VibhuJawa/following{/other_user}",
        gists_url: "https://api.github.com/users/VibhuJawa/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/VibhuJawa/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/VibhuJawa/subscriptions",
        organizations_url: "https://api.github.com/users/VibhuJawa/orgs",
        repos_url: "https://api.github.com/users/VibhuJawa/repos",
        events_url: "https://api.github.com/users/VibhuJawa/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/VibhuJawa/received_events",
        type: "User",
        site_admin: false,
      },
    ],
    requested_reviewers: [],
    requested_teams: [],
    labels: [
      {
        id: 1162013166,
        node_id: "MDU6TGFiZWwxMTYyMDEzMTY2",
        url: "https://api.github.com/repos/rapidsai/cudf/labels/5%20-%20Ready%20to%20Merge",
        name: "5 - Ready to Merge",
        color: "a6e54d",
        default: false,
        description: "Testing and reviews complete, ready to merge",
      },
      {
        id: 1221761547,
        node_id: "MDU6TGFiZWwxMjIxNzYxNTQ3",
        url: "https://api.github.com/repos/rapidsai/cudf/labels/Cython",
        name: "Cython",
        color: "f4e85f",
        default: false,
        description: "",
      },
      {
        id: 1139741213,
        node_id: "MDU6TGFiZWwxMTM5NzQxMjEz",
        url: "https://api.github.com/repos/rapidsai/cudf/labels/cuDF%20(Python)",
        name: "cuDF (Python)",
        color: "1d76db",
        default: false,
        description: "Affects Python cuDF API.",
      },
      {
        id: 599626561,
        node_id: "MDU6TGFiZWw1OTk2MjY1NjE=",
        url: "https://api.github.com/repos/rapidsai/cudf/labels/feature%20request",
        name: "feature request",
        color: "a2eeef",
        default: false,
        description: "New feature or request",
      },
      {
        id: 2546521068,
        node_id: "MDU6TGFiZWwyNTQ2NTIxMDY4",
        url: "https://api.github.com/repos/rapidsai/cudf/labels/non-breaking",
        name: "non-breaking",
        color: "0e8a16",
        default: false,
        description: "Non-breaking change",
      },
    ],
    milestone: null,
    draft: false,
    commits_url:
      "https://api.github.com/repos/rapidsai/cudf/pulls/6775/commits",
    review_comments_url:
      "https://api.github.com/repos/rapidsai/cudf/pulls/6775/comments",
    review_comment_url:
      "https://api.github.com/repos/rapidsai/cudf/pulls/comments{/number}",
    comments_url:
      "https://api.github.com/repos/rapidsai/cudf/issues/6775/comments",
    statuses_url:
      "https://api.github.com/repos/rapidsai/cudf/statuses/3dfbd68fe975eb04ae7b2ffa6369856ae183963d",
    head: {
      label: "VibhuJawa:fea-month-sub-and-add",
      ref: "fea-month-sub-and-add",
      sha: "3dfbd68fe975eb04ae7b2ffa6369856ae183963d",
      user: {
        login: "VibhuJawa",
        id: 53796099,
        node_id: "MDQ6VXNlcjUzNzk2MDk5",
        avatar_url: "https://avatars1.githubusercontent.com/u/53796099?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/VibhuJawa",
        html_url: "https://github.com/VibhuJawa",
        followers_url: "https://api.github.com/users/VibhuJawa/followers",
        following_url:
          "https://api.github.com/users/VibhuJawa/following{/other_user}",
        gists_url: "https://api.github.com/users/VibhuJawa/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/VibhuJawa/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/VibhuJawa/subscriptions",
        organizations_url: "https://api.github.com/users/VibhuJawa/orgs",
        repos_url: "https://api.github.com/users/VibhuJawa/repos",
        events_url: "https://api.github.com/users/VibhuJawa/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/VibhuJawa/received_events",
        type: "User",
        site_admin: false,
      },
      repo: {
        id: 200880888,
        node_id: "MDEwOlJlcG9zaXRvcnkyMDA4ODA4ODg=",
        name: "cudf",
        full_name: "VibhuJawa/cudf",
        private: false,
        owner: {
          login: "VibhuJawa",
          id: 53796099,
          node_id: "MDQ6VXNlcjUzNzk2MDk5",
          avatar_url: "https://avatars1.githubusercontent.com/u/53796099?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/VibhuJawa",
          html_url: "https://github.com/VibhuJawa",
          followers_url: "https://api.github.com/users/VibhuJawa/followers",
          following_url:
            "https://api.github.com/users/VibhuJawa/following{/other_user}",
          gists_url: "https://api.github.com/users/VibhuJawa/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/VibhuJawa/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/VibhuJawa/subscriptions",
          organizations_url: "https://api.github.com/users/VibhuJawa/orgs",
          repos_url: "https://api.github.com/users/VibhuJawa/repos",
          events_url: "https://api.github.com/users/VibhuJawa/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/VibhuJawa/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/VibhuJawa/cudf",
        description: "cuDF - GPU DataFrame Library",
        fork: true,
        url: "https://api.github.com/repos/VibhuJawa/cudf",
        forks_url: "https://api.github.com/repos/VibhuJawa/cudf/forks",
        keys_url: "https://api.github.com/repos/VibhuJawa/cudf/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/VibhuJawa/cudf/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/VibhuJawa/cudf/teams",
        hooks_url: "https://api.github.com/repos/VibhuJawa/cudf/hooks",
        issue_events_url:
          "https://api.github.com/repos/VibhuJawa/cudf/issues/events{/number}",
        events_url: "https://api.github.com/repos/VibhuJawa/cudf/events",
        assignees_url:
          "https://api.github.com/repos/VibhuJawa/cudf/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/VibhuJawa/cudf/branches{/branch}",
        tags_url: "https://api.github.com/repos/VibhuJawa/cudf/tags",
        blobs_url:
          "https://api.github.com/repos/VibhuJawa/cudf/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/VibhuJawa/cudf/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/VibhuJawa/cudf/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/VibhuJawa/cudf/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/VibhuJawa/cudf/statuses/{sha}",
        languages_url: "https://api.github.com/repos/VibhuJawa/cudf/languages",
        stargazers_url:
          "https://api.github.com/repos/VibhuJawa/cudf/stargazers",
        contributors_url:
          "https://api.github.com/repos/VibhuJawa/cudf/contributors",
        subscribers_url:
          "https://api.github.com/repos/VibhuJawa/cudf/subscribers",
        subscription_url:
          "https://api.github.com/repos/VibhuJawa/cudf/subscription",
        commits_url:
          "https://api.github.com/repos/VibhuJawa/cudf/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/VibhuJawa/cudf/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/VibhuJawa/cudf/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/VibhuJawa/cudf/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/VibhuJawa/cudf/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/VibhuJawa/cudf/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/VibhuJawa/cudf/merges",
        archive_url:
          "https://api.github.com/repos/VibhuJawa/cudf/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/VibhuJawa/cudf/downloads",
        issues_url:
          "https://api.github.com/repos/VibhuJawa/cudf/issues{/number}",
        pulls_url: "https://api.github.com/repos/VibhuJawa/cudf/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/VibhuJawa/cudf/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/VibhuJawa/cudf/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/VibhuJawa/cudf/labels{/name}",
        releases_url:
          "https://api.github.com/repos/VibhuJawa/cudf/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/VibhuJawa/cudf/deployments",
        created_at: "2019-08-06T15:44:50Z",
        updated_at: "2019-11-13T14:08:59Z",
        pushed_at: "2020-12-15T16:32:53Z",
        git_url: "git://github.com/VibhuJawa/cudf.git",
        ssh_url: "git@github.com:VibhuJawa/cudf.git",
        clone_url: "https://github.com/VibhuJawa/cudf.git",
        svn_url: "https://github.com/VibhuJawa/cudf",
        homepage: "http://rapids.ai",
        size: 80749,
        stargazers_count: 0,
        watchers_count: 0,
        language: "Cuda",
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: "apache-2.0",
          name: "Apache License 2.0",
          spdx_id: "Apache-2.0",
          url: "https://api.github.com/licenses/apache-2.0",
          node_id: "MDc6TGljZW5zZTI=",
        },
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: "branch-0.13",
      },
    },
    base: {
      label: "rapidsai:branch-0.18",
      ref: "branch-0.18",
      sha: "515a17342c7dac64e889b45859d9c042ad0a5c02",
      user: {
        login: "rapidsai",
        id: 43887749,
        node_id: "MDEyOk9yZ2FuaXphdGlvbjQzODg3NzQ5",
        avatar_url: "https://avatars2.githubusercontent.com/u/43887749?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/rapidsai",
        html_url: "https://github.com/rapidsai",
        followers_url: "https://api.github.com/users/rapidsai/followers",
        following_url:
          "https://api.github.com/users/rapidsai/following{/other_user}",
        gists_url: "https://api.github.com/users/rapidsai/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/rapidsai/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/rapidsai/subscriptions",
        organizations_url: "https://api.github.com/users/rapidsai/orgs",
        repos_url: "https://api.github.com/users/rapidsai/repos",
        events_url: "https://api.github.com/users/rapidsai/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/rapidsai/received_events",
        type: "Organization",
        site_admin: false,
      },
      repo: {
        id: 90506918,
        node_id: "MDEwOlJlcG9zaXRvcnk5MDUwNjkxOA==",
        name: "cudf",
        full_name: "rapidsai/cudf",
        private: false,
        owner: {
          login: "rapidsai",
          id: 43887749,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjQzODg3NzQ5",
          avatar_url: "https://avatars2.githubusercontent.com/u/43887749?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/rapidsai",
          html_url: "https://github.com/rapidsai",
          followers_url: "https://api.github.com/users/rapidsai/followers",
          following_url:
            "https://api.github.com/users/rapidsai/following{/other_user}",
          gists_url: "https://api.github.com/users/rapidsai/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/rapidsai/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/rapidsai/subscriptions",
          organizations_url: "https://api.github.com/users/rapidsai/orgs",
          repos_url: "https://api.github.com/users/rapidsai/repos",
          events_url: "https://api.github.com/users/rapidsai/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/rapidsai/received_events",
          type: "Organization",
          site_admin: false,
        },
        html_url: "https://github.com/rapidsai/cudf",
        description: "cuDF - GPU DataFrame Library",
        fork: false,
        url: "https://api.github.com/repos/rapidsai/cudf",
        forks_url: "https://api.github.com/repos/rapidsai/cudf/forks",
        keys_url: "https://api.github.com/repos/rapidsai/cudf/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/rapidsai/cudf/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/rapidsai/cudf/teams",
        hooks_url: "https://api.github.com/repos/rapidsai/cudf/hooks",
        issue_events_url:
          "https://api.github.com/repos/rapidsai/cudf/issues/events{/number}",
        events_url: "https://api.github.com/repos/rapidsai/cudf/events",
        assignees_url:
          "https://api.github.com/repos/rapidsai/cudf/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/rapidsai/cudf/branches{/branch}",
        tags_url: "https://api.github.com/repos/rapidsai/cudf/tags",
        blobs_url: "https://api.github.com/repos/rapidsai/cudf/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/rapidsai/cudf/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/rapidsai/cudf/git/refs{/sha}",
        trees_url: "https://api.github.com/repos/rapidsai/cudf/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/rapidsai/cudf/statuses/{sha}",
        languages_url: "https://api.github.com/repos/rapidsai/cudf/languages",
        stargazers_url: "https://api.github.com/repos/rapidsai/cudf/stargazers",
        contributors_url:
          "https://api.github.com/repos/rapidsai/cudf/contributors",
        subscribers_url:
          "https://api.github.com/repos/rapidsai/cudf/subscribers",
        subscription_url:
          "https://api.github.com/repos/rapidsai/cudf/subscription",
        commits_url: "https://api.github.com/repos/rapidsai/cudf/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/rapidsai/cudf/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/rapidsai/cudf/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/rapidsai/cudf/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/rapidsai/cudf/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/rapidsai/cudf/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/rapidsai/cudf/merges",
        archive_url:
          "https://api.github.com/repos/rapidsai/cudf/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/rapidsai/cudf/downloads",
        issues_url:
          "https://api.github.com/repos/rapidsai/cudf/issues{/number}",
        pulls_url: "https://api.github.com/repos/rapidsai/cudf/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/rapidsai/cudf/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/rapidsai/cudf/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/rapidsai/cudf/labels{/name}",
        releases_url:
          "https://api.github.com/repos/rapidsai/cudf/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/rapidsai/cudf/deployments",
        created_at: "2017-05-07T03:43:37Z",
        updated_at: "2020-12-17T18:37:37Z",
        pushed_at: "2020-12-17T18:37:33Z",
        git_url: "git://github.com/rapidsai/cudf.git",
        ssh_url: "git@github.com:rapidsai/cudf.git",
        clone_url: "https://github.com/rapidsai/cudf.git",
        svn_url: "https://github.com/rapidsai/cudf",
        homepage: "http://rapids.ai",
        size: 79812,
        stargazers_count: 3543,
        watchers_count: 3543,
        language: "C++",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 470,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 571,
        license: {
          key: "apache-2.0",
          name: "Apache License 2.0",
          spdx_id: "Apache-2.0",
          url: "https://api.github.com/licenses/apache-2.0",
          node_id: "MDc6TGljZW5zZTI=",
        },
        forks: 470,
        open_issues: 571,
        watchers: 3543,
        default_branch: "branch-0.18",
      },
    },
    _links: {
      self: {
        href: "https://api.github.com/repos/rapidsai/cudf/pulls/6775",
      },
      html: {
        href: "https://github.com/rapidsai/cudf/pull/6775",
      },
      issue: {
        href: "https://api.github.com/repos/rapidsai/cudf/issues/6775",
      },
      comments: {
        href: "https://api.github.com/repos/rapidsai/cudf/issues/6775/comments",
      },
      review_comments: {
        href: "https://api.github.com/repos/rapidsai/cudf/pulls/6775/comments",
      },
      review_comment: {
        href: "https://api.github.com/repos/rapidsai/cudf/pulls/comments{/number}",
      },
      commits: {
        href: "https://api.github.com/repos/rapidsai/cudf/pulls/6775/commits",
      },
      statuses: {
        href: "https://api.github.com/repos/rapidsai/cudf/statuses/3dfbd68fe975eb04ae7b2ffa6369856ae183963d",
      },
    },
    author_association: "MEMBER",
    active_lock_reason: null,
    merged: true,
    mergeable: true,
    rebaseable: null,
    mergeable_state: "clean",
    merged_by: {
      login: "rapids-ops-bot[bot]",
      id: 73299758,
      node_id: "MDM6Qm90NzMyOTk3NTg=",
      avatar_url: "https://avatars2.githubusercontent.com/u/43887749?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/rapids-ops-bot%5Bbot%5D",
      html_url: "https://github.com/apps/rapids-ops-bot",
      followers_url:
        "https://api.github.com/users/rapids-ops-bot%5Bbot%5D/followers",
      following_url:
        "https://api.github.com/users/rapids-ops-bot%5Bbot%5D/following{/other_user}",
      gists_url:
        "https://api.github.com/users/rapids-ops-bot%5Bbot%5D/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/rapids-ops-bot%5Bbot%5D/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/rapids-ops-bot%5Bbot%5D/subscriptions",
      organizations_url:
        "https://api.github.com/users/rapids-ops-bot%5Bbot%5D/orgs",
      repos_url: "https://api.github.com/users/rapids-ops-bot%5Bbot%5D/repos",
      events_url:
        "https://api.github.com/users/rapids-ops-bot%5Bbot%5D/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/rapids-ops-bot%5Bbot%5D/received_events",
      type: "Bot",
      site_admin: false,
    },
    comments: 6,
    review_comments: 24,
    maintainer_can_modify: false,
    commits: 27,
    additions: 222,
    deletions: 3,
    changed_files: 9,
  },
});
