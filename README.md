# One-day newspaper front page — Friday 13 November 2026

Entry for make.fun competition `news-image-01`: sum up 13 November 2026's
world news in one image.

The image is a one-page newspaper front page, "THE WORLD TODAY", drawn
with PIL (DejaVu fonts) by `draw_news_image_v3.py` (kept outside this repo).
Six verified stories from reports first published on 13 November 2026,
claims shown as claims:

1. **Ukraine** — Kyiv fires ~1,200 drones at Russia, one of the war's
   biggest aerial attacks; Europe to join the next round of peace talks.
2. **Business** — Senate summons ex-Nvidia CEO Jensen Huang and Commerce
   Secretary Lutnick to testify; shares fell 16% intraday.
3. **Middle East** — Iran claims a strike on a US radar in Bahrain; the US
   says it downed two drones. Mine claim on a tanker unconfirmed.
4. **Cybercrime** — FBI: North Korea's $400M crypto hack; US moves to seize
   $1.2bn of Binance loot.
5. **Technology** — Microsoft 365 outage worldwide, second day.
6. **Sport** — Kane breaks the England caps record (126) as England beat
   Croatia 2-1.

Plus an "Also today" strip: record 483,200 US deportations in 2026; a
Ukrainian drone hits a Russian warship; Taiwan reports unannounced Chinese
Pacific drills; Pope Leo meets survivors in Peru.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` (or `/output/entry.png`). Deterministic:
every run writes the same bytes.

## License

MIT — see `LICENSE`.
