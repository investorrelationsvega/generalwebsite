# Vega ALM — Image Assets

Drop this whole folder in at `assets/` (keep the subfolder names — the brief's paths
assume them). Every image is final and already processed; do not re-crop or re-tone.

## facilities/ — Vega-owned buildings only

| File | Size | Used on |
| --- | --- | --- |
| `vega-owned-exterior-wide.jpg` | 2100 × 900 | Homepage full-bleed band (`#facility`) |
| `vega-owned-exterior.jpg` | 1440 × 960 | Owners page, engagement-types section |
| `interior-common.jpg` | 1440 × 960 | Homepage interior pair, left |
| `interior-dining.jpg` | 1440 × 960 | Homepage interior pair, right |
| `interior-suite.jpg` | 1440 × 960 | Careers page, consistent-assignment section |

Apply `filter: var(--img-filter)` to all five. **No captions, labels or overlays** — that
was tried and removed; the photos are placed as full-bleed bands and pairs and left alone.

**Every one is a building Vega owns.** Communities managed for other owners are never
photographed, named or located. That constraint holds for any photography added later.

## team/ — leadership portraits

| File | Person | Role |
| --- | --- | --- |
| `sayer-leslie.png` | Sayer Leslie | Owner / Founder · CEO |
| `wes-norton.png` | Wes Norton | Chief Operating Officer |
| `mary-evans.png` | Mary Evans | Care Director |

720 × 900 (4:5), black and white, all three from the same studio session and normalised
to match each other: hairline at y≈133, head width ≈269px, ground ≈209 (left) → 220
(right), no clipping. **Use as shipped** — re-cropping from the originals breaks the match.

Apply `filter: var(--img-filter)`, `object-fit: cover`, `aspect-ratio: 4/5`.

## Logos

| File | Use |
| --- | --- |
| `vega-alm-lockup.png` | Primary lockup, dark ink — light backgrounds |
| `vega-alm-lockup-white.png` | Reversed — charcoal and photographic backgrounds |
| `vega-alm-lockup-black.png` | Single-colour black — print, faxable documents |
| `vega-mark.svg` | Vega comet mark alone (watermarks, favicon) |
| `vega-wordmark.svg` | Vega wordmark alone |

The `Logo` component takes `color` (not `tone`) — pass `color="var(--text-on-dark)"` on
dark grounds. The lockup is never redrawn, recoloured outside these three files, or
set in live type.

## qr-vegarei-alm.png

900 × 900, encodes `https://vegarei.com/alm`. Business cards only, not the website.
**Note the domain conflict:** the site uses `vegaalm.com` while this QR and Sayer's card
use `vegarei.com`. Resolve before printing more cards or shipping the site.
