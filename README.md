# ZoneSeven redesign

A separate private design study of https://zone7.au/, built with React and Vinext.

See DESIGN-REVIEW.md for the assessment and rationale.

Commands: npm run dev, npm run build, npx tsc --noEmit.

The enquiry form copies a brief locally; it does not transmit enquiries. A receiving email or submission service is still required.

## Client dashboard demo

Visit /dashboard or use Client demo in the homepage navigation. The three workflows use fictional sample data and session-only React state. Reports export CSV; invoice drafts export a standalone HTML document; reviewed receipts export CSV. No invoices are sent, no payments are taken, and no live OCR or account connections are used. Refresh or Reset demo clears the session.

Validate calculation and export rules with: node --experimental-strip-types --test tests/dashboard-model.test.mjs

The business overview now includes period-based financial KPIs, a comparison chart, source context and a September receipt approval queue. The proposed integration model is described on-page: authorised source access, backend data mapping and refreshes, role-specific controls, and approved writes back where supported. No live backend connections are added by this update.

The ERP-style dashboard supports combined, service and product views. Financial views and downloadable reports use the same selected scope and reconcile across business types. September jobs/orders and stock are separate sample snapshots. Job completion, dispatch and draft purchasing actions appear in the same activity feed as reporting, invoicing and receipt approval. No external systems are updated.
