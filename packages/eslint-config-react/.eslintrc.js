module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "import", "react"],
  extends: [
    // Base settings
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
    "react-app",

    // Override rules for TypeScript
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",

    // Disable rules conflicting with Preitter
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  rules: {
    "import/extensions": ["error", "never", { css: "always", scss: "always" }], // Disabled import extensions for all files except css, scss
    "import/prefer-default-export": "off", // Allow exporting one
    "import/no-cycle": "off", // Allow circular dependencies
    "import/order": [
      "warn",
      {
        "groups": [
          ["builtin", "external"],
          ["internal", "parent", "sibling", "index"],
        ],
        "newlines-between": "always",
      },
    ], // Fix import order and groupings

    "@typescript-eslint/no-explicit-any": "off", // Allow using explicity any
    "@typescript-eslint/explicit-module-boundary-types": "off", // Turns off explicit typing since it can inferred and not needed
    "@typescript-eslint/ban-ts-comment": "off", // Allow ts directives
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        functions: true,
        classes: true,
        variables: true,
      },
    ], // Define TypeScript rule instead of default

    "no-console": "off", // Allow console logs
    "no-return-await": "off", // Allow return await func();
    "no-use-before-define": "off", // Use TypeScript rule instead
    "lines-between-class-members": [
      "warn",
      "always",
      {
        exceptAfterSingleLine: true,
      },
    ], // Enforce lines between class members except for one liners
    "radix": ["error", "as-needed"], // Allow not needing 10 for radix
    "one-var": "off", // Allow multiple variable declarations on one line

    "react/prop-types": ["off"], // Not needed
    "react/jsx-props-no-spreading": ["off"], // Not needed
    "react/destructuring-assignment": ["off"], // Not needed
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }], // Allow using JSX in .tsx files as well
  },
};
