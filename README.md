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

```javascript
var request = require('popsicle')
var limit = require('popsicle-limit')

var requestLimit = limit(5000, limit.HOUR)

request('/users.json')
  .use(requestLimit)

console.log(limit.SECOND) //=> 1000
console.log(limit.MINUTE) //=> 60000
console.log(limit.HOUR)   //=> 3600000
console.log(limit.DAY)    //=> 86400000
console.log(limit.WEEK)   //=> 604800000
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/popsicle-limit.svg?style=flat
[npm-url]: https://npmjs.org/package/popsicle-limit
[downloads-image]: https://img.shields.io/npm/dm/popsicle-limit.svg?style=flat
[downloads-url]: https://npmjs.org/package/popsicle-limit
[travis-image]: https://img.shields.io/travis/blakeembrey/popsicle-limit.svg?style=flat
[travis-url]: https://travis-ci.org/blakeembrey/popsicle-limit
[coveralls-image]: https://img.shields.io/coveralls/blakeembrey/popsicle-limit.svg?style=flat
[coveralls-url]: https://coveralls.io/r/blakeembrey/popsicle-limit?branch=master
