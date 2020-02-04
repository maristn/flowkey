# QA Piano Task

This repository contains the instruction and codebase for an interview task as a QA Engineer at [flowkey](https://www.flowkey.com).

*If anything here is unclear or any questions come to your mind, don’t hesitate to contact us - we’re here to help you!*

## Task Instruction

1. Please copy this codebase to a private repo on your Github account by using [Github Importer](https://help.github.com/en/articles/importing-a-repository-with-github-importer) or by cloning it (don't create a fork!).

2. Add a Pull Request (to merge your changes to `master` of your copy, not this repository!) implementing test cases for the [piano-recorder](piano-recorder) application as specified below.

### Test cases to add

- at least 2 UI tests
- at least 2 integration tests including client and server-side
- at least 3 client-side unit tests
- at least 1 server-side unit test

These test cases should cover a selection of [known isses](#known-issues) as listed below but also new issues you figure out yourself.


### Requirements for test cases

- Each test should only cover a single, well-defined piece of functionality.
- Tests should be written for both expected behavior in addition to bug regression tests.
- Test code should use descriptive naming and clear structure.
- Tests should use selectors with enough specificity to be robust against app code changes.
- Adding of classes and other minor changes to the app code should be made where appropriate to improve test readability and robustness.
- Tests should wait for the DOM and network requests to be ready, while avoiding arbitrary timeouts.
- Tests should be reasonably efficient. Assume that the tests will be run as part of a much larger, more complex app, and will be run many times per day.

### Known issues

This is an initial, non-exhaustive list of issues. There are several other ones to be discovered.

- Should not need to wait for the sound of each note to finish before pressing the same key again.
- After pressing 'Store Song', the 'My Songs' list does not update until the app is refreshed.
- Pressing 'Store Song' does not clear the list of stored notes. Unless 'Start Song' is then pressed, all the notes from the previously stored song will be included in the next stored song.
- Shouldn't be possible to store a song with no notes.
- Pressing "Replay" on stored song with no notes causes error.
- Pressing "Replay" only plays the first two notes of the song, unless the song just repeats the same note.
- Shouldn't be possible for song title to be empty.

## Provided Codebase

The codebase consists of:
- an implementation of a buggy React [piano-recorder](piano-recorder) containing a server and client side part
- a simple testing setup based on Jest and Cypress

