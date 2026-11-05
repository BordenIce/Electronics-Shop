# 🛒 Item Card – Electronics Shop

A responsive electronics store front-end built with plain **HTML, CSS and JavaScript**. Browse laptops, phones, headphones, cameras and TVs, pick options and colours, save favourites and fill a basket. No frameworks, no build step.

## Features

- **5 categories:** Laptops, Phones, Headphones, Cameras, TVs (one page, switched via URL hash: `#laptops`, `#phones`, …)
- **Product cards** with selectable options (RAM, storage, lens, size, …), colour swatches (iPhone colours change the photo) and a quantity counter with a live price
- **Shopping basket** with line items, quantity controls and total; saved in `localStorage`
- **Favourites** (♥) with a dedicated view and a counter in the header
- **Filters:** search, price range, brand checkboxes and sorting
- **Responsive layout:** adaptive grid, burger menu and stacked filters on mobile
- **Accessible:** labelled controls, keyboard focus styles, `prefers-reduced-motion` support

## Project structure

```
Item_Card/
├── index.html   # Page markup
├── style.css    # Styles
├── script.js    # Rendering, filters, basket, favourites
├── data.js      # Product catalog (image names only)
└── images/      # Product photos, logo and icons
```

## Getting started

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
# open index.html in a browser, or:
python -m http.server 8000
```

## Adding a product

Append an object to a category in `data.js`:

```js
{
  id: "phones-5", name: "Google Pixel 8", brand: "Google", price: 700,
  img: "pixel8.png"   // file inside the images/ folder,
  options: [{ label: "Storage", values: ["128GB", "256GB"] }],
  colors: [{ name: "Black", hex: "#1f1f1f", img: "" }]   // optional
}
```

## Live demo

Publish with GitHub Pages: Settings → Pages → Deploy from a branch → `main` / root. The site will be available at `https://<your-username>.github.io/<repo-name>/`.

## Notes

- Products with `placeholder-*.svg` images (about half of the catalog) have no real photo yet: put the picture in `images/` and change the `img` value in `data.js`.
- Prices of the sample products are approximate and for demonstration only.
- Demo project: checkout and sign-in are not connected to a backend.
- Prices are fixed per product; options do not change the price.

## License

MIT. Add a `LICENSE` file to the repository root or choose another license.
