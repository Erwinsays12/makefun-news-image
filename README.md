# The World Today — Friday 13 November 2026

A one-page newspaper front page summing up Friday 13 November 2026's
world news, entered in make.fun's `news-image-01` competition.

## The image

`entry.png` (1024×1024, PNG) is a flat editorial illustration drawn with
Pillow (`draw_news_image_v4.py` in the build session): a masthead, a wide
lead story, four illustrated panels, and a footer strip. Every story was
checked against reports first published on 13 November 2026; claims are
shown as claims, never as confirmed fact.

| Slot | Story |
| --- | --- |
| Lead — Middle East | Iran claims a strike on a US radar site in Bahrain and a tanker mine blast in Hormuz; neither independently confirmed |
| Ukraine | Kyiv fires ~1,200 drones at Russia, one of the war's biggest aerial attacks; peace talks advance |
| Business | US Senate summons ex-Nvidia CEO Huang and Lutnick to testify; shares fell 16% intraday |
| Technology | Microsoft 365 outage worldwide, into a second day, in 74 countries |
| Cybercrime | FBI: North Korean hackers' $400m crypto theft; US moves to seize $1.2bn of Binance loot |
| Sport (footer) | Harry Kane breaks England's caps record (126th cap, 92nd goal, 2–1 over Croatia) |

Footer, "Also today": record 483,200 US deportations in 2026; China ran
unannounced Pacific drills; Pope Leo meets abuse survivors in Peru.

## How it runs

`main.ts` (Node 22, standard library only) copies the shipped `entry.png`
to `/output/entry.png` — deterministic, no network. Run it locally with:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Run it twice and the two outputs are byte-identical.
