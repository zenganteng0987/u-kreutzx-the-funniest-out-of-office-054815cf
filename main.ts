// SPDX-License-Identifier: MIT
// The Funniest Out-of-Office — u-kreutzx-the-funniest-out-of-office-054815cf
// Writes a single one-line out-of-office auto-reply to /output/entry.txt
// (or $OUTPUT_PATH when set, so local tests never touch the real output).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "I'm out of the office. Your email will be answered in the order received, which is to say: never, and alphabetically.";

const outputPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

mkdirSync(dirname(outputPath), { recursive: true });
// No trailing newline: the file holds exactly the one line, nothing else.
writeFileSync(outputPath, ENTRY, "utf8");
