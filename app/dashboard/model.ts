export type Line = { id: number; description: string; quantity: number; rate: number };
export const months = [
 { label: 'April', revenue: 1840000, expenses: 720000 },
 { label: 'May', revenue: 2120000, expenses: 810000 },
 { label: 'June', revenue: 1980000, expenses: 760000 },
 { label: 'July', revenue: 2360000, expenses: 880000 },
 { label: 'August', revenue: 2510000, expenses: 940000 },
 { label: 'September', revenue: 2740000, expenses: 1020000 },
];
export const samples = [
 { id: 'R-101', vendor: 'Paper & Co.', date: '2026-09-04', category: 'Office supplies', total: 12870, items: 'A4 paper · pens · printer ink', needsReview: false },
 { id: 'R-102', vendor: 'Cloudworks', date: '2026-09-08', category: 'Software', total: 8900, items: 'Monthly software subscription', needsReview: false },
 { id: 'R-103', vendor: 'Harbour Coffee', date: '2026-09-12', category: 'Meals & meetings', total: 4650, items: 'Team meeting · coffee & lunch', needsReview: true },
];
export function invoiceTotals(lines: Line[], taxRate: number) {
 if (!lines.length || !Number.isFinite(taxRate) || taxRate < 0 || taxRate > 100 || lines.some(l => !l.description.trim() || !Number.isFinite(l.quantity) || l.quantity <= 0 || l.quantity > 10000 || !Number.isFinite(l.rate) || l.rate < 0 || l.rate > 1000000)) throw new Error('Check your line items and tax rate.');
 const lineTotals = lines.map(l => Math.round(l.quantity * Math.round(l.rate * 100)));
 const subtotal = lineTotals.reduce((a,b) => a+b, 0);
 const tax = Math.round(subtotal * taxRate / 100);
 return { lineTotals, subtotal, tax, total: subtotal + tax };
}
export function reportTotals(period: string) {
 const records = period === 'q2' ? months.slice(0,3) : period === 'q3' ? months.slice(3) : months;
 const revenue = records.reduce((a,b) => a+b.revenue,0), expenses = records.reduce((a,b) => a+b.expenses,0);
 return { records, revenue, expenses, profit: revenue-expenses };
}
export function money(cents: number) { return new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' }).format(cents/100); }
export function csv(rows: (string | number)[][]) { return rows.map(row=>row.map(value=>{const s=String(value);return '"'+(/^[=+@\-\t\r]/.test(s)?"'":"")+s.replaceAll('"','""')+'"';}).join(',')).join('\r\n'); }
export function escapeHtml(s: string) { return s.replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!)); }
