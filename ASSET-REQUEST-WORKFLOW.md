# Abi Beauty asset request workflow

New assets are commissioned only after a page has a validated search intent and a defined visual job. Burke or Codex prepares the prompt; Abi creates/approves the asset; the website branch receives only the optimized final.

## Request card

Every request must specify:

- Page and planned URL
- Search intent
- Visual job: what the image must prove, demonstrate, or clarify
- Asset type: firsthand photo/video, generated editorial, diagram, product-supplied, or licensed
- Required aspect ratios and minimum pixel dimensions
- Subject, setting, action, composition, lighting, palette, and negative space
- Mobile crop requirements
- Elements/text/logos to avoid
- Realism and cultural-context constraints
- Intended alt-text information
- Social-preview variant, when needed
- Disclosure or provenance note

## Prompt format

```text
PURPOSE
[Page, search intent, and exact visual job]

SUBJECT AND ACTION
[Who/what is shown and what is happening]

SETTING AND CULTURAL CONTEXT
[Accurate Honduras/local or product context; no invented landmarks or stereotypes]

COMPOSITION
[Camera angle, framing, focal hierarchy, negative space, desktop crop, mobile crop]

VISUAL SYSTEM
[Abi Beauty palette, warm editorial character, lighting, texture, realism]

OUTPUTS
[Aspect ratios, dimensions, format, variants]

AVOID
[Text baked into image, logos unless approved, distorted packaging/anatomy, unsupported product claims, generic stock-photo affect]
```

## Acceptance gate

Before an asset enters production:

1. Confirm page ownership and intended placement.
2. Confirm source/provenance and whether it may imply firsthand experience.
3. Inspect full-resolution anatomy, packaging, text, artifacts, and crop safety.
4. Produce modern compressed output with intrinsic dimensions.
5. Verify desktop and mobile rendering.
6. Write descriptive alt text or mark decorative images with empty alt text.
7. Record the asset in `data/asset-requests.csv` and `ASSET-CONTENT-MAP.md`.

Phase 1 requires no new assets. New requests begin after the Honduras SERP map selects the first expansion cluster.
