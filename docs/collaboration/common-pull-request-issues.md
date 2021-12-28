---
id: common-pull-request-issues
title: Common Pull Request Issues
sidebar_label: Common Pull Request Issues
---

_A non-exhaustive list of frequently encountered pull request issues._

Collated below is a non-exhaustive list of frequently encountered pull request issues. By collating these issues, it is
our intention that developers recognize what issues to look out for when performing a self-review.

## Grammatical Mistakes and Awkward Phrasing in Documentation

One common issue is grammatical mistakes and awkward phrasing in the documentation of code. To minimize the occurrence of
these issues, it is recommended to perform the following:
* Consider using a grammar checker such as Grammarly or switching to Android Studio/IntelliJ which contain a built-in grammar checker
* Refer to existing documentation in the same project. It is likely that the project contains similar abstractions. Emulating
the existing documentation is a great method of ensuring that documentation is consistent.
* Refer to how a language's standard library phrases similar concepts. Using phrasing and terminology consistent with the language's
reduces the cognitive burden of those reading the documentation
* Repeatedly read through the documentation.

See Google's [technical writing guide](https://developers.google.com/tech-writing) for more information.

## Import Ordering
Most IDEs place suggested import statements either at the top of the file or in alphabetical order. Neither of which confirm
to our style guide. 

If the project uses Dart/Flutter, consider running the following command to sort all import statements:
```
flutter pub run import_sorter:main
```