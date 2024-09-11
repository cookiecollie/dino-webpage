/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires

const colors = require("./build/tailwind/colors.json")
const fontSize = require("./build/tailwind/fontSize.json")

module.exports = {
    content: ["./index.html", "./src/**/*.{html,ts,tsx}", "./src/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: colors,
            fontSize: fontSize,
        },
    },
    plugins: [],
}
