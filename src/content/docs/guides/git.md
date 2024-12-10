---
title: Git Handbook
description: A guide in my new Starlight docs site.
---

## Code style

When contributing to Redot's source code, you will be expected to follow the
style guidelines outlined below. Some of them are checked via the Continuous
Integration process and reviewers will ask you to fix potential issues, so
best setup your system as outlined below to ensure all your commits follow the
guidelines.

## C++ and Objective-C

There are no written guidelines, but the code style agreed upon by the
developers is enforced via the [Clang Format](https://github.com/godotengine/godot/blob/master/.clang-format>)
code beautifier, which takes care for you of all our conventions.
To name a few:

- Indentation and alignment are both tab based (respectively one and two tabs)
- One space around math and assignments operators as well as after commas
- Pointer and reference operators are affixed to the variable identifier, not
  to the type name
- See further down regarding header includes

The rules used by clang-format are outlined in the
[Clang Format](https://github.com/godotengine/godot/blob/master/.clang-format>) file of the Redot repository.

As long as you ensure that your style matches the surrounding code and that you're
not introducing trailing whitespace or space-based indentation, you should be
fine. If you plan to contribute regularly, however, we strongly advise that you
set up clang-format locally to check and automatically fix all your commits.


## Using clang-format locally

You need to use **clang-format 17** to be compatible with Redot's format. Later versions might
be suitable, but previous versions may not support all used options, or format
some things differently, leading to style issues in pull requests. (See [Clang Format](git/clang-format))

