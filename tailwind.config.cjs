/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const tokens = require("./build/tailwind/tokens.json")

module.exports = {
    content: ["./index.html", "./src/**/*.{html,ts,tsx}", "./src/*.{ts,tsx}"],
    theme: {
        extend: { colors: tokens.color, fontSize: tokens.size },
    },
    plugins: [],
}
