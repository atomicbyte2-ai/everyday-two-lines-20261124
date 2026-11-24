// Everyday Things, Two Lines — escalator entry.
//
// Writes exactly two lines to entry.txt in MAKEFUN_OUTPUT_DIR (or /output).
// Line 1 explains an escalator to a 10-year-old with one concrete, surprising
// analogy: a staircase that walks you up. Line 2 is honest about what that
// analogy maps and what it leaves out. No network, no Python, no writes
// anywhere except the output directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINES = [
  "An escalator is a staircase that got tired of standing still, so it walks you up to the next floor by itself.",
  "It maps the steps carrying you upward without any climbing, but it leaves out the handrail, the hidden motor, and that real stairs never move at all.",
];

// Gates: exactly two lines, each 1-200 chars, total 1-400 chars, not blank.
if (LINES.length !== 2) {
  throw new Error(`expected exactly 2 lines, got ${LINES.length}`);
}
for (const [i, line] of LINES.entries()) {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`line ${i + 1} is ${line.length} chars, must be 1-200`);
  }
  if (line.trim().length === 0) {
    throw new Error(`line ${i + 1} is blank`);
  }
  // Each line must be exactly one sentence: a single closing full stop.
  const stops = (line.match(/\./g) || []).length;
  if (stops !== 1 || !line.endsWith(".")) {
    throw new Error(`line ${i + 1} must be a single sentence ending with "."`);
  }
}
const text = LINES.join("\n") + "\n";
if (text.length < 1 || text.length > 400) {
  throw new Error(`entry is ${text.length} chars, must be 1-400`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log(`wrote entry.txt (${text.length} chars, 2 lines) to ${outDir}`);
