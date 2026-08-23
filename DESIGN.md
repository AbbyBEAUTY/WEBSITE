---
name: Abi Beauty
source: styles.css
status: normative
colors:
  ink: "#351426"
  berry: "#8f214e"
  hot: "#e93672"
  rose: "#f49ab4"
  blush: "#fff0f4"
  cream: "#fffaf8"
  gold: "#d9a62e"
  muted: "#7d6470"
  line: "#efd6de"
  white: "#ffffff"
typography:
  body: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
  display: 'Georgia, "Times New Roman", serif'
  script: '"Brush Script MT", "Segoe Script", cursive'
layout:
  containerMaxWidth: 1180px
  navMinHeight: 74px
radii:
  pill: 999px
  card: 22px
  media: 32px
  stage: 42px
breakpoints:
  tabletMax: 900px
  mobileMax: 560px
---

# Abi Beauty design system

`styles.css` is the current implementation; these tokens are the normative design authority. Preserve the warm plum, hot-pink, blush, cream, and restrained-gold palette; system sans-serif body copy; Georgia editorial headings; and system script logo. The site intentionally has no remote font dependency.

Primary buttons are hot-pink pill controls with white text. Cards use white surfaces, warm borders, rounded corners, and soft plum-tinted shadows. Dark sections use plum with white text. Disabled and pending controls must remain visibly distinct and accessible.

Preserve the 1180px container, existing 900px and 560px breakpoints, and the current mobile fixes. Editorial images use `object-fit: cover`; layered stage assets must retain their transparent composition and valid source files.
