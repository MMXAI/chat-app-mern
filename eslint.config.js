import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  pluginJs.configs.recommended,
  {
    languageOptions: { globals: globals.node },
    rules: {
      semi: "error",
      eqeqeq: "error",
      "default-case": "error",
    },
  },
];
