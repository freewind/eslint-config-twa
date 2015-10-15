Install to local:

```
npm link
```

When check:

```
npm install eslint-rules --prefix ~/temp/eslint-rules
eslint src -c twa/basic --no-eslintrc --rulesdir eslint-rules
```
