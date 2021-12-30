---
id: dart-flutter-style-guide
title: Dart/Flutter Style Guide
sidebar_label: Dart/Flutter Style Guide
---

We follow Effective Dart's [style guide](https://dart.dev/guides/language/effective-dart/style) and 
[documentation style guide](https://dart.dev/guides/language/effective-dart/documentation). 

## Characters Line Limit.

An exception to Effective Dart is the characters line limit. Instead of **_80_** characters, we adhere to a **_120_** characters line limit.

## Avoid `null` Assertions

Developers may be frustrated with converting nullable types to non-nullable types and forcefully convert a nullable type
using the null assertion operator. However, doing so comes with a loss of static safety. This is undesirable in most cases 
since it circumvents the type system and is a potential source of bugs. Instead, the null-aware operator and checking if a 
value is null should be performed. 

The following section contains counterexamples and the recommended alternatives.

#### Calling a method of a nullable object
```dart
// Bad
String foo = NullableObject!.bar();

// Good
String? foo = NullableObject?.bar();

String foo = NullableObject?.bar() ?? 'default value';
```

#### Assigning a nullable object to a non-nullable object
```dart
// Bad
String foo = bar!;

// Good
final foo = bar;
if (foo == null) {
  // Handle logic here
}

// foo is now non-nullable here
```

One caveat is tests. In tests, it is acceptable to use the `null` assertion operator. This is because the brevity and readability
of tests outweighs the loss of static safety. Furthermore, tests are localized and are therefore easier to reason about.

See [Dart null safety](https://dart.dev/null-safety/understanding-null-safety) for more information.
