import { config as reactBaseConfig } from "./react-base.js";

/**
 * A custom ESLint configuration for libraries that use React.
 *
 * @type {import("eslint").Linter.Config[]} */
export const config = [
  ...reactBaseConfig,
];
