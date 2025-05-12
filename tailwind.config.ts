import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        dropdown: "0 4px 8px 0 rgba(16, 24, 32, 0.12)",
        book: "0px 2px 8px 0px rgba(16, 24, 32, 0.12)",
      },
      colors: {
        "sea-green": "#00A3AD",
        rose: "#FF8674",
        "sea-green-light": "#67C1CA",
        "rose-dark": "#CE5A49",
        "sea-green-dark": "#02828E",
        ebony: "#101820",
      },
      fontSize: {
        "order-date": [
          "1rem",
          {
            fontWeight: 400,
            lineHeight: "24px",
          },
        ],
        "order-date-xs": [
          "0.5rem",
          {
            fontWeight: 400,
            lineHeight: "12px",
          },
        ],
        price: [
          "2rem",
          {
            lineHeight: "48px",
            letterSpacing: "0.5px",
            fontWeight: 700,
          },
        ],
        "price-xs": [
          "1rem",
          {
            lineHeight: "24px",
            letterSpacing: "0.25px",
            fontWeight: 700,
          },
        ],
        "main-title": [
          "2.5rem",
          {
            fontWeight: "700",
          },
        ],
        "main-title-xs": [
          "1.25rem",
          {
            fontWeight: "700",
          },
        ],
        "sub-title": [
          "1.5rem",
          {
            fontWeight: "700",
            lineHeight: "36px",
            letterSpacing: "1px",
          },
        ],
        "sub-title-xs": [
          "0.75rem",
          {
            fontWeight: "700",
            lineHeight: "20px",
            letterSpacing: "0.5px",
          },
        ],
        "book-cover": [
          "1.75rem",
          {
            fontWeight: "500",
            lineHeight: "42px",
            letterSpacing: "1px",
          },
        ],
        "book-cover-xs": [
          "0.875rem",
          {
            fontWeight: "500",
            lineHeight: "22px",
            letterSpacing: "0.5px",
          },
        ],
        "form-text": [
          "0.875rem",
          {
            fontWeight: "500",
            letterSpacing: "1px",
          },
        ],
        "form-text-xs": [
          "0.6rem",
          {
            fontWeight: "500",
            letterSpacing: "0.5px",
          },
        ],
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
export default config;
