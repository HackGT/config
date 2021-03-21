# HexLabs Config

Shared project configuration for HexLabs projects!

## Script Configurations

- [commitlint-config](./packages/commitlint-config)
- [eslint-config](./packages/eslint-config)
- [eslint-config-react](./packages/eslint-config-react)
- [prettier-config](./packages/prettier-config)
- [stylelint-config](./packages/stylelint-config)
- [tsconfig](./packages/tsconfig)

## Quickstart

### Client
These steps will setup `eslint`, `prettier`, and `stylelint` for a TypeScript React app.

```bash
npm install --save-dev @hex-labs/eslint-config-react @hex-labs/prettier-config @hex-labs/stylelint-config eslint prettier stylelint

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
  "lint": "eslint src/ --fix; stylelint src/**/*.css --fix; prettier src/ --write"
}
```

### Server
These steps will setup `eslint`, `prettier`, and `tsconfig` for a TypeScript Node app.

```bash
npm install --save-dev @hex-labs/eslint-config @hex-labs/prettier-config @hex-labs/tsconfig eslint prettier

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
  "lint": "eslint src/ --fix; prettier src/ --write"
}
```

## Attribution
Inspired by [jdp-scripts](https://github.com/john-d-pelingo/jdp-scripts)

## License

[MIT](LICENSE) &copy; HexLabs
