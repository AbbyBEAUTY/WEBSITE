# Affiliate link operations

Public affiliate destinations live in `data/affiliate-links.js`; credentials never do. Each active entry needs a stable key, retailer, approved URL, and `active` status. Pending entries stay blank and non-clickable.

To activate a CTA, paste the approved destination once, change `pending` to `active`, preserve the visible disclosure, and preview-test the destination, attribution, geography, mobile behavior, and `rel="sponsored nofollow noopener"`. Add `data-affiliate-key="matching-key"` to each matching CTA. Never guess a URL, price, or availability claim.
