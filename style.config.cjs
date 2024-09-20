// eslint-disable-next-line @typescript-eslint/no-var-requires
const StyleDictionary = require("style-dictionary")

StyleDictionary.registerFormat({
    name: "sd-tailwind-colors",
    formatter: ({ dictionary }) => {
        const tokens = dictionary.allTokens
            .map(({ attributes, value }) => {
                return attributes.category === "color"
                    ? attributes.type === "base"
                        ? [attributes.item, [attributes.subitem, value]]
                        : [attributes.type, [attributes.item, value]]
                    : null
            })
            .filter((entry) => entry != null)
            .map(([k, v]) => {
                try {
                    return [k, Object.fromEntries([v])]
                } catch (e) {
                    return `${e.name}: ${e.message}`
                }
            })
            .reduce(
                (obj, [k, v]) => ({
                    ...obj,
                    [k]: k in obj ? { ...obj[k], ...v } : v,
                }),
                {}
            )

        return JSON.stringify(tokens, null, 4)
    },
})

StyleDictionary.registerFormat({
    name: "sd-tailwind-fontSize",
    formatter: ({ dictionary }) => {
        const tokens = dictionary.allTokens
            .map(({ attributes, value }) =>
                attributes.category === "typography" &&
                attributes.type === "size"
                    ? [attributes.item, value]
                    : null
            )
            .filter((entry) => entry != null)

        return JSON.stringify(Object.fromEntries(tokens), null, 4)
    },
})

module.exports = {
    source: ["tokens/**/*.json"],
    platforms: {
        js: {
            transformGroup: "js",
            buildPath: "build/tailwind/",
            files: [
                {
                    destination: "colors.json",
                    format: "sd-tailwind-colors",
                },

                {
                    destination: "fontSize.json",
                    format: "sd-tailwind-fontSize",
                },
            ],
        },
    },
}
