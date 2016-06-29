Eslint config for TWA
---------------------

This is a simple eslint config plugin for custom usage. 

It will be deployed as a normal npm package, and can be used in with eslint to check our js projects.

The `index.js` contains the default configurations, and `basic.js` and `normal.js` are two different levels of configuration can be chose.

How to use
----------

```
npm install -g eslint
npm install -g eslint-config-twa
npm install eslint-rules --prefix ~/temp/eslint-rules
eslint src -c twa/basic --no-eslintrc --rulesdir ~/temp/eslint-rules
```

or

```
-c twa/normal
```

`--no-eslintrc` means don't use configurations from `.eslintrc`, instead, use the specified `-c` config files.

Published
---------

Already published to: 

https://www.npmjs.com/package/eslint-config-twa

(increase the version and `npm publish`)

`eslint:recommended`
-------------------

https://github.com/eslint/eslint/blob/3642d0bb6ced17eeed50c030531a3ddbeb939f29/conf/eslint.json