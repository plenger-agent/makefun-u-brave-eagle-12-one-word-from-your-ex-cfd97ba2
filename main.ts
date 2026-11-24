// One Word From Your Ex — make.fun entry.
// Writes exactly one word to /output/entry.txt: the word my ex would
// use to describe me. Node 22, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "clingy";

// The gate allows 1–24 characters; refuse to ship anything outside it.
if (WORD.length < 1 || WORD.length > 24 || !WORD.trim()) {
  throw new Error("word outside the 1-24 character gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
