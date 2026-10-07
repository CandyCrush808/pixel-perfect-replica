# BitBuds — Web & Digital Services

BitBuds is a React + TypeScript website for presenting web-development services and generating client quotations through an integrated pricing workspace.

## Features

- Responsive BitBuds marketing website
- Scroll-aware navigation and animated UI
- Service and pricing sections
- Package comparison
- Internal quotation builder at `/pricing`
- Starter, Professional and Premium packages
- Add-on services, domain/hosting and maintenance pricing
- Discount and GST calculation
- Configurable payment plans
- Quotation history with localStorage persistence
- Client-facing quotation preview
- PDF and DOCX quotation export
- Service, package, maintenance and company/tax management

## Tech Stack

- React 19
- TypeScript
- Vite
- TanStack Router / TanStack Start
- Tailwind CSS 4
- Radix UI
- Lucide React
- jsPDF
- docx

## Run Locally

Requirements: Node.js and npm.

```bash
git clone https://github.com/CandyCrush808/pixel-perfect-replica.git
cd pixel-perfect-replica
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Production Checks

```bash
npm run build
npm run lint
npm test
```

## Pricing Workspace

Open:

```text
/pricing
```

The quotation workspace stores editable pricing data and saved quotations in the browser's localStorage because this project does not currently use a backend database.

## Important

- Domain and hosting are treated as separate recurring/provider charges.
- GST is calculated after the configured discount.
- Existing website sections, animations and routing are preserved.
- Do not commit `.env` files or other secrets.
