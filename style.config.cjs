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
    },
}
