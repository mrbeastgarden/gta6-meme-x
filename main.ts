// Entry program for the make.fun bounty "Post a GTA 6 meme on X" (gta6-meme-x-01).
//
// The entry itself is the X post: a GTA 6 meme whose picture shows make.fun's
// ghost mascot, posted from a public account with make.fun (or @makefunai) and
// the entrant's play code in its text. The house reads that post from X and
// hands its first picture and its text to the judge. Nothing this program
// writes is judged.
//
// All this program does is hand the post's address over: it reads POST.json
// from the repository root and writes an identical copy into the output
// directory, where the gate reads it. Node 22, standard library only, no
// network access, no clock, no files outside the repository: two runs write
// the same bytes.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const SOURCE = join(BOT_DIR, 'POST.json');
const TARGET = join(OUTPUT_DIR, 'POST.json');

mkdirSync(OUTPUT_DIR, { recursive: true });

let postFile: Buffer;
try {
  postFile = readFileSync(SOURCE);
} catch (err) {
  console.error(`Could not read POST.json from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// Refuse to hand over a malformed post file: the gate rejects anything that
// is not a JSON object naming an X post address, so fail loudly here instead
// of copying garbage into /output.
let parsed: unknown;
try {
  parsed = JSON.parse(postFile.toString('utf8'));
} catch (err) {
  console.error(`POST.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (
  typeof parsed !== 'object' ||
  parsed === null ||
  typeof (parsed as { url?: unknown }).url !== 'string'
) {
  console.error('POST.json must be a JSON object with a string "url" field.');
  process.exit(1);
}

writeFileSync(TARGET, postFile);
