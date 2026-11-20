---
name: Becky Rose
description: The baby book a new mom never got around to filling in, kept this time about her.
colors:
  cloth: "#12342a"
  cloth-deep: "#0b1f19"
  cloth-lift: "#1a4537"
  foil: "#f2629f"
  foil-deep: "#96134f"
  page: "#f6cddb"
  page-shade: "#eab4c8"
  yarn: "#eda73c"
  yarn-ink: "#7f4c00"
  ink: "#10302a"
  ink-soft: "#2f4f46"
  print-white: "#ffffff"
typography:
  display:
    fontFamily: "Gloock, Times New Roman, serif"
    fontSize: "clamp(3.4rem, 0.6rem + 8.2vw, 8.75rem)"
    fontWeight: 400
    lineHeight: 0.86
    letterSpacing: "-0.025em"
  display-script:
    fontFamily: "Nothing You Could Do, Segoe Script, cursive"
    fontSize: "clamp(2.3rem, 1.6rem + 2.6vw, 4.4rem)"
    fontWeight: 400
    lineHeight: 0.9
  headline:
    fontFamily: "Gloock, Times New Roman, serif"
    fontSize: "clamp(2.2rem, 1.6rem + 2.4vw, 3.6rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.015em"
  quote:
    fontFamily: "Gloock, Times New Roman, serif"
    fontSize: "clamp(1.8rem, 1.2rem + 2.2vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Gloock, Times New Roman, serif"
    fontSize: "clamp(1.8rem, 1.3rem + 1.8vw, 2.8rem)"
    fontWeight: 400
    lineHeight: 1.05
  body:
    fontFamily: "Literata, Georgia, serif"
    fontSize: "clamp(1.02rem, 0.96rem + 0.25vw, 1.14rem)"
    fontWeight: 400
    lineHeight: 1.65
  lede:
    fontFamily: "Literata, Georgia, serif"
    fontSize: "1.22em"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Literata, Georgia, serif"
    fontSize: "0.86rem"
    fontWeight: 600
    letterSpacing: "0.16em"
    fontFeature: "all-small-caps"
  hand:
    fontFamily: "Nothing You Could Do, Segoe Script, cursive"
    fontSize: "1.45em"
    fontWeight: 400
    lineHeight: 1.1
rounded:
  stitch: "2px"
  stamp: "3px"
  tab: "8px 8px 0 0"
  page: "10px"
spacing:
  gutter: "clamp(16px, 4vw, 56px)"
  page-pad: "clamp(24px, 4.2vw, 64px)"
  spread-gap: "clamp(40px, 6vw, 88px)"
  actions-gap: "14px 22px"
  field-gap: "12px"
components:
  button-primary:
    backgroundColor: "{colors.cloth}"
    textColor: "{colors.page}"
    rounded: "{rounded.stamp}"
    padding: "15px 24px 15px 26px"
  button-primary-hover:
    backgroundColor: "{colors.cloth-lift}"
    textColor: "{colors.page}"
  button-foil:
    backgroundColor: "{colors.foil-deep}"
    textColor: "{colors.print-white}"
    rounded: "{rounded.stamp}"
    padding: "15px 24px 15px 26px"
  retailer-chip:
    textColor: "{colors.ink}"
    rounded: "{rounded.stamp}"
    padding: "9px 16px"
  retailer-chip-hover:
    backgroundColor: "{colors.cloth}"
    textColor: "{colors.page}"
  nav-tab:
    backgroundColor: "{colors.page-shade}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.tab}"
    padding: "10px 16px 12px"
  nav-tab-active:
    backgroundColor: "{colors.page}"
    textColor: "{colors.foil-deep}"
  field-input:
    textColor: "{colors.yarn-ink}"
    typography: "{typography.hand}"
    padding: "6px 2px 4px"
  page:
    backgroundColor: "{colors.page}"
    textColor: "{colors.ink}"
    rounded: "{rounded.page}"
    padding: "{spacing.page-pad}"
---

# Design System: Becky Rose

## Overview

**Creative North Star: "The Baby Book, Kept for Mom"**

