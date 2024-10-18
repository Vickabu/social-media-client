import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";
import pluginCypress from "eslint-plugin-cypress";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.node,
        cy: "readonly",
        Cypress: "readonly",
      },
    },
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      jest: pluginJest,
    },
    rules: {
      ...pluginJest.configs.recommended.rules,
      "jest/valid-expect": "off",
    },
  },
  {
    files: ["**/*.cy.js", "cypress.config.js"],
    languageOptions: {
      globals: {
        cy: "readonly",
        Cypress: "readonly",
      },
    },
    plugins: {
      cypress: pluginCypress,
    },
    rules: {
      "cypress/no-unnecessary-waiting": "off",
      "no-unused-vars": "off",
      "jest/valid-expect": "off",
      "jest/no-test-without-assert": "off",
      "jest/expect-expect": "off",
    },
  },
];
