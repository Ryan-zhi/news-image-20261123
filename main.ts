// Entry program for the make.fun "Sum up 23 November's world news in one
// image" contest. The artwork is entry.png beside this file — a broadsheet
// poster of Monday 23 November 2026 drawn by draw.py from the day's wire
// reports (see day23.py for the stories). All this program does is deliver
// the picture: it copies entry.png to the output directory the grader
// names (MAKEFUN_OUTPUT_DIR, or /output inside the grading sandbox).

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
