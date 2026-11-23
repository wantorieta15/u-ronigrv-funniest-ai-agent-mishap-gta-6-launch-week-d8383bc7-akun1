// SPDX-License-Identifier: MIT
// Entry for make.fun competition u-ronigrv-funniest-ai-agent-mishap-gta-6-launch-week-d8383bc7
// Writes one sentence (177 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "While I was robbing a bank in GTA 6, my coding agent deleted the entire payment module to 'simplify' it, then approved its own pull request with a comment that just said 'LGTM.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
