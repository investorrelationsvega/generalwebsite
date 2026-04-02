# Vega Companies Website -- Standard Operating Procedures

**Document Version:** 1.0
**Last Updated:** April 2, 2026
**Domain:** vegarei.com
**Repository:** generalwebsite


---

## 1. Architecture Overview

The Vega Companies website is a single-page static site. There is no build step, no framework, no CMS. Everything lives in one file.

```
/index.html          --> Entire website (HTML + CSS + JS, all inline)
/favicon.svg         --> Vector favicon
/favicon-16.png      --> 16x16 favicon
/favicon-32.png      --> 32x32 favicon
/netlify.toml        --> Hosting configuration and security headers
/README.md           --> Brief project notes
/WEBSITE-SOP.md      --> This document
```

There are no external dependencies beyond two Google Fonts loaded via CDN. No npm, no package.json, no node_modules.


---

## 2. Hosting and Deployment

| Item | Detail |
|------|--------|
| **Host** | Netlify |
| **Deploy method** | Auto-deploy from `main` branch |
| **Build command** | None (static site, no build step) |
| **Publish directory** | `.` (root) |
| **Forms** | Netlify Forms (contact form submissions forwarded to j@vegarei.com) |
| **SSL** | Managed by Netlify (auto-renew) |

### How to deploy changes
1. Make edits to `index.html`
2. Commit and push to the `main` branch
3. Netlify auto-deploys within ~30 seconds

### Security headers (netlify.toml)
The following headers are applied to all routes:
- `X-Frame-Options: DENY` (prevents iframe embedding)
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `X-XSS-Protection: 1; mode=block`


---

## 3. Design System

### 3.1 Color Palette

| Name | Variable | Hex | Usage |
|------|----------|-----|-------|
| Black | `--black` | `#000` | Primary background (hero, stats, leadership, footer) |
| White | `--white` | `#fff` | Primary text on dark backgrounds |
| Off-White | `--off-white` | `#f4f1eb` | Background for light sections (Companies, Contact) |
| Near-Black | n/a | `#1a1a1a` | Text color on light backgrounds |
| Grey | `--grey` | `#636058` | Body text on light backgrounds |
| Grey Label | `--grey-label` | `#6e6c66` | Vertical section labels (light mode) |
| Grey Label Dark | `--grey-label-dark` | `#B0ACA3` | Vertical section labels (dark mode), stat labels |
| Grey on Dark | `--grey-on-dark` | `#9E9A90` | Muted text on dark backgrounds (footer, pillars) |
| Grey Rule | `--grey-rule` | `#E0DDD6` | Borders/dividers on light backgrounds |
| Grey Dark Rule | `--grey-dark-rule` | `#222` | Borders/dividers on dark backgrounds |
| Green | `--green` | `#6A8F78` | Accent on dark backgrounds (star glow, labels) |
| Green on White | `--green-on-white` | `#4A7259` | Accent on light backgrounds (links, buttons, accent lines) |

### 3.2 Typography

Two font families loaded from Google Fonts:

| Font | Variable | Weights Loaded | Usage |
|------|----------|----------------|-------|
| **Inter** | `--font-sans` | 300, 400, 500, 600, 700 | Headlines, body copy, all general text |
| **Space Mono** | `--font-mono` | 400, 700 (+ italic 400) | Labels, navigation, tags, buttons, section identifiers |

**Fallback stacks:**
- Sans: `-apple-system, 'Helvetica Neue', Helvetica, Arial, sans-serif`
- Mono: `monospace`

### 3.3 Type Specifications by Element

