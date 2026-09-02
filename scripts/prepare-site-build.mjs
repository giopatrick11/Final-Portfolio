import { copyFile, mkdir } from "node:fs/promises";

await mkdir("dist/server", { recursive: true });
await copyFile("src/site-worker.js", "dist/server/index.js");
