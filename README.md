# @carnesen/tslint-config [![Build Status](https://travis-ci.com/carnesen/tslint-config.svg?branch=master)](https://travis-ci.com/carnesen/tslint-config)

TSLint configurations for `@carnesen` projects

## Install

These instructions assume that you're already using TypeScript and are now just adding `tslint`.

```
npm install --save-dev tslint @carnesen/tslint-config
```

## Usage
Create a file `tslint.json` at the root of your project with contents:

```json
{
  "extends": [
    "@carnesen/tslint-config"
  ]
}
```
That tells TSLint to use the "main" export of this package, [its `tslint.json`](tslint.json) file. Add these lines to your `package.json`'s "scripts" field:
```
    "lint": "tslint --project .",
    "lint:fix": "npm run lint -- --fix",
```
Finally add `&& npm run lint` to your package's "test" script to make sure you don't forget to lint! I strongly recommend setting up your editor to automatically fix lint errors on save. That makes it so that the linter mostly stays out of your way. In Visual Studio Code, [this plugin](https://marketplace.visualstudio.com/items?itemName=eg2.tslint) works great.

## Rules
This package's rules extend those espoused by [by AirBnB](https://github.com/airbnb/javascript), consumed as [tslint-config-airbnb](https://www.npmjs.com/package/tslint-config-airbnb). Those rules are mostly concerned with syntax. For code formatting, this package uses [`tslint-config-prettier`](https://github.com/alexjoverm/tslint-config-prettier), which disables all rules that are unnecessary or might conflict with [Prettier](https://prettier.io/) in conjunction with [`tslint-plugin-prettier`](https://github.com/ikatyang/tslint-plugin-prettier), which "runs Prettier as a TSLint rule and reports differences as individual TSLint issues". I wrote up some thoughts [here](https://github.com/googleapis/google-cloud-node/issues/2842#issuecomment-425229710) on why that's a much better approach than using `tslint` and `prettier` separately. Finally this configuration also enables the [dtslint "expect" rule](https://github.com/Microsoft/dtslint/blob/4539c93657ea93e96eff84aa835422f6eed3e3b7/src/rules/expectRule.ts), which allows you to make type assertions that are checked at the same time as the lint rules:

```ts
// $ExpectType "foo"
'foo';

// $ExpectType string[]
['foo', 'bar', 'baz'];
```
These are a nice way of writing programmatic tests for types beyond what you can achieve with unit testing alone.

Here are some projects that make use of this one if you want to see some code looks like that adhere to these rules:
- [@carnesen/bitcoin-config](https://github.com/carnesen/bitcoin-config): Constants, utilities, and TypeScript types for bitcoin server software configuration with Node.js
- [@carnesen/cli](https://github.com/carnesen/cli): A library for building Node.js command-line interfaces
- [@carnesen/coded-error](https://github.com/carnesen/coded-error): An enhanced `Error` class with additional properties "code" and "data"

## Related
- [@carnesen/tsconfig](https://github.com/carnesen/tsconfig): TypeScript configurations for @carnesen projects

## More information
If you encounter any bugs or have any questions or feature requests, please don't hesitate to file an issue or submit a pull request on this project's repository on GitHub.

## License

MIT © [Chris Arnesen](https://www.carnesen.com)
