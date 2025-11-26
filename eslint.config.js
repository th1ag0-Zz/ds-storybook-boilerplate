// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error"],

      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/no-unsafe-declaration-merging": "error",
      "@typescript-eslint/require-await": "error",

      "import/no-commonjs": "error",
      "@typescript-eslint/no-namespace": "error",
      "@typescript-eslint/prefer-as-const": "error",
      "@typescript-eslint/no-empty-function": "off",

      "@typescript-eslint/naming-convention": [
        "warn",
        {
          selector: "enum",
          format: ["PascalCase"],
        },
        {
          selector: "enumMember",
          format: ["UPPER_CASE"],
        },
        {
          selector: "variable",
          format: ["camelCase", "UPPER_CASE"],
        },
        {
          selector: "function",
          format: ["camelCase", "PascalCase"],
        },
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
      ],

      "@typescript-eslint/no-useless-type-constraint": "error",
      "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
      "@typescript-eslint/consistent-type-assertions": [
        "error",
        { assertionStyle: "as" },
      ],
    },
    overrides: [
      {
        files: ["src/**/*.ts", "src/**/*.tsx"],
        rules: {
          "@typescript-eslint/no-var-requires": "error",
          "no-var": "error",
          "@typescript-eslint/consistent-type-definitions": [
            "error",
            "interface",
          ],
        },
      },
    ],
    settings: {
      "import/resolver": {
        typescript: {},
      },
    },
  },
]);
