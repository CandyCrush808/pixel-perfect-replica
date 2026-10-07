import type { AppSettings, MaintenancePlan, Package, Service } from "./types";
const s = (id: string, name: string, category: string, price: number): Service => ({ id, name, category, price, pricingType: "FIXED", active: true });
const starterServices = [
  s("starter-ui","UI/UX & Website Design","Design",1800), s("starter-dev","1–2 Page Website Development","Development",2800), s("starter-responsive","Mobile Responsive Design","Design",600), s("starter-animation","Basic Animations","Experience",500), s("starter-menu","Menu / Services Section","Content",400), s("starter-whatsapp","WhatsApp Integration","Integration",300), s("starter-maps","Google Maps Integration","Integration",300), s("starter-contact","Contact Section","Content",300), s("starter-seo","Basic SEO Setup","SEO",400), s("starter-speed","Basic Speed Optimization","Performance",300), s("starter-security","Basic Security Setup","Security",299),
];
const professionalServices = [
  s("pro-ui","Custom UI/UX Design","Design",2500), s("pro-dev","4-Page Website Development","Development",5000), s("pro-animation","Advanced Animations & Interactions","Experience",1500), s("pro-menu","Menu / Services Section","Content",700), s("pro-gallery","Gallery","Content",500), s("pro-contact","Contact Form","Content",400), s("pro-whatsapp","WhatsApp Integration","Integration",400), s("pro-maps","Google Maps Integration","Integration",300), s("pro-seo","Basic SEO Setup","SEO",600), s("pro-speed","Speed Optimization","Performance",600), s("pro-security","Security & Backup Setup","Security",400), s("pro-gbp","Google Business Profile Guidance","Marketing",400), s("pro-analytics","Analytics Setup","Analytics",300), s("pro-content","Content Setup","Content",600), s("pro-launch","Testing, Deployment & Launch","Launch",799),
];
const premiumServices = [
  s("premium-ui","Premium UI/UX & Branding","Design",3500), s("premium-dev","5–7 Page Website Development","Development",6000), s("premium-animation","Advanced Animations & Interactions","Experience",2500), s("premium-menu","Menu / Services System","Content",1000), s("premium-gallery","Gallery / Portfolio","Content",600), s("premium-contact","Contact Form","Content",400), s("premium-whatsapp","WhatsApp Integration","Integration",400), s("premium-maps","Google Maps Integration","Integration",300), s("premium-booking","Online Booking / Reservation","Feature",2000), s("premium-ordering","Online Ordering Functionality","Feature",1500), s("premium-payment","Basic Payment Integration Setup","Payments",1000), s("premium-seo","SEO Setup","SEO",800), s("premium-speed","Advanced Speed Optimization","Performance",700), s("premium-security","Security + Backup","Security",500), s("premium-analytics","Analytics & Tracking","Analytics",500), s("premium-gbp","Google Business Profile Guidance","Marketing",400), s("premium-content","Content Setup","Content",600), s("premium-launch","Testing & Deployment","Launch",1299),
];
export const services: Service[] = [
  ...starterServices, ...professionalServices, ...premiumServices,
  { id:"extra-page",name:"Extra Page",category:"Add-on",price:1250,pricingType:"PER_UNIT",minPrice:1000,maxPrice:1500,active:true },
  { id:"major-design",name:"Major Design Change",category:"Add-on",price:1500,pricingType:"FIXED",minPrice:1500,active:true },
  { id:"new-feature",name:"New Feature",category:"Add-on",price:2000,pricingType:"FIXED",minPrice:2000,active:true },
  { id:"online-ordering-addon",name:"Online Ordering System",category:"Add-on",price:3000,pricingType:"FIXED",minPrice:3000,active:true },
  { id:"booking-addon",name:"Booking System",category:"Add-on",price:2000,pricingType:"FIXED",minPrice:2000,active:true },
  { id:"payment-addon",name:"Payment Gateway Integration",category:"Add-on",price:1500,pricingType:"FIXED",minPrice:1500,active:true },
  { id:"content-update",name:"Additional Content Update",category:"Add-on",price:400,pricingType:"PER_UNIT",minPrice:300,maxPrice:500,active:true },
  { id:"copywriting",name:"Professional Copywriting",category:"Add-on",price:1000,pricingType:"FIXED",minPrice:1000,active:true },
  { id:"advanced-seo",name:"Advanced SEO",category:"Add-on",price:3000,pricingType:"FIXED",minPrice:3000,active:true },
  { id:"social-integration",name:"Social Media Integration",category:"Add-on",price:750,pricingType:"FIXED",minPrice:500,maxPrice:1000,active:true },
  { id:"gbp-setup",name:"Google Business Profile Setup",category:"Add-on",price:1000,pricingType:"FIXED",minPrice:1000,active:true },
];
const packageFrom = (id:string,name:string,price:number,description:string,list:Service[],included:string[],excluded:string[],recommended=false):Package => ({ id,name,price,description,recommended,displayOrder:id==="starter"?1:id==="professional"?2:3,included,excluded,services:list.map(item=>({serviceId:item.id,quantity:1,included:true})) });
export const packages: Package[] = [
  packageFrom("starter","Starter",7999,"A polished online presence for businesses getting started.",starterServices,["1–2 pages","Responsive design","Basic animations","Menu/services","WhatsApp","Google Maps","Contact information","Basic SEO","Basic speed optimization"],["Online ordering","Online booking","Payment gateway","Advanced analytics","Regular content updates","Priority support"]),
  packageFrom("professional","Professional",14999,"A complete business website built to grow with you.",professionalServices,["4 custom pages","Premium responsive design","Advanced animations","Menu/services","Gallery","Contact form","WhatsApp","Google Maps","Basic SEO","Speed optimization","Security + backup setup","Google Business Profile guidance","Analytics setup","Content setup","Testing + deployment"],[],true),
  packageFrom("premium","Premium",24999,"A full digital experience with advanced customer features.",premiumServices,["5–7 pages","Premium UI/UX","Advanced interactions","Online booking","Online ordering","Payment integration setup","Advanced performance optimization","Analytics/tracking","Priority support"],[]),
];
export const maintenancePlans: MaintenancePlan[] = [
  {id:"basic",name:"Basic",price:2499,billing:"YEARLY",active:true,features:["Technical support","Basic backup","Minor bug fixes","1 minor content update/month","Basic monitoring"]},
  {id:"standard",name:"Standard",price:4999,billing:"YEARLY",active:true,features:["Everything in Basic","Menu updates","Image/text updates","Performance monitoring","Regular backup","2 update requests/month","Normal-priority support"]},
  {id:"premium",name:"Premium",price:7999,billing:"YEARLY",active:true,features:["Everything in Standard","Priority support","More frequent updates","Performance optimization","Security checks","4 update requests/month","Priority technical assistance"]},
];
export const defaultSettings: AppSettings = {
  company:{companyName:"BitBuds",logoText:"BB",email:"hello@bitbuds.in",phone:"+91 98765 43210",address:"Pune, Maharashtra, India",website:"bitbuds.in",gstNumber:"",paymentDetails:"UPI / Bank transfer details can be added in Company Settings.",quotationPrefix:"BB"},
  tax:{enabled:true,name:"GST",rate:18,afterDiscount:true},
  terms:["50% advance is required before project commencement.","Remaining payment is due before final launch unless another payment plan is selected.","Domain and hosting are billed separately at actual provider/renewal cost.","Third-party services and subscription charges are billed separately.","Major changes outside the agreed scope may incur additional charges.","Quotation is valid for the specified validity period.","Maintenance is optional unless explicitly included.","Content/images provided by the client must be supplied before the agreed deadline."],
};
