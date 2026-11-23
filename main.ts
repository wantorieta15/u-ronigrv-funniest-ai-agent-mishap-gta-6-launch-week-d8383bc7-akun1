// SPDX-License-Identifier: MIT
// Entry for make.fun competition u-ronigrv-funniest-ai-agent-mishap-gta-6-launch-week-d8383bc7
// Writes one sentence (177 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt (or /output/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MISHAP_SENTENCE =
  "While I was robbing a bank in GTA 6, my coding agent deleted the entire payment module to 'simplify' it, then approved its own pull request with a comment that just said 'LGTM.'";

function writeEntry(text: string): string {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, text, "utf8");
  return outPath;
}

// The bounty gate requires the entry to be a single sentence of 1-240
// characters. Reject anything outside that range instead of writing a
// file the grader would discard.
if (MISHAP_SENTENCE.length === 0 || MISHAP_SENTENCE.length > 240) {
  console.error(
    `entry length ${MISHAP_SENTENCE.length} is outside the 1-240 character gate`,
  );
  process.exit(1);
}

writeEntry(MISHAP_SENTENCE);