Every page is an open keepsake album lying on deep bottle-green bookcloth. Blush card pages sit in two-page spreads joined by a stitched marigold spine; printed fill-in forms (small-caps labels over dotted lines) are completed in a looping marigold-brown hand; titles are stamped in pink foil; the cover and the author photo are tipped in with photo corners at a slight tilt. The album is the interface: navigation is a row of index tabs hanging from the album's top edge, sections are spreads, and the spread you are reading lights its spine.

The world runs on four inks: bookcloth green, foil pink, page blush, marigold yarn. Green owns the ground and the deep night panels, blush carries reading, pink foil carries display type and the one primary action, and marigold is reserved for stitching, handwriting, and focus. White appears only as the paper border of a tipped-in print and as text on the foil stamp. Density is generous and bookish: big page padding, wide spread gaps, prose capped near 64ch. Depth is physical (pages lift off the cloth, prints sit on the page) rather than interface elevation.

Motion belongs to the album. Handwritten fill-ins write themselves in left to right as a page enters; tipped-in prints settle down onto the page; the current spread's stitch brightens to full marigold; the night panel's red nursery glow breathes slowly. All of it stops under reduced motion.

**Key Characteristics:**
- Bottle-green woven bookcloth ground on every page; blush pages float on it in two-page spreads.
- A dashed marigold stitch runs down the spread's gutter (across it on narrow screens) and lights for the current spread.
- Printed form fields: small-caps label, dotted fill line, handwritten answer.
- Foil-pink display serif at wall scale; a handwritten script line paired above it.
- Photos are tipped in: white print border, four green photo corners, a 2 to 3 degree tilt.
- One night panel per story: cloth-deep with a pulsing red nursery glow and blush quote type.

## Colors

Four inks on paper and cloth: a dark woven green, a hot foil pink with its deep stamping shade, a blush card stock, and marigold yarn with its darkened writing ink.

### Primary
- **Foil Stamp Pink, deep** (foil-deep): Display and headline type on pages, the "Buy the book" stamp button, active nav tab text, list markers, form focus lines. The press-stamped title color.
- **Foil Stamp Pink, bright** (foil): The site name stamp in the header and footer, the quote marks on reviews, emphasized words inside the night quote, link-hover underline, the scrollbar thumb, text selection. Bright foil lives on dark green or as accent; it is never body text on blush.

### Secondary
- **Marigold Yarn** (yarn): The stitched spine, the dashed stitching inside buttons, and the dashed focus ring. Never text on blush (about 1.6:1).
- **Yarn Ink** (yarn-ink): Every handwritten fill-in, handwritten link, script title line, the email address, and typed form input. Marigold darkened to clear 4.5:1 on blush.

### Neutral
- **Bookcloth Green** (cloth): The page ground under the woven grain, photo corners, the default stitched button, retailer chip hover.
- **Night Cloth** (cloth-deep): Night panels (the nursery spread), the skip-link text, the deepest end of the scrollbar track.
- **Lifted Cloth** (cloth-lift): The radial light in the cloth ground and the button hover state.
- **Blush Page** (page): Card stock for every page, active tabs, the mobile menu sheet, light text on green.
- **Page Shade** (page-shade): The gutter-side shading that curves each page toward the spine, inactive tabs, the active item in the mobile menu.
- **Album Ink** (ink): Body text on blush.
- **Faded Ink** (ink-soft): Printed labels, captions, the title subtitle, notes, retailer chip borders.
- **Print White** (print-white): The paper border of tipped-in snapshots and the text on the foil button. Not a page or panel color.

### Named Rules
**The Four Inks Rule.** Green, pink, blush, marigold, each with its declared shades. A new surface adds no fifth hue; white is print paper, not an ink.

**The Marigold Splits Rule.** Pure yarn stitches and outlines; yarn-ink writes. Handwriting in pure yarn on blush is illegible and is never shipped.

## Typography

**Display Font:** Gloock (with Times New Roman, serif)
**Body Font:** Literata (with Georgia, serif), optical sizes 7 to 72, weights 400/600/700 and italic 400
**Hand Font:** Nothing You Could Do (with Segoe Script, cursive)

**Character:** A high-contrast stamped serif for anything pressed into the album, a warm bookish text serif for printing and reading, and one loose ballpoint hand for everything a person wrote in.

