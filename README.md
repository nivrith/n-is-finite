# n-is-finite

[![CircleCI](https://circleci.com/gh/nivrith/n-is-finite/tree/master.svg?style=svg)](https://circleci.com/gh/nivrith/n-is-finite/tree/master)
[![NPM Downloads](https://img.shields.io/npm/dw/n-is-finite.svg)](https://www.npmjs.com/package/n-is-finite)
[![node](https://img.shields.io/node/v/n-is-finite.svg)](https://www.npmjs.com/package/n-is-finite)
[![License MIT](https://img.shields.io/github/license/nivrith/n-is-finite.svg)](https://github.com/nivrith/n-is-finite/blob/master/LICENSE)

check if number is finite

## Highlights

- Written in Typescript

## Usage

> check if number is finite

```js

  import nIsFinite from 'n-is-finite';

  nIsFinite(Infinity); // false
  nIsFinite(1/0); //false
  nIsFinit(2); // true
  nIsFinite(-0); // true

```

## License

MIT © [Nivrith](https://github.com/nivrith)
