module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    plugins: [
        "react"
    ],
    rules: {
        "react/jsx-filename-extension": 0,
        "react/prefer-stateless-function": 0,
        "import/prefer-default-export" : 0,
        "react/destructuring-assignment" : 0,
        "react/forbid-prop-types": 0,
        "no-param-reassign":0,
        "jsx-ally/label-has-associated-control": 0,
        "no-console": 0
    }
};