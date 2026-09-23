import test from 'node:test';
import assert from 'node:assert/strict';
import {invoiceTotals,reportTotals,csv,escapeHtml} from '../app/dashboard/model.ts';
test('invoice rounds to cents before summing and calculates sample tax',()=>{
 const t=invoiceTotals([{id:1,description:'Design',quantity:1,rate:2400},{id:2,description:'Support',quantity:3,rate:180}],10);
 assert.equal(t.subtotal,294000);assert.equal(t.tax,29400);assert.equal(t.total,323400);
 assert.equal(invoiceTotals([{id:1,description:'Fractional work',quantity:1.5,rate:19.99}],0).total,2999);
});
test('invalid invoice values cannot produce an export',()=>{
 for(const quantity of [0,-1,NaN,Infinity])assert.throws(()=>invoiceTotals([{id:1,description:'Work',quantity,rate:10}],10));
 assert.throws(()=>invoiceTotals([],10));assert.throws(()=>invoiceTotals([{id:1,description:'',quantity:1,rate:10}],10));
});
test('report quarters reconcile to the complete sample period',()=>{
 const a=reportTotals('q2'),b=reportTotals('q3'),all=reportTotals('all');
 assert.equal(b.revenue,7610000);assert.equal(b.expenses,2840000);assert.equal(b.profit,4770000);
 assert.equal(a.revenue+b.revenue,all.revenue);assert.equal(a.expenses+b.expenses,all.expenses);
 assert.equal(all.profit,all.records.reduce((sum,m)=>sum+m.revenue-m.expenses,0));
});
test('download formats escape client-entered content',()=>{
 assert.equal(escapeHtml('<script>"A&B"</script>'),'&lt;script&gt;&quot;A&amp;B&quot;&lt;/script&gt;');
 assert.equal(csv([['=1+1','A,"B"',123]]),'"\'=1+1","A,""B""",\"123\"');
});

// Service and product views must reconcile to the combined business.
const { operatingData } = await import('../app/dashboard/erp-model.ts');
test('ERP business views reconcile across every reporting period',()=>{
 for(const period of ['q2','q3','all']){
  const all=operatingData(period,'combined'), service=operatingData(period,'service'), product=operatingData(period,'product');
  assert.equal(service.revenue+product.revenue,all.revenue);
  assert.equal(service.expenses+product.expenses,all.expenses);
  assert.equal(service.profit+product.profit,all.profit);
  assert.equal(all.profit,all.revenue-all.expenses);
 }
});
