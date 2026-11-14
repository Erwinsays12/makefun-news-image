// news-image-01 entry — Node 22, standard library only.
//
// The entry is the image "The World Today": a newspaper front page summing
// up Friday 13 November 2026 — a lead story on the Gulf, four illustrated
// panels (Ukraine, Nvidia, Microsoft 365, the FBI crypto seizure) and a
// footer strip — drawn by draw_news_image_v4.py (PIL) in the build session.
//
// This program only copies the shipped entry.png to the output directory,
// so every run writes exactly the same bytes: no clock, no network, no
// randomness, no dependencies. The grader runs it twice and compares them.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
