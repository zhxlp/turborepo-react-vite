import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";
import packageJson from "../package.json";

const theme = create({
  base: "light",
  brandTitle: packageJson.name,
});

addons.setConfig({
  theme: theme,
});
