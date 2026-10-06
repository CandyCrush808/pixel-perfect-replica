export type PricingType = "FIXED" | "PER_UNIT" | "MONTHLY" | "YEARLY" | "PERCENTAGE";
export type QuoteStatus = "Draft" | "Sent" | "Accepted" | "Rejected" | "Expired";
export type DiscountType = "NONE" | "PERCENTAGE" | "FIXED";
export type PaymentPlanType = "HALF_HALF" | "PREMIUM" | "CUSTOM";

export interface Service { id: string; name: string; category: string; description?: string; pricingType: PricingType; price: number; minPrice?: number; maxPrice?: number; active: boolean; }
export interface PackageService { serviceId: string; quantity: number; included: boolean; }
export interface Package { id: string; name: string; price: number; description: string; recommended?: boolean; displayOrder: number; included: string[]; excluded: string[]; services: PackageService[]; }
export interface MaintenancePlan { id: string; name: string; price: number; billing: "YEARLY"; features: string[]; active: boolean; }
export interface Client { name: string; company: string; email: string; phone: string; projectName: string; }
export interface QuoteItem { id: string; serviceId?: string; name: string; category: string; quantity: number; unitPrice: number; pricingType: PricingType; internal?: boolean; }
export interface Quotation { id: string; number: string; client: Client; packageId: string; packageName: string; packagePrice: number; items: QuoteItem[]; domain: number; hosting: number; maintenanceId?: string; maintenanceName?: string; maintenancePrice: number; discountType: DiscountType; discountValue: number; taxEnabled: boolean; taxName: string; taxRate: number; paymentPlan: PaymentPlanType; customPayments?: number[]; date: string; validUntil: string; status: QuoteStatus; timeline: string; terms: string[]; createdAt: string; updatedAt: string; }
export interface CompanySettings { companyName: string; logoText: string; email: string; phone: string; address: string; website: string; gstNumber: string; paymentDetails: string; quotationPrefix: string; }
export interface TaxSettings { enabled: boolean; name: string; rate: number; afterDiscount: boolean; }
export interface AppSettings { company: CompanySettings; tax: TaxSettings; terms: string[]; }
export interface CalculationLine { label: string; quantity: number; unitPrice: number; amount: number; }
export interface QuoteCalculation { packagePrice: number; packageBreakdownTotal: number; packageAdjustment: number; additionalServices: CalculationLine[]; domain: number; hosting: number; maintenance: number; subtotal: number; discountAmount: number; taxableAmount: number; taxAmount: number; total: number; payments: number[]; }
export interface QuoteDraft { client: Client; packageId: string; items: QuoteItem[]; domain: number; hosting: number; maintenanceId?: string; discountType: DiscountType; discountValue: number; taxEnabled: boolean; taxName: string; taxRate: number; paymentPlan: PaymentPlanType; customPayments: number[]; date: string; validUntil: string; timeline: string; terms: string[]; }
