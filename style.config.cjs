/* eslint-disable @typescript-eslint/no-var-requires */
const StyleDictionary = require("style-dictionary")

module.exports = {
    source: ["tokens/**/*.json"],
    platforms: {
        js: {
            transformGroup: "js",
            buildPath: "build/js/",
            files: [
                {
                    destination: "tokens.cjs",
                    format: "javascript/module",
                },
            ],
        },

        "tailwind-json": {
            transformGroup: "js",
            buildPath: "build/tailwind/",
            files: [
                {
                    destination: "tokens.json",
                    format: "tailwind-custom",
                },
            ],
        },
    },
}

StyleDictionary.registerFormat({
    name: "tailwind-custom",
    formatter: ({ dictionary }) => {
        const categories = [
            ...new Set(
                dictionary.allTokens.map(({ attributes }) => {
                    return attributes.category
                })
            ),
        ]

        const tokens = Object.fromEntries(categories.map((cat) => [cat, {}]))

        dictionary.allTokens.forEach(({ path, value, attributes }) => {
            const categoryRemoved = path.slice(1)
            const joinedPath = ["base", "font"].includes(categoryRemoved[0])
                ? categoryRemoved.slice(1).join("-")
                : categoryRemoved.join("-")

            tokens[attributes.category][joinedPath] = value
        })

        return JSON.stringify(tokens)
    },
})
