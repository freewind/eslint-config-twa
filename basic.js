module.exports = {
    "rules": {

        // eslint built-in rules
        "indent": [2, 4],
        "linebreak-style": [2, "unix"],
        "semi": [2, "always"],
        "space-infix-ops": [2],
        "max-statements": [2, 6],
        "complexity": [2, 4],
        "prefer-template": [2],

        // from the 3rd party `eslint-rules`
        "no-commented-out-code": 1,
        "no-long-files": [2, 50]
    },
    "extends": "twa"
}