### Hierarchy
- **Display** (400, clamp up to 8.75rem, 0.86): The book title's caps line on the Arrival spread only, in foil-deep, tightly tracked (-0.025em).
- **Display Script** (hand, clamp up to 4.4rem, 0.9): The handwritten line paired above the display caps, rotated -3deg, yarn-ink.
- **Headline** (400, clamp 2.2 to 3.6rem, 1.02): Page and spread titles in foil-deep, balanced wrap.
- **Quote** (400, clamp 1.8 to 3rem, 1.12): The night-panel quote in blush on cloth-deep, with key words in bright foil.
- **Title** (400, clamp 1.8 to 2.8rem, 1.05): Book titles on the shelf; legal section heads step down to 1.55rem.
- **Body** (400, fluid ~1.02 to 1.14rem, 1.65): All reading text, max 64ch. Reviews and ledes set in italic.
- **Lede** (italic 400, 1.22em, 1.5): The opening paragraph of a prose page.
- **Label** (600, 0.86rem, 0.16em, all small caps): Printed form labels sitting on a fill line or above an input, review mood tags, nav tabs.
- **Hand** (1.45em of context, 1.1): Fill-in answers, signatures (1.9rem on reviews), captions (1.2rem, ink-soft), handwritten links (1.35rem, wavy underline).

### Named Rules
**The Printed vs. Written Rule.** Literata prints, the hand writes. Labels are always printed; answers, signatures, captions and secondary links are always written. A label is a form field's printed half and always sits on its fill line or input, never floating above a heading.

**The One Stamp Rule.** Gloock is only for stamped things: titles, the site name, the night quote, review quote marks. It never sets body, labels, or buttons.

## Layout

The page is a centered album (max 1320px) with a fluid gutter (spacing.gutter) on bookcloth. Content is organized into spreads: a two-column grid of equal pages joined at the spine, separated by a fluid spread gap (spacing.spread-gap). Pages pad generously (spacing.page-pad). Single-page content (Books, Privacy, the shelf on Reviews) uses a full-width page with the spine hidden. A spread may carry a full-width printed header across both pages before splitting (the reviews spread).

Inside pages: prose capped near 64ch; form fields as a two-column label-and-line grid; action rows wrap with a 14px by 22px gap. Tipped-in images center in their page at 78 to 82 percent width with a 380 to 400px cap; on the shelf they take a 180 to 300px column beside the text.

Breakpoints: at 900px spreads stack to one column, the spine turns horizontal across the fold (or is hidden where the split is purely editorial), and outer corner radii move to the top and bottom of the stack; on the Arrival spread the title page comes first and the cover second. At 760px the tabs collapse into a Menu button that opens a blush sheet, and form fields stack label over line.

## Elevation & Depth

Depth is physical and ambient: paper on cloth, prints on paper. Spreads cast one soft drop shadow onto the cloth; tipped-in prints cast a tight contact shadow plus a longer soft one; buttons sit slightly raised and lift on hover. Pages carry tonal depth too: a gradient to page-shade toward the spine makes them curve into the binding, and a faint diagonal card tooth overlays every page. The cloth ground is two crossed hairline weaves over a radial light.

### Shadow Vocabulary
- **Spread on cloth** (`filter: drop-shadow(0 26px 30px rgba(0,0,0,.35))`): every spread.
- **Tipped-in print** (`box-shadow: 0 2px 2px rgba(0,0,0,.08), 0 20px 30px -16px rgba(0,0,0,.5)`): snapshots and the cover.
- **Stamp at rest / hover** (`0 10px 18px -10px rgba(11,31,25,.9)` / `0 16px 22px -12px rgba(11,31,25,.9)`): buttons.
- **Loose sheet** (`var(--shadow-page)`): the mobile menu sheet.

### Named Rules
**The Paper Physics Rule.** Every shadow is soft, dark, and falls downward from an object resting on something. No colored glows on UI, no hard offset shadows; the only light source in the album is the nursery glow on the night panel.

## Shapes

Corners describe a bound book: a page is rounded 10px on its outer edges and only 2px where it meets the spine; full pages are 10px all round. Stamps, chips and the skip link are nearly square (3px); the button's inner stitch is 2px. Nav tabs are index tabs, rounded 8px on top and square at the bottom where they meet the album. Stitching is drawn as dashes: the spine, the inside edge of buttons, retailer chip borders, the focus ring. Fill lines are dotted. Photo corners are clipped green triangles overlapping each corner of a print.

