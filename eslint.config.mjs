import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";
import pluginCypress from "eslint-plugin-cypress";

export default [
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.jest, ...globals.node },
    },
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      jest: pluginJest,
    },
    rules: {
      ...pluginJest.configs.recommended.rules,
    },
  },
  {
    files: ["**/*.cy.js", "cypress.config.js"],
    languageOptions: {
      globals: {
        "cypress/globals": true,
      },
    },
    plugins: {
      cypress: pluginCypress,
    },
    rules: {
      "cypress/no-unnecessary-waiting": "off",
      "no-unused-vars": "off",
    },
  },
];
