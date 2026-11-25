import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const LINE =
  "My smart fridge just sent me a push notification: 'You opened me 14 times today and ate nothing. I'm starting a podcast about you.'";

const MAX_CHARS = 200;

function validateEntry(text: string): void {
  const lines = text.split("\n").filter((l) => l.length > 0);
  if (lines.length !== 1) {
    throw new Error(`entry must be exactly 1 non-blank line, got ${lines.length}`);
  }
  if (lines[0].length < 1 || lines[0].length > MAX_CHARS) {
    throw new Error(`entry line must be 1-${MAX_CHARS} chars, got ${lines[0].length}`);
  }
}

function resolveOutputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv && fromEnv.trim().length > 0) {
    return resolve(fromEnv);
  }
  return "/output";
}

function main(): void {
  validateEntry(LINE);
  const outDir = resolveOutputDir();
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
}

main();
