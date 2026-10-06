import type { Package, QuoteDraft, QuoteCalculation, Service } from "./types";
const money=(value:number)=>Math.max(0,Number.isFinite(value)?value:0);
export function calculateQuote(draft:QuoteDraft,selectedPackage:Package,services:Service[],maintenancePrice:number):QuoteCalculation{
  const packageBreakdown=selectedPackage.services.reduce((sum,item)=>{const service=services.find(s=>s.id===item.serviceId);return sum+(service?money(service.price)*Math.max(0,item.quantity):0)},0);
  const additionalServices=draft.items.map(item=>{const quantity=Math.max(0,item.quantity),unitPrice=money(item.unitPrice);const amount=item.pricingType==="PERCENTAGE"?packagePrice*(unitPrice/100)*quantity:quantity*unitPrice;return {label:item.name,quantity,unitPrice,amount}});
  const packagePrice=money(selectedPackage.price),packageAdjustment=money(packagePrice-packageBreakdown),additionalTotal=additionalServices.reduce((sum,line)=>sum+line.amount,0);
  const domain=money(draft.domain),hosting=money(draft.hosting),maintenance=money(maintenancePrice);
  const subtotal=packagePrice+additionalTotal+domain+hosting+maintenance;
  let discountAmount=0;
  if(draft.discountType==="PERCENTAGE") discountAmount=subtotal*(Math.min(100,Math.max(0,money(draft.discountValue)))/100);
  else if(draft.discountType==="FIXED") discountAmount=Math.min(subtotal,money(draft.discountValue));
  const taxableAmount=Math.max(0,subtotal-discountAmount),taxAmount=draft.taxEnabled?taxableAmount*(Math.max(0,money(draft.taxRate))/100):0,total=Math.max(0,taxableAmount+taxAmount);
  const payments=draft.paymentPlan==="HALF_HALF"?[total*.5,total*.5]:draft.paymentPlan==="PREMIUM"?[total*.4,total*.3,total*.3]:normalizePayments(draft.customPayments,total);
  return {packagePrice,packageBreakdownTotal:packageBreakdown,packageAdjustment,additionalServices,domain,hosting,maintenance,subtotal,discountAmount,taxableAmount,taxAmount,total,payments};
}
function normalizePayments(values:number[],total:number){const clean=values.map(v=>Math.max(0,Number.isFinite(v)?v:0)),sum=clean.reduce((a,b)=>a+b,0);return sum?clean.map(v=>total*v/sum):[total]}
export function validateQuote(draft:QuoteDraft){const errors:Record<string,string>={};if(!draft.packageId)errors.package="Please select a package.";if(!draft.client.name.trim())errors.name="Client name is required.";if(!draft.client.company.trim())errors.company="Business / company name is required.";if(draft.client.email&&!/^\S+@\S+\.\S+$/.test(draft.client.email))errors.email="Enter a valid email address.";if(draft.client.phone&&!/^[0-9+()\-\s]{7,20}$/.test(draft.client.phone))errors.phone="Enter a valid phone number.";if(draft.discountValue<0)errors.discount="Discount cannot be negative.";if(draft.discountType==="PERCENTAGE"&&draft.discountValue>100)errors.discount="Percentage discount cannot exceed 100%.";if(draft.taxRate<0||draft.taxRate>100)errors.tax="Tax rate must be between 0% and 100%.";if(draft.domain<0||draft.hosting<0)errors.cost="Domain and hosting cannot be negative.";if(draft.items.some(item=>item.quantity<=0||item.unitPrice<0))errors.items="Service quantities and prices must be valid.";return errors}
export function formatINR(value:number){return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(money(value))}
