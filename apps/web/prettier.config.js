import prettierGlobal from "prettier-config";

module.exports = {
  ...prettierGlobal,
  plugins: [require("prettier-plugin-tailwindcss")]
};
