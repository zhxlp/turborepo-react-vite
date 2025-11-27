import reactRefresh from 'eslint-plugin-react-refresh'
import { globalIgnores } from "eslint/config";
import { config as reactBaseConfig } from "./react-base.js";

/**
 * A custom ESLint configuration for libraries that use React.
 *
 * @type {import("eslint").Linter.Config[]} */
export const config = [
  ...reactBaseConfig,
  reactRefresh.configs.vite,
    globalIgnores([
    // Default ignores of eslint-config-next:
    "out/**",
    "build/**",
  ]),
];
