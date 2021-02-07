module.exports = {
    env: {
        browser: true,
        es2020: true,
        node: true,
    },
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "import"],
    extends: [
        // Base settings
        "eslint:recommended",
        "airbnb-base",

        // Override rules for TypeScript
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended",

        // Disable rules conflicting with Preitter
        "prettier",
        "prettier/@typescript-eslint",
    ],
    rules: {
        "import/extensions": ["error", "never", { css: "always", scss: "always" }], // Disabled import extensions for all files except css, scss
        "import/prefer-default-export": "off", // Allow exporting one
        "import/no-cycle": "off", // Allow circular dependencies

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
            "error",
            "always",
            {
                exceptAfterSingleLine: true,
            },
        ], // Enforce lines between class members except for one liners
        "radix": ["error", "as-needed"], // Allow not needing 10 for radix
        "one-var": "off", // Allow multiple variable declarations on one line
    },
};
