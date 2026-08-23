# Abi Beauty handoff

Updated: 2026-08-23

## Current state

- Baseline live commit preserved: `b08b92dbddc8571c4000723b3f0af5b9fbb34427`.
- Technical SEO foundation is being prepared on `seo/technical-foundation-2026-08-23`; it is not yet committed, pushed, previewed, or deployed.
- Production origin: `https://abi-beauty-honduras.vercel.app`; clean canonical routes are enabled by existing Vercel configuration.
- The restored `assets/images/collection/set-33/30-sparkles.webp` is the authoritative stage asset and must not be replaced with a zero-byte archive copy.
- Amazon and social URLs remain pending and disabled until supplied and verified.
- A browser-only educational qualification prototype is preserved at `C:\Abby Beauty\_future\beauty-import-readiness`. It is intentionally excluded from this Phase 1 branch, navigation, and sitemap until the Honduras SERP map validates its place.

## Release gate

Review the diff and verify all five production pages, clean routes, canonicals, social images, JSON-LD, navigation, desktop/mobile behavior, images, missing resources, and console output on preview. Production must point to the exact reviewed commit. Never expose Supabase service-role credentials or use RSG infrastructure.
