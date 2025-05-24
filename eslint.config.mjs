import globals from "globals";
import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";
export default [
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  {
    files: ["**/*.{js,jsx,mjs,cjs}"],
    plugins: {
      react,
      prettier,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "no-unused-vars": "error",
      camelcase: "error",
      "prettier/prettier": "warn",
    },
  },
];
