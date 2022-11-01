# MUI Issue 34910 Repro

This is a repo to reproduce an issue with MUI and Next.js 13 when Turbopack is enabled

https://github.com/mui/material-ui/issues/34910

## Steps to reproduce

```sh
npm install
npm run dev
```

## Expected Behavior

The app loads without an client, server or build time errors

## Actual Behavior

The app crashes when trying to render the page on the server side with the following error:

````
  Error during SSR Rendering
  ReferenceError: defaultStyleFunctionMapping is not defined
    at unstable_createStyleFunctionSx (/node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js:16:70)
    at <unknown> (/node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js:104:24)
    at Module.[project-with-next]/node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js (ecmascript, ssr) (.next/server/app/chunks/ssr/_5e4186.js:57329:3)
    ```
````
