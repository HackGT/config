# HexLabs Config

Config is shared project configuration we use for all HexLabs projects. These configurations help
ensure all of our code is written in the same format and our code style is consistent and readable.

## Script Configurations

- [commitlint-config](./packages/commitlint-config)
  - Checks that the commit messages match a conventional commit format
- [eslint-config](./packages/eslint-config)
  - Lints TypeScript/JavaScript code when used in the backend
- [eslint-config-react](./packages/eslint-config-react)
  - Similar to above, lints TypeScript/JavaScript code but also includes additional linting rules
    for React frontend
- [prettier-config](./packages/prettier-config)
  - An opinionated code formatter for many languages to beautify the code style
- [stylelint-config](./packages/stylelint-config)
  - Linter used for CSS rules and syntax that can automatically fix problems
- [tsconfig](./packages/tsconfig)
  - Specifies the rules of a TypeScript project that are used to compile the code

## Quickstart

### Client (React)

These steps will setup `eslint`, `prettier`, and `stylelint` for a TypeScript React app.

```bash
yarn add --dev @hex-labs/eslint-config-react @hex-labs/prettier-config @hex-labs/stylelint-config eslint prettier stylelint
```

Add these lines to your `package.json`

```json
"eslintConfig": {
  "extends": "@hex-labs/eslint-config-react"
},
"prettier": "@hex-labs/prettier-config",
"stylelint": {
  "extends": "@hex-labs/stylelint-config"
}
```

To run, add a `lint` script to `package.json`

```json
"scripts": {
  "lint": "eslint src/ --fix; stylelint src/**/*.css --fix; prettier . --write"
}
```

### Server (Node)

These steps will setup `eslint`, `prettier`, and `tsconfig` for a TypeScript Node app.

```bash
yarn add --dev @hex-labs/eslint-config @hex-labs/prettier-config @hex-labs/tsconfig eslint prettier
```

Add these lines to your `package.json`

```json
"eslintConfig": {
  "extends": "@hex-labs/eslint-config"
},
"prettier": "@hex-labs/prettier-config"
```

Replace your `tsconfig.json` with

```json
"extends": "@hex-labs/tsconfig"
```

To run, add a `lint` script to `package.json`

```json
"scripts": {
  "lint": "eslint src/ --fix; prettier . --write"
}
```

## How to Contribute

### Commit Guidelines

We use commitlint to ensure all commits follow a standard guidelines to generated release changelog
messages. You can view the format of the commit messages
[here](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#-commit-message-format).

### Testing

Each package has an associated `__tests__` folder that holds tests to run with `tape`. Before
committing and releasing new versions, all the tests will be run to ensure they pass.

### Release

To release a new version, run `yarn release` and `git push --follow-tags origin main` to push the
tags as well. Once the commits are pushed, GitHub Actions will automatically run a workflow to
publish a new version to npm.

## Attribution

Inspired by [jdp-scripts](https://github.com/john-d-pelingo/jdp-scripts).

## License

[MIT](LICENSE) &copy; HexLabs
