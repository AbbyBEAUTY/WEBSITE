# AGENTS.md — Abi Beauty

## Project identity and canonical systems

This workspace is exclusively for Abi Beauty. Keep it separate from Jump Contact and RS Gonzales.

- GitHub: `AbbyBEAUTY/WEBSITE`; default branch: `main`
- Verified baseline commit: `b08b92dbddc8571c4000723b3f0af5b9fbb34427`
- Vercel team/project: `abicampbelldeburke-2934s-projects` / `abi-beauty-honduras`
- Production: `https://abi-beauty-honduras.vercel.app`
- Supabase: `abi-beauty` (`xxtphnxrnaonmhchkizr`); private bucket: `abi-beauty-backups`
- Stack: portable static HTML, CSS, and JavaScript

Never use RSG infrastructure. Verify Abi-owned GitHub and Vercel identities before pushing or deploying. Do not add a framework, database dependency, or Vercel runtime without approval.

## Secrets and release protocol

Never commit credentials, service-role keys, private backup links, or affiliate credentials. Local secrets belong only in ignored `.env/` files and must never enter browser JavaScript. Read `DESIGN.md`, this file, and `PICKUP.md` before changing the site. Use a branch for material work, keep the existing checklist current, test every indexable page and create a verified preview before production. GitHub is canonical.

## SEO and affiliate rules

Every indexable page needs a unique title and description, clean canonical URL, one H1, useful internal links, accurate social metadata, and truthful structured data. Never invent ratings, prices, authorship, dates, testing results, or URLs. Content should provide firsthand, Honduras-relevant guidance and disclose affiliate relationships.

Treat `SEO-ARCHITECTURE.md` as the authority for scalable page families, the Abi content layer, educational tools, and the future content graph. `SEO-RESOURCE-PAGES.md` defines the first evergreen shipping-to-Honduras cluster beneath that architecture.

Use `ENDLESS-CUSTOMERS-GUIDE.md` as the trust, self-service, assignment, and page-quality framework. Its sequencing guardrail takes precedence over opportunistic page production.

Affiliate destinations are public content data, but network credentials are secrets. Use stable keys, preview-test destination/attribution/geography/mobile behavior, and keep pending links honestly disabled until Abi supplies and approves them.
