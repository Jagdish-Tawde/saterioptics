# Shree Sateri Optics

A mobile-first website for a local optical shop. Visitors can learn about in-store services, browse optical frame and sunglasses examples, and prepare enquiries to send through WhatsApp. The project uses React, TypeScript, Vite, Tailwind CSS, React Router and Lucide icons.

## Run locally

Use Node.js 22.18+ on the Node 22 release line, or Node.js 24 or later, with npm.

```sh
npm install
npm run dev
```

Open the local URL shown by Vite. To run the checks and preview the production build:

```sh
npm run lint
npm test
npm run build
npm run preview
```

## Customize the shop

- Edit [src/config/business.ts](src/config/business.ts). Enter the confirmed street address, city, state, postal code, and opening hours.
- Edit the root [.env](.env) for phone numbers, WhatsApp, Instagram, Facebook, and other public URLs. Use the full international WhatsApp number with country code. Leave unknown values blank and restart Vite after changes. Vite includes these values in the public site, so keep credentials out of these settings.
- Add the verified store directions link as `VITE_BUSINESS_MAPS_URL`. When this is blank, the contact page links to a Google Maps search using the configured store address. Separately, paste the HTTPS iframe source from Google Maps’ **Share → Embed a map** into `VITE_BUSINESS_MAPS_EMBED_URL`. The embed appears only when this field contains a Google Maps embed URL.
- Add the store story to `business.ts`. Save approved store and team photos under `public/images`, preferably as WebP or AVIF, then set `VITE_BUSINESS_STORE_PHOTO` and `VITE_BUSINESS_TEAM_PHOTO` to paths beginning with `/images/`.
- Set `VITE_BUSINESS_WEBSITE_URL` to the canonical HTTPS origin before publishing. The build generates page titles and social metadata in static HTML, plus `robots.txt` and `sitemap.xml`. Canonical URLs and sitemap entries are generated after the origin is set. LocalBusiness markup starts appearing on the home page once the complete address is configured, using the confirmed telephone and map URL where supplied.
- Edit page content in `src/pages` and page metadata in `src/config/pages.ts`. The home hero is an illustrative image at `public/images/boutique-hero.webp`.

### Update the collection

Edit [src/data/products.ts](src/data/products.ts). Each record needs a unique `id`, `name`, `category` (`optical` or `sunglasses`), `image`, and `available` flag. Optional fields include `frameShape`, `frameMaterial`, `color`, `price` in rupees, and `description`.

1. Put actual photos in `public/images/products/` and use matching `/images/products/…` paths in the records. Compress photos for web use.
2. Remove demo records or replace them with verified products. Remove the `demo` flag only after confirming each record and its photo, price, and availability.
3. Omit `price` to display **Ask for Price**. The first two records in each category appear on the home page.
4. The demo fixture test asserts the original 12/8 split. When replacing the demo inventory, update or remove the fixture-specific assertions while retaining the search and URL behavior tests.

The contact form validates fields and opens a WhatsApp draft. The customer confirms and sends it from WhatsApp. No messages go through this website. If the WhatsApp number is blank, the floating button is hidden, product enquiries lead to the contact page, and the form explains why sending is unavailable.

## Deploy to Cloudflare Pages

1. Push the project to a Git repository and connect it to a new Cloudflare Pages project.
2. Set **Build command** to `npm run build`, **Build output directory** to `dist`, and the Node version to 22.18 or a newer supported release. If the app is in a subdirectory, set that as the root directory.
3. Deploy using the values in the checked-in `.env`. You can also override them with matching `VITE_BUSINESS_*` build variables in Cloudflare Pages. Add the shop’s custom domain in Pages, and verify all five routes by opening each URL directly. The build generates individual HTML files for route metadata. Cloudflare Pages automatically serves extensionless paths and falls back to the SPA entry point for unmatched routes when no top-level `404.html` exists. For another static host, serve matching HTML files first and configure unmatched navigation to fall back to `/index.html`. [Cloudflare Pages serving documentation](https://developers.cloudflare.com/pages/configuration/serving-pages/)
4. For updates, edit the source files, run lint, tests and build locally, then push to the connected branch. Alternatively, rebuild locally and upload the new `dist` to a Direct Upload Pages project.

## Before publishing

- [ ] Confirm the public address, store pin, directions URL, and embed location.
- [ ] Confirm the public phone, WhatsApp number with country code, business hours, and holiday information.
- [ ] Verify the store story, store and team photos, and permission to publish any identifiable people.
- [ ] Confirm catalog names, codes, photos, prices and current availability. Remove unused samples.
- [ ] Confirm availability of specific lens types and any adjustments or repairs before adding those claims.
- [ ] Set the final domain and check the generated sitemap, canonical links, and store metadata.
- [ ] Test click-to-call, directions and WhatsApp draft delivery on a phone using the confirmed number.
