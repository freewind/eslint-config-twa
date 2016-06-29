Eslint config for TWA
---------------------

This is a simple eslint config plugin for custom usage. 

It will be deployed as a normal npm package, and can be used in with eslint to check our js projects.

The `index.js` contains the default configurations, and `basic.js` and `normal.js` are two different levels of configuration can be chose.

Some rules of this project depends on `eslint-rules` but it doesn't make sense to declare it in `package.json`. We have to install `eslint-rules` when we use when we check projects.

How to use
----------

```
npm install -g eslint
npm install -g eslint-config-twa

cd myproject
npm install eslint-rules
eslint . -c twa/basic --no-eslintrc --rulesdir ./node_modules/eslint-rules
```

or

```
-c twa/normal
```

or

```
-c twa
```

which means `twa/index`.

`--no-eslintrc` means don't use configurations from `.eslintrc`, instead, use the specified `-c` config files.

Published
---------

Already published to: 

https://www.npmjs.com/package/eslint-config-twa

(increase the version and `npm publish`)

`eslint:recommended`
-------------------

https://github.com/eslint/eslint/blob/3642d0bb6ced17eeed50c030531a3ddbeb939f29/conf/eslint.json