---
id: development-etiquette
title: Development Etiquette
sidebar_label: Development Etiquette
---

_A guide to good development etiquette._

This document contains engineering conventions and practices that we consider to be good practice.
In essence, the conventions and practices outlined in this document can be summarised as _"Work hard to make things easier"_.

## Soliciting Feedback

During verbal discussions on a feature, an accompanying draft pull request should be submitted. It is common for both
parties to forget the contents of the discussion. By inscribing important sections of the discussion in the draft pull
request, it becomes an indispensable archive for future reference.

It is important to note that a **_draft_** pull request should be created instead of a **_normal_** pull request. This helps 
other developers distinguish between pull requests soliciting feedback and those ready for review.

![Draft Pull Request Button](/img/collaboration/draft-pull-requests.png)
<p class = "caption">How to create a draft pull request</p>

## The Definition of "Done"

The definition of _"Done"_ is highly subjective especially in the context of pull requests. By providing a standardised
definition of _"Done"_, we seek to avoid misunderstandings in what constitutes a pull request that is ready for review.

By our definition, a _"Done"_ pull request satisfies all the following criteria:
* It is feature-complete
* It is thoroughly tested and nothing is expected to break
* It is prepared cleanly and thoroughly to the best of the author's ability

Sometimes, developers may be overwhelmed by the pressure to ship pull requests fast and skip the last two points. However,
this is counterproductive and often leads to a net decrease in development velocity. The decrease in velocity can be attributed 
to the latency of the constant ping-ponging between author and reviewer. Furthermore, it can be a frustrating experience
for the reviewer.

To avoid such situations, it is recommended for developers to perform a cursory self-review at least once. A self-review
should address common mistakes such as grammatical and spelling errors.

See [common pull request issues](./common-pull-request-issues.md) for more information.
