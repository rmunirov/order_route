module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        "react/prop-types": "off", //TODO delete this rule
        "react/no-unknown-property": ["error", { ignore: ["css"] }],
        "linebreak-style": "off",
        "max-len": ["error", { code: 140 }],
        "object-curly-spacing": ["error", "always"],
        "operator-linebreak": "off",
        "no-unused-vars": "off",
        "indent": [
            "error",
            4,
            {
                SwitchCase: 1,
            },
        ],
    },
};
