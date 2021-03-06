module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": false,
        "node": true,
        "jquery": true
    },
    "extends": "airbnb-base",
    "plugins": [ "import", "html"],
    "rules": {
        // 0 "off", 1 "warn" 2 "error"
        "no-console": 1,
        "quotes": [ 2, "single" ],
        "no-underscore-dangle": 1,
        "no-plusplus": [ 2, { "allowForLoopAfterthoughts": true }],
        "comma-dangle": [ 2, "never"]
    }
};