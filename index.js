module.exports = {

    "rules": {

        // eslint built-in rules
        "indent": [2, 2],
        "linebreak-style": [2, "unix"],
        "semi": [2, "always"],
        "space-infix-ops": [2],
        "prefer-template": [2],

        // from the 3rd party `eslint-rules`
        "no-commented-out-code": 1
    },
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended"

};