import { config as baseConfig } from "@repo/eslint-config/react-vite";
import storybook from "eslint-plugin-storybook";

/** @type {import("eslint").Linter.Config} */
const config = [
    ...baseConfig,
    ...storybook.configs["flat/recommended"],
]
export default config;
