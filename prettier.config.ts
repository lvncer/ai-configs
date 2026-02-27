import type { Config } from "prettier";

const config: Config = {
  printWidth: 88,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: "all",
  plugins: ["prettier-plugin-sh"],
};

export default config;
