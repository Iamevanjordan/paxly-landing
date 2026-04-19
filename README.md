# Paxly — Landing Page

Paxly is a document intelligence system that extracts structured data from source PDFs and autonomously populates target forms — no manual entry, no copy-pasting between documents. Built initially for real estate agents spending 30+ minutes filling out contracts on every deal, the underlying engine is domain-agnostic and designed to fit any industry where complex documents and repetitive form work collide.

When I started building it, the system itself wasn't the only thing I was thinking about. I wanted the experience of landing on the site to feel calm and intentional, not aggressive. My primary interest lied within communicating clearly without raising your blood pressure lol

That idea — soul-soothing experiences in digital spaces — is something I want to keep building toward in whatever form it manifests as. Paxly's site was an early version of that.

---

## About the Product

Paxly ingests a source document (like a Property Details PDF), extracts the relevant data, and maps it across the fields of a target form — eliminating manual data entry for document-heavy workflows. The platform is built to be domain-agnostic, with real estate as the first vertical.

This repo is the public marketing frontend only. The document parsing engine and backend are not included here.

---

## Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

---

## Pages

| Route | Description |
|---|---|
| `/` | Hero, value proposition, CTA |
| `/how-it-works` | Product walkthrough |
| `/pricing` | Pricing tiers |

---

## Running Locally

```bash
git clone https://github.com/iamevanjordan/paxly-landing.git
cd paxly-landing
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/iamevanjordan/paxly-landing)

---

Built by Evan-Jordan  
[github.com/iamevanjordan](https://github.com/iamevanjordan)
