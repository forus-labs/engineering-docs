---
id: git-gud
title: Git Gud
sidebar_label: Git Gud
---
_An introduction to Forus Labs' Git workflow._

Forus Labs' Git workflow is modelled after the [trunk-based development model](https://trunkbaseddevelopment.com/) albeit with a few adjustments.

## The `master` Branch

Each Git repository contains a permanent `master` branch with production-ready code. During deployment to production, 
a commit on `master` is tagged and a corresponding GitHub release is created. This tagged commit is then subsequently deployed.

## Ephemeral Branches

Ephemeral branches contain new features and improvements that are being worked on. As the name suggests, ephemeral branches 
are temporary, short-lived branches which aid in the concurrent development of new features. They are created from either `master` 
or other ephemeral branches and always merged back into `master`.

![Branching Model](/img/collaboration/feature-branch.png)

<p class="caption">
    Forus Labs' Git workflow
</p>

There are two different types of ephemeral branches:

| Type    | Prefix        | Description                            |
|:--------|:--------------|:---------------------------------------|
| feature | `feature/...` | contains new features and enhancements |
| fix     | `fix/...`     | contains bug fixes                     |


An ephemeral branch name starts with a prefix, followed by a description. The description should be a short summary of what 
changes the branch contains. Spaces in the description are replaced with hyphens.

For example, an ephemeral branch that adds laser beams should be named `feature/laser-beams` while a branch that fixes exploding 
buttons should be named `fix/exploding-buttons`.

To request feedback on a feature's progress or when a feature is ready, open a pull request. The pull request will then be 
commented on and reviewed. If the pull request is approved, the ephemeral branch is merged into `master` by the reviewer
and deleted by the pull request author.