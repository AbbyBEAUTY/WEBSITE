# Abi Beauty SEO architecture

## Strategic position

Abi Beauty is building a Honduras-specific beauty authority, not a generic affiliate catalog or chronological blog. Every scalable page must add a genuine Abi layer: original photos or video, firsthand context when available, who the product is and is not for, limitations, alternatives, Honduras buying information, and useful answers.

Thin pages made from a retailer image, copied description, and affiliate button are not acceptable.

## Planned information architecture

```text
/
├── marcas/
│   └── [marca]/
├── productos/
│   └── [producto]/
├── maquillaje/
│   └── [categoria]/
├── skincare/
├── guias/
│   └── [guia]/
├── envios/
│   └── [recurso-shipito-honduras]/
├── opiniones/
└── herramientas/
    └── [herramienta-educativa]/
```

The current flat static routes are the MVP. New page families should follow the hierarchy above without breaking existing production URLs. Any migration needs explicit redirects, updated canonicals, sitemap entries, and internal-link verification in the same release.

## Honduras-first targeting

Prioritize brand, product, category, online-buying, import, comparison, and suitability searches where Honduras-specific usefulness is the differentiator. Final priorities must come from a current Honduras SERP and competitor map, not intuition alone.

## Default documented shipping route

Shipito is the default route Abi Beauty documents for Amazon purchases sent from the United States to Honduras. The core learning path is Amazon product decision → Shipito US address → customs declaration → available carrier selection → shipping payment → possible Honduran duties or taxes → delivery.

This is a documentation choice, not a guarantee, endorsement of every shipment, or claim that Shipito is always the cheapest option. Every product recommendation must send readers to Shipito's current restricted-items tool before purchase when ingredients, liquids, alcohol, aerosols, batteries, or carrier rules could matter. Fees, warehouse routing, insurance, carrier availability, customs obligations, and transit estimates require dated official-source verification.

## Content graph

Every product should connect to its brand, category, relevant comparison, buying guide, original UGC, Honduras logistics information, and verified affiliate destination when available.

Planned data model:

`Brands → Products → Categories → Questions → Reviews → UGC → Guides → Affiliate links`

Supabase may support this graph later, but the public site must remain portable and must never expose privileged credentials.

## Educational-tool standard

Tools should teach and qualify rather than manufacture certainty. A useful tool:

- answers a durable Honduras-specific question;
- explains what information is missing;
- assigns a concrete next-step task list;
- distinguishes general education from provider, carrier, customs, or legal decisions;
- stores no user data unless a separate, explicitly approved privacy design exists;
- links naturally to authoritative guides, products, categories, and provider resources.

## Release sequence

1. Complete technical SEO and measurement foundation.
2. Produce a current keyword/competitor SERP map for Honduras.
3. Select the first commercial cluster using intent, attainable difficulty, affiliate value, and UGC opportunity.
4. Build a small set of deep pages with original Abi evidence.
5. Validate indexing, engagement, affiliate behavior, and update burden.
6. Scale the connected graph only after the page template proves useful.

## Non-negotiable gates

- One canonical owner for each search intent.
- Crawlable navigation and contextual internal links.
- Accurate initial-HTML structured data matching visible content.
- No invented prices, ratings, stock, shipping promises, provider rules, or firsthand experience.
- Clear affiliate/referral/sponsorship disclosures.
- Original images and video mapped to pages where they materially support the answer.
- Current-source verification and visible update dates for changeable shipping or customs claims.
- Shipito as the named default documented route, with alternatives discussed only where a consumer decision genuinely requires comparison.
