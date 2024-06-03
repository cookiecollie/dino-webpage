/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const tokens = require("./build/js/tokens.cjs")
const colors = Object.fromEntries(
    Object.values(tokens.color.base)
        .map((i) => Object.values(i))
        .flat()
        .map(({ attributes, value }) => [
            `${attributes.item}-${attributes.subitem}`,
            value,
        ])
)

module.exports = {
    content: ["./index.html", "./src/**/*.{html,ts,tsx}", "./src/*.{ts,tsx}"],
    theme: {
        extend: {
            colors,
            dropShadow: {
                1: [
                    "0px 1px 2px rgba(0, 0, 0, 0.16)",
                    "0px 3px 6px rgba(0, 0, 0, 0.12)",
                    "0px 5px 12px rgba(0, 0, 0, 0.09)",
                ],
                2: [
                    "0px 3px 6px rgba(0, 0, 0, 0.12)",
                    "0px 6px 16px rgba(0, 0, 0, 0.08)",
                    "0px 9px 28px rgba(0, 0, 0, 0.05)",
                ],
                3: [
                    "0px 6px 16px rgba(0, 0, 0, 0.08)",
                    "0px 9px 28px rgba(0, 0, 0, 0.05)",
                    "0px 12px 48px rgba(0, 0, 0, 0.03)",
                ],
            },
        },
    },
    plugins: [],
}
