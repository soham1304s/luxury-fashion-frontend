# XYZ Fashion Luxury Ecommerce

A full-stack luxury fashion ecommerce build with a cinematic Next.js storefront and a secure Express/MongoDB commerce API.

## Stack

- Frontend: Next.js 15, React, TypeScript, Tailwind CSS, Framer Motion, GSAP-ready architecture, Lenis, React Three Fiber, Zustand, Lucide icons
- Backend: Node.js, Express, MongoDB Atlas, Mongoose, JWT, Helmet, rate limiting, REST APIs
- Commerce: custom backend foundation with Stripe, Razorpay, PayPal, Shiprocket, AfterShip, Mailchimp, and Klaviyo adapter routes

## Structure

```txt
frontend/app        Next.js routes for storefront, product, checkout, dashboard, admin
frontend/components Shared layout, UI, ecommerce components
frontend/sections   Editorial homepage sections
frontend/store      Zustand cart/wishlist/recently-viewed store
backend/src         Express API, Mongo models, auth, admin, payment, integration routes
```

## Local Development

```bash
npm install
cp .env.example .env
npm run dev
npm run dev:api
```

Frontend runs at `http://localhost:3000`. Backend runs at `http://localhost:5000`.

## Environment

Set `MONGODB_URI`, `JWT_SECRET`, and payment/integration credentials in production. The frontend uses `NEXT_PUBLIC_API_URL` for REST API calls and `NEXT_PUBLIC_SITE_URL` for canonical SEO output.

## Deployment

1. Deploy `frontend` to Vercel.
2. Deploy `backend` to Render or Railway.
3. Use MongoDB Atlas with IP allowlisting or private network access.
4. Place Cloudflare in front of the domain for CDN, WAF, compression, bot controls, and TLS.
5. Configure webhooks for Stripe, Razorpay, PayPal, Shiprocket, AfterShip, Klaviyo, and Mailchimp.
6. Add analytics IDs for Google Analytics, Google Tag Manager, Meta Pixel, and Hotjar.

## Production Hardening

- Replace demo imagery and seed data with CMS or backend products.
- Add CSRF tokens for cookie-auth flows. Current API uses bearer JWT by default.
- Add payment webhook verification before marking orders paid.
- Add email templates for OTP, abandoned cart, order confirmation, delivery, review requests, and gift cards.
- Add admin role provisioning through a protected script or database migration.
- Run Lighthouse, bundle analysis, and visual QA before launch.
