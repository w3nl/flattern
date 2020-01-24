# flattern, flat objects

[![NPM version][npm-image]][npm-url]


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
