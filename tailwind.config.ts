import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                accentColor: "#000000",
            },
            fontFamily: {
                inter: ["var(--font-inter)", "sans-serif"],
                robotoCondensed: [
                    "var(--font-roboto-condensed)",
                    ...defaultTheme.fontFamily.sans,
                ],
            },
        },
    },
    plugins: [],
} satisfies Config;
