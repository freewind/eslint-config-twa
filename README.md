Eslint config for TWA
---------------------

This is a simple eslint shareable config. 

It will be deployed as a normal npm package, and can be used in with eslint to check our js projects.

The `index.js` contains the default configurations, and `basic.js` and `normal.js` are two different levels of configuration can be chose.

Some rules of this project depends on `eslint-plugin-extra-rules` but it doesn't make sense to declare it in `package.json`. We have to install `eslint-rules` when we use when we check projects.

How to use
----------

```
npm install -g eslint
npm install -g eslint-plugin-extra-rules
npm install -g eslint-config-twa

cd myproject
eslint . -c twa/basic --no-eslintrc
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

Documents
---------

- http://eslint.org/docs/developer-guide/shareable-configs