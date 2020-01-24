# flattern, flat objects

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url]

Get a flat version of the object

## Installation

`npm install flattern`
or
`yarn add flattern`

## Test the package

`npm run test`
or
`yarn test`

## Usage

Example usage:
```
new Flattern({
    a: 1,
    b: 2,
    c: [3, 4],
    d: { e: 5, f: 6 },
    g: { h: { i: 7 } }
})
```

The response:
```
{
    a: 1,
    b: 2,
    "c.0": 3,
    "c.1": 4,
    "d.e": 5,
    "d.f": 6,
    "g.h.i": 7
}
```

[npm-url]: https://www.npmjs.com/package/flattern
[npm-image]: https://img.shields.io/npm/v/flattern.svg
[travis-url]: https://travis-ci.org/w3nl/flattern
[travis-image]: https://img.shields.io/travis/w3nl/flattern/master.svg
[coveralls-url]: https://coveralls.io/r/w3nl/flattern
[coveralls-image]: https://img.shields.io/coveralls/w3nl/flattern/master.svg
