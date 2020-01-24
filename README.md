# object.flat

[![NPM version][npm-image]][npm-url]


## Installation

`npm install object.flat`
or
`yarn add object.flat`

## Test the package

`npm run test`
or
`yarn test`

## Usage

Example usage:
```
new Flatten({
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

[npm-url]: https://www.npmjs.com/package/object.flat
[npm-image]: https://img.shields.io/npm/v/object.flat.svg