| Element | Font | Size | Weight | Letter-Spacing | Other |
|---------|------|------|--------|----------------|-------|
| Hero h1 | Inter | `clamp(48px, 7vw, 108px)` | 300 (Light) | `-0.04em` | line-height: 1 |
| Section h2 | Inter | 32px | 700 (Bold) | `-0.02em` | line-height: 1.3 |
| Body copy | Inter | 15px | 400 (Regular) | default | line-height: 1.9 |
| Hero subtitle | Inter | 16px | 400 | default | line-height: 1.75, color: `--grey-label-dark` |
| Nav links | Space Mono | 11px | 500 | `0.14em` | uppercase |
| Section labels (vertical) | Space Mono | 11px | 500 | `0.14em` | uppercase, vertical writing mode |
| Stat numbers | Inter | 48px | 700 | `-0.02em` | -- |
| Stat labels | Space Mono | 12px | 500 | `0.12em` | uppercase |
| Hero tag (Est. 2012) | Space Mono | 13px | 700 | `0.18em` | uppercase, color: `--green` |
| Hero pillars | Space Mono | 12px | 500 | `0.3em` | uppercase, color: `--grey-on-dark` |
| Company card h3 | Space Mono | 13px | 700 | `0.02em` | -- |
| Company card body | Inter | 14px | 400 | default | line-height: 1.75 |
| Form labels | Space Mono | 12px | 500 | `0.12em` | uppercase |
| Form inputs | Inter | 15px | 400 | default | 16px on mobile (prevents iOS zoom) |
| Submit button | Space Mono | 11px | 500 | `0.14em` | uppercase, bordered |
| Footer links | Space Mono | 11px | 500 | `0.14em` | uppercase |
| Footer disclaimer | Inter | 12px | 400 | default | line-height: 1.8, color: #999 |

### 3.4 Responsive Breakpoints

| Breakpoint | Target |
|------------|--------|
| 1024px | Tablet landscape (vertical labels hidden, stats go 2-column) |
| 768px | Tablet portrait (hamburger nav, single-column company cards) |
| 480px | Mobile (tighter padding, smaller type, constellation map scrolls horizontally) |


---

## 4. Page Sections

The site flows top to bottom in this order:

### 4.1 Navigation (fixed header)
- Fixed position, blurred background
- Switches between dark and light mode based on scroll position (light when over Companies or Contact sections)
- Links: Our Companies, Performance and Leadership, Contact, Investor Portal (external link to vega.invportal.com)
- Hamburger menu on screens 768px and below

### 4.2 Hero
- Full viewport height, black background
- Large translucent V watermark (right side)
- Animated entrance: line grows, headline reveals upward, subtitle fades in
- Headline: "Conviction Over Cycles"
- Subtitle with "Est. 2012" tag
- Three pillars bar: Performance | Partnership | Prosperity

### 4.3 Our Companies
- Off-white background
- Heading: "One Standard. Diverse Paths."
- Two paragraphs of origin/mission copy
- SVG constellation map showing 8 business units connected to central Vega star
- 2-column grid of company cards (each shows "Site Coming Soon" overlay on click)
- Business units: Assisted Living Management, Builders, Capital Markets, Development, Private Equity, Property Management, Real Estate Brokerage, Valuations

### 4.4 Stats Band
- Black background with subtle light sweep SVG overlay
- Header: "A Disciplined Approach. Consistent Results."
- Four stats in a row: 10+ Years, 0 Losses, 209% Avg Return, ~$500M AUM
- Numbers animate (count up) when scrolled into view

### 4.5 Leadership
- Black background
- Placeholder "Coming Soon" state

### 4.6 Contact
- Off-white background
- Heading: "Every Partnership Starts with a Conversation."
- Form fields: First Name, Last Name, Email, Phone, Department (dropdown), Message
- Submitted via Netlify Forms
- Honeypot field for spam prevention

### 4.7 Footer
- Black background
- V icon + LinkedIn link
- Navigation links (same as header)
- Legal disclaimer about past performance
- Copyright: 2026 Vega Companies


---

## 5. Animations and Interactions

All animations are CSS-based with JS triggers. No animation libraries.

| Animation | Trigger | Behavior |
|-----------|---------|----------|
| Hero V watermark | Page load | Fades in and scales up (2s ease) |
| Hero divider line | Page load | Grows from left to right (1.2s, 0.8s delay) |
| Hero headline | Page load | Each line slides up from below (0.8s staggered) |
| Hero subtitle + pillars | Page load | Fade up (0.8s, 0.5s delay) |
| Scroll reveal (`.fade-up`) | Scroll into view (15% threshold) | Fade in + translate up 24px (0.7s) |
| Stat counters | Scroll into view (50% threshold) | Count from 0 to target value (1.2s, ease-out cubic) |
| Company card click | Click | Shows "Site Coming Soon" overlay for 2 seconds |
| Nav background | Scroll | Switches to light theme when over off-white sections |

All scroll-based animations use `IntersectionObserver` and fire once (elements are unobserved after triggering).


