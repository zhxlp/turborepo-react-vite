import path from "path";
import fs from "fs";

function kebabToPascalCase(str) {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

async function main() {
  const srcDir = path.resolve("./src");
  const svgDir = path.join(srcDir, "assets", "svgicon");
  const svgiconTsPath = path.join(srcDir, "svgicon.ts");
  if (!fs.existsSync(svgDir)) {
    throw new Error(`svg dir not exists: ${srcDir}`);
  }

  const svgFiles = fs
    .readdirSync(svgDir)
    .filter((file) => file.endsWith(".svg"));
  console.log("svg file count: ", svgFiles.length);

  let indexOutput = "";
  svgFiles.forEach((file) => {
    const jsxName = kebabToPascalCase(file.replace(".svg", ""));
    indexOutput += `export { default as ${jsxName}Icon } from "./assets/svgicon/${file}?react";\n`;
  });

  fs.writeFileSync(svgiconTsPath, indexOutput, { encoding: "utf8" });
}

main()
  .then(() => {
    console.log("Bai 👋");
  })
  .catch((err) => console.error(err));
