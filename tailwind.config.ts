import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "user-interface-colors-accent": "var(--user-interface-colors-accent)",
        "user-interface-colors-background":
          "var(--user-interface-colors-background)",
        "user-interface-colors-disabled":
          "var(--user-interface-colors-disabled)",
        "user-interface-colors-divider": "var(--user-interface-colors-divider)",
        "user-interface-colors-error": "var(--user-interface-colors-error)",
        "user-interface-colors-light-contrast":
          "var(--user-interface-colors-light-contrast)",
        "user-interface-colors-primary": "var(--user-interface-colors-primary)",
        "user-interface-colors-secondary":
          "var(--user-interface-colors-secondary)",
        "user-interface-colors-shades-button-shade":
          "var(--user-interface-colors-shades-button-shade)",
        "user-interface-colors-shades-gray-shade":
          "var(--user-interface-colors-shades-gray-shade)",
        "user-interface-colors-text-secondary":
          "var(--user-interface-colors-text-secondary)",
      },
      fontFamily: {
        "body-big": "var(--body-big-font-family)",
        "body-big-bold": "var(--body-big-bold-font-family)",
        "body-big-medium-short": "var(--body-big-medium-short-font-family)",
        "body-bold": "var(--body-bold-font-family)",
        "body-joy": "var(--body-joy-font-family)",
        "body-light": "var(--body-light-font-family)",
        "body-regular": "var(--body-regular-font-family)",
        "elements-button": "var(--elements-button-font-family)",
        "elements-button-joy": "var(--elements-button-joy-font-family)",
        "elements-link": "var(--elements-link-font-family)",
        "elements-text-inputs": "var(--elements-text-inputs-font-family)",
        "headers-display": "var(--headers-display-font-family)",
        "headers-display-joy": "var(--headers-display-joy-font-family)",
        "headers-primary": "var(--headers-primary-font-family)",
        "headers-primary-joy": "var(--headers-primary-joy-font-family)",
        "headers-secondary": "var(--headers-secondary-font-family)",
        "headers-secondary-joy": "var(--headers-secondary-joy-font-family)",
        "headers-tertiary": "var(--headers-tertiary-font-family)",
        "headers-tertiary-joy": "var(--headers-tertiary-joy-font-family)",
        "small-light": "var(--small-light-font-family)",
        "small-light-short": "var(--small-light-short-font-family)",
        "small-medium": "var(--small-medium-font-family)",
        "small-regular": "var(--small-regular-font-family)",
        "small-regular-joy": "var(--small-regular-joy-font-family)",
        "tiny-bold": "var(--tiny-bold-font-family)",
        "tiny-chips": "var(--tiny-chips-font-family)",
        "tiny-light": "var(--tiny-light-font-family)",
        "tiny-nano-short-uppercased":
          "var(--tiny-nano-short-uppercased-font-family)",
        "tiny-regular": "var(--tiny-regular-font-family)",
        "tiny-regular-uppercased": "var(--tiny-regular-uppercased-font-family)",
        "tiny-tiny": "var(--tiny-tiny-font-family)",
      },
      boxShadow: {
        "elevation-1": "var(--elevation-1)",
        "elevation-2": "var(--elevation-2)",
        "elevation-3": "var(--elevation-3)",
      },
    },
  },
  plugins: [],
};
export default config;