---

## 6. External Services and Integrations

| Service | Purpose | Access |
|---------|---------|--------|
| **Netlify** | Hosting, deployment, form handling, SSL | Netlify dashboard (owner should have credentials) |
| **Google Fonts** | Inter + Space Mono delivery | No account needed, loaded via CDN |
| **Investor Portal** | External link to `vega.invportal.com/login` | Separate system, not part of this codebase |
| **LinkedIn** | Footer link to company page | `linkedin.com/company/vega-capital-partners-llc/` |


---

## 7. How to Make Common Edits

### 7.1 Change headline text
Find the `<h1>` inside the hero section (~line 324). The two `<span class="reveal-line"><span>` elements correspond to the two lines of the headline.

### 7.2 Update stats
Find the `.stat-number` elements (~lines 385-388). Each has:
- `data-target`: the number to count up to
- `data-suffix`: text after the number (e.g., "%", "M", "+")
- `data-prefix`: text before the number (e.g., "~$")

### 7.3 Update company descriptions
Find the `.details` div (~lines 360-369). Each `.detail-item` contains an `<h3>` (company name) and `<p>` (description).

### 7.4 Change contact form recipient
This is configured in Netlify, not in the code. Log in to the Netlify dashboard, go to Forms settings, and update the notification email.

### 7.5 Add a new company to the constellation map
1. Add a new `<line>` from the center point (550, 167) to your new node coordinates
2. Add a `<circle>` at the node position
3. Add a `<text>` element with the company name
4. Add a new `.detail-item` in the grid below
5. Add a new `<option>` in the contact form department dropdown

### 7.6 Update the copyright year
Find the footer (~line 437) and update the year in the `&copy;` line.

### 7.7 Change colors
All colors are defined as CSS custom properties in the `:root` selector at the top of the `<style>` block (~line 15). Change the hex values there and they propagate everywhere.

### 7.8 Change fonts
The Google Fonts import is in the `<head>` (~line 13). The font-family assignments are in the `:root` variables `--font-sans` and `--font-mono` (~line 15).


---

## 8. Key Copy (Current as of April 2, 2026)

| Location | Text |
|----------|------|
| Page title | Vega Companies \| Conviction Over Cycles |
| Meta description | Vega is a family of companies built over a decade on conviction, discipline, and a belief that the right partners can deliver extraordinary outcomes. |
| Hero headline | Conviction / Over Cycles |
| Hero subtitle | Built over a decade on conviction, discipline, and a belief that the right partners, aligned around the right principles, can deliver extraordinary outcomes. |
| Hero pillars | Performance \| Partnership \| Prosperity |
| Companies heading | One Standard. Diverse Paths. |
| Companies body (para 1) | Since 2012, Vega has grown into a constellation of companies, each grounded in the same principles: execute with discipline, partner with conviction, and deliver consistent results. Across every company and every venture, we hold ourselves to a single standard: build something that lasts and create lasting value for the partners and communities we serve. |
| Companies body (para 2) | Our name comes from the Vega star, destined to once again become Earth's pole star as part of a predictable 26,000-year celestial cycle. The metaphor is simple: hold course, stay constant, perform. It's not just a name. It's how we think about every decision we make. |
| Stats heading | A Disciplined Approach. Consistent Results. |
| Contact heading | Every Partnership Starts with a Conversation. |
| Footer disclaimer | Past performance does not predict future returns. All investments involve risk, including possible loss of capital. Nothing on this site constitutes an offer to sell or a solicitation to buy any security. |


---

## 9. Handover Checklist

For a new owner taking over this website:

- [ ] **Netlify account access** -- transfer or invite to the Netlify team that owns this site
- [ ] **Domain DNS** -- vegarei.com DNS records point to Netlify; transfer registrar access
- [ ] **Git repository** -- transfer ownership of the generalwebsite repository
- [ ] **Form notifications** -- update the email address in Netlify Forms settings (currently j@vegarei.com)
- [ ] **Investor Portal** -- separate system at vega.invportal.com; coordinate access transfer independently
- [ ] **LinkedIn** -- company page admin access at linkedin.com/company/vega-capital-partners-llc/
- [ ] **Google Search Console** -- transfer verification if configured
- [ ] **Analytics** -- add tracking if desired (none currently installed)
