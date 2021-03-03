# Contributing to Config

Config is shared project configuration we use for all HexLabs projects.

## Commit Guidelines

We use commitlint to ensure all commits follow a standard guidelines to generated release changelog messages. You can view the format of the commit messages [here](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format).

## Testing

Each package has an associated `__tests__` folder that holds tests to run with `tape`. Before committing and releasing new versions, all the tests will be run to ensure they pass.

## Release

To release a new version, run `yarn release` and `git push --follow-tags origin master` to push the tags as well. Once the commits are pushed, GitHub Actions will run a workflow to publish a new version to npm.
