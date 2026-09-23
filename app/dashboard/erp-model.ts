import { months } from './model.ts';
export type BusinessMode = 'combined' | 'service' | 'product';
export const modeLabels = { combined: 'Combined business', service: 'Service business', product: 'Product business' };
export function operatingData(period: string, mode: BusinessMode) {
 const subset=period==='q2'?months.slice(0,3):period==='q3'?months.slice(3):months;
 const rows=subset.map(m=>{const serviceRevenue=Math.round(m.revenue*.6),serviceExpenses=Math.round(m.expenses*.55);return {...m,revenue:mode==='service'?serviceRevenue:mode==='product'?m.revenue-serviceRevenue:m.revenue,expenses:mode==='service'?serviceExpenses:mode==='product'?m.expenses-serviceExpenses:m.expenses}});
 const revenue=rows.reduce((n,m)=>n+m.revenue,0), expenses=rows.reduce((n,m)=>n+m.expenses,0);
 return {rows,revenue,expenses,profit:revenue-expenses};
}
export const workItems = [
 {id:'JOB-1048',type:'service' as const,customer:'Acacia Creative',item:'Website implementation',amount:480000,status:'In progress',next:'Complete job',done:'Completed'},
 {id:'ORD-2086',type:'product' as const,customer:'Summit Supplies',item:'Workstation bundle × 4',amount:328000,status:'Processing',next:'Mark dispatched',done:'Dispatched'},
 {id:'JOB-1047',type:'service' as const,customer:'Harbour Advisory',item:'Monthly reporting',amount:125000,status:'Review required',next:'Approve delivery',done:'Approved'},
 {id:'ORD-2085',type:'product' as const,customer:'North Coast Retail',item:'Sensor kit × 12',amount:216000,status:'Ready to dispatch',next:'Mark dispatched',done:'Dispatched'},
];
export const stock = [{name:'Sensor kit',sku:'SK-012',onHand:8,reorder:15},{name:'Workstation bundle',sku:'WS-004',onHand:24,reorder:10},{name:'Network hub',sku:'NH-008',onHand:5,reorder:8}];
export const jobs = [{name:'Website implementation',client:'Acacia Creative',progress:72,detail:'18 of 25 tasks complete'},{name:'Reporting rollout',client:'Harbour Advisory',progress:90,detail:'9 of 10 tasks complete'},{name:'Workflow discovery',client:'Coastal Partners',progress:30,detail:'3 of 10 tasks complete'}];
