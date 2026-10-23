import { cpSync, mkdirSync, rmSync } from "node:fs";

const output = "dist";
const files = ["index.html", "manifest.webmanifest", "sw.js", "icons"];

rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });

for (const file of files) {
  cpSync(file, `${output}/${file}`, { recursive: true });
}
