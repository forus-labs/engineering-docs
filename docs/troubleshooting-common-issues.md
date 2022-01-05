---
id: troubleshooting-common-issues
title: Troubleshooting Common Issues
sidebar_label: Troubleshooting Common Issues
---

_Heuristics for debugging and troubleshooting common issues._

This document contains information that we consider to be useful for troubleshooting common issues. Don't be afraid to reach 
out if you're still facing issues after reading through this document! After which, please consider contributing the problem
and the recommended solution to this document. It is likely that another developer will benefit from it in the future.

## Flutter

Before skipping to the relevant sections, consider completing the following checklist. From our experience, most issues
can be resolved by performing the steps in the following checklist.

* Are you running the latest version of `dart` or `flutter`? What does `dart --version` or `flutter doctor -v` print?
* Do you have the latest dependencies for the project? Have you ran `flutter pub upgrade`?
* Have you generated the necessary files? Have you ran `flutter pub run build_runner build --delete-conflicting-outputs`?
* Are you using the correct environment? The project might use `jeeves`. If so, have you ran `flutter pub jeeves load <environment>`?

#### `flutter pub get`/`flutter pub run build_runner build` could not find a `pubspec.yaml` in a dependency

It is possible that the downloaded dependencies are corrupted. Delete the `pubspec.lock` and pub's cache. Pub's cache can
be found inside the Dart/Flutter's installation.

#### `flutter pub run build_runner build` does not generate files

It is possible that `build_runner`'s cached asset graph is stale. Delete the generated file if it already exists and run
`flutter pub run build_runner clean`.