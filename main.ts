import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Our manager moved the 9 a.m. stand-up to 8:45 so we'd 'start sharp' — now fifteen of us stand in a circle at dawn, quietly resenting a man named Greg.";

// Gate guard: the sealed scorer requires 1–200 characters, not only whitespace.
const chars = [...entry].length;
if (chars < 1 || chars > 200 || entry.trim().length === 0) {
  throw new Error(`entry is ${chars} characters, must be 1-200 and non-blank`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
