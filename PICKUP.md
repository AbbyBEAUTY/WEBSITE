# Abi Beauty handoff

Updated: 2026-08-23

## Current state

- Canonical repository: `AbbyBEAUTY/WEBSITE`, branch `main`.
- Consumer-positioning and Shipito milestone merged in PR #2 at `58b44655b9e98a2655d5283590c4fb4795f6accc` (content commit `55786e9`).
- Production: `https://abi-beauty-honduras.vercel.app`, Vercel project `abi-beauty-honduras`.
- Homepage leads with consumer beauty discovery, product suitability, Amazon purchasing, and Honduras delivery. Brand/UGC services are secondary in the footer.
- Shipito is the default documented route. It is an external service; fees, restrictions, carriers, insurance, customs, and transit claims require dated official verification.
- The current buyer guide remains at `/how-to-buy`. The future clean URL `/guias/comprar-amazon-honduras/` must launch with an atomic redirect/canonical/navigation/sitemap update.
- The next two planned shipping pages are `/envios/casillero-estados-unidos-honduras/` and `/herramientas/calculadora-envio-honduras/`.
- Amazon and social URLs remain pending and disabled until supplied and verified.
- The educational qualification prototype remains outside production at `C:\Abby Beauty\_future\beauty-import-readiness`.

## Next milestone

Build the first three Shipito cluster pages from the supplied research, beginning with the master Amazon-to-Honduras guide. Treat the calculator as an educational estimator that exposes unknown inputs; never imply guaranteed customs, carrier, price, or delivery outcomes. Run preview-first desktop/mobile and five-page regression QA before production.

## Infrastructure boundary

Use only Abby infrastructure. Never expose Supabase service-role credentials and never use or reference RS Gonzales infrastructure.
