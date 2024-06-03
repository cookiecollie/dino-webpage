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
        extend: { colors },
    },
    plugins: [],
}