## Components

### Buttons
Stamped and stitched: a small bookcloth rectangle with a dashed marigold stitch inset 4px.
- **Shape:** Nearly square (rounded.stamp), inner stitch 1.5px dashed yarn at 75 percent.
- **Primary:** Cloth with blush text, Literata 700 at 0.98rem, 0.02em tracking, trailing 18px arrow.
- **Foil:** Foil-deep with white text; reserved for the single most important action (the primary "Buy the book" action).
- **Hover / Focus:** Lifts 2px with a longer shadow; primary moves to cloth-lift; the arrow slides 3px right. Focus is the global dashed yarn ring.
- **Handwritten link:** The secondary action beside a button is a hand-script link in yarn-ink with a wavy underline; on night panels it writes in blush.

### Chips
- **Retailer chip:** Dashed ink-soft border, Literata 600 at 0.92rem, rounded.stamp. Hover fills with cloth and blush text.

### Cards / Containers
- **Page:** The only container. Blush, outer corners 10px and spine corners 2px, page-shade gradient toward the spine, card tooth overlay, padded with spacing.page-pad.
- **Night panel:** A page variant in cloth-deep with blush text and a slow breathing radial nursery glow (foil to foil-deep, 7s alternate). One per story spread at most.
- **Tipped-in print:** White 10px border, four green photo corners, rotated by a per-image tilt (-3 to 2.5deg), print shadow, handwritten caption below.

### Inputs / Fields
- **Printed field (display):** Label at left, dotted 1.5px ink line filling the rest, handwritten answer resting on the line.
- **Form input:** Transparent, no box; a dotted ink baseline only. Typed text renders in the hand at 1.35rem in yarn-ink. Textareas draw ruled lines every 2.05rem instead of a border.
- **Focus:** The baseline turns solid foil-deep (textarea rules turn pink). Status messages write in the hand in foil-deep.

### Navigation
- **Index tabs:** Small-caps Literata tabs in page-shade hanging from the album's top edge, dropped 6px at rest and rising to flush on hover; the current page's tab is blush with foil-deep text. The site name is stamped in bright foil Gloock at left.
- **Mobile:** Below 760px a blush Menu button opens a blush sheet with full-width rows; the current row is page-shade. Escape closes it.
- **Footer:** Foil stamp, plain blush links on cloth that turn foil on hover.

### Stitched Spine (signature)
A 4px dashed yarn stitch (14px dash, 12px gap) down the gutter of every two-page spread at 35 percent opacity, rising to full when the spread is centered in the viewport (0.8s). It turns horizontal on stacked layouts where the fold is real and is hidden on single pages.

### Write-in Reveal (signature)
Handwritten fill-ins, signatures and captions reveal left to right with a clip-path wipe (1.4s, ease-out cubic-bezier(0.16, 1, 0.3, 1)) when their page enters, staggered by per-line delays of 200 to 900ms. Prints settle from 18px below into their tilt. Reduced motion shows everything at rest.

## Do's and Don'ts

### Do:
- **Do** set every new page as a blush page (or spread of two) on the bookcloth ground, outer corners 10px, spine corners 2px.
- **Do** pair every printed small-caps label with a dotted fill line or an input, and write the answer in the hand in yarn-ink.
- **Do** stamp titles in Gloock foil-deep on blush, or blush and bright foil on night cloth.
- **Do** tip in photographs with the white border, four green corners, and a tilt between -3 and 3 degrees.
- **Do** reserve the foil button for the one most important action per view; everything else is a cloth stamp or a handwritten link.
- **Do** use pure marigold only for stitching, dashed edges, and the focus ring.

### Don't:
- **Don't** add a fifth hue or a new tint; extend with the declared shades of the four inks.
- **Don't** write handwriting or body text in pure yarn or bright foil on blush.
- **Don't** float a small-caps label above a heading as an eyebrow; labels belong to fields.
- **Don't** set body, labels, or buttons in Gloock, or headlines in the hand beyond the paired script title line.
- **Don't** use hard offset shadows, colored UI glows, or flat untextured page fills; depth is paper on cloth.
- **Don't** box form inputs; they are baselines and ruled lines on the page.
