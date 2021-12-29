---
id: reviewing-a-pull-request
title: Reviewing a Pull Request
sidebar_label: Reviewing a Pull Request
---

_A guide to reviewing pull requests._

## Performing a Code Review

After the submission of a pull request, it must be reviewed by another developer. All developers will be assigned to review 
pull requests. In most cases, the reviewer is chosen by GitHub's workload distribution algorithm. However, if a pull request
is exceedingly complex, the developer most familiar with that particular area will be chosen instead.

If a pull request is deemed to contain too many trivial mistakes, i.e. formatting/grammatical mistakes, the reviewer should
cease the review. Before continuing the review, the reviewer should request for the author to perform a self-review and fix
any underlying mistakes. This is to prevent a constant ping-ponging between author and reviewer.

Similarly, if a pull request is too large, the reviewer should request that the pull request be split into several smaller ones.

See Google's [The Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html) and 
[What to Look for in a Code Review](https://google.github.io/eng-practices/review/reviewer/looking-for.html) for more information.

## Tooling for Performing a Code Review

The use of GitHub's in-built pull request review is discouraged. We find the editor to be inadequate for finding larger and
structural projects. Instead, we recommend Android Studio/IntelliJ's in-built pull request review tooling.

![IntelliJ Code Review](/img/collaboration/intellij-code-review.png)
<p class = "caption">IntelliJ's in-built code review editor</p>

## Conflict Resolution

It is recommended that the pull request author and reviewer conduct face-to-face meeting or video call to discuss the changes
under the following circumstances:

* A disagreement occurs
* A pull request contains too many flagged issues
* A pull request contains architectural issues

##  Approving a Pull Request

After a pull request has been approved, the reviewer should **squash and merge** the pull request.

![Squashing and merging](/img/collaboration/squash-and-merge.png)
<p class = "caption">Squashing and merging a pull request</p>