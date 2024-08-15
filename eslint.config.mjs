import { ESLint } from "eslint";

export default [
  // Specify environments (e.g., Node.js, Jest)
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    env: {
      node: true,
      jest: true,
    },
    globals: {},
  },

  // Extends standard ESLint configurations
  {
    files: ["*.js"],
    extends: ["eslint:recommended", "plugin:prettier/recommended"],
  },

  // Define custom rules
  {
    rules: {
      "prettier/prettier": ["error"],
      "no-console": "warn",
      semi: ["error", "always"],
      quotes: ["error", "double"],
    },
  },
];
