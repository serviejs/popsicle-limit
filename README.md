# Popsicle Limit

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

Transparently handle API rate limiting with Popsicle.

## Installation

```
npm install popsicle-limit --save
```

## Usage

```js
import { middleware, toFetch } from "popsicle";
import { Request } from "popsicle/dist/node";
import { limit, HOUR } from "popsicle-limit";

const fetch = toFetch([limit(5000, HOUR), middleware], Request);
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/popsicle-limit.svg?style=flat
[npm-url]: https://npmjs.org/package/popsicle-limit
[downloads-image]: https://img.shields.io/npm/dm/popsicle-limit.svg?style=flat
[downloads-url]: https://npmjs.org/package/popsicle-limit
[travis-image]: https://img.shields.io/travis/serviejs/popsicle-limit.svg?style=flat
[travis-url]: https://travis-ci.org/serviejs/popsicle-limit
[coveralls-image]: https://img.shields.io/coveralls/serviejs/popsicle-limit.svg?style=flat
[coveralls-url]: https://coveralls.io/r/serviejs/popsicle-limit?branch=master
