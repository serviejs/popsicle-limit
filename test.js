/* global describe, it, beforeEach */

require('es6-promise').polyfill()

var popsicle = require('popsicle')
var expect = require('chai').expect
var nock = require('nock')
var popsicleLimit = require('./')

describe('popsicle limit', function () {
  beforeEach(function () {
    nock('http://example.com')
      .persist()
      .get('/endpoint')
      .reply(200, 'hello world')
  })

  it('should rate limit api calls', function () {
    var url = 'http://example.com/endpoint'
    var limit = popsicleLimit(1, 500)
    var start = Date.now()

    function request (obj) {
      return popsicle(obj).use(limit)
    }

    return request(url)
      .then(function () {
        expect(Date.now() - start).to.be.gt(0)

        return request(url)
      })
      .then(function () {
        expect(Date.now() - start).to.be.gt(500)

        return request(url)
      })
      .then(function () {
        expect(Date.now() - start).to.be.gt(1000)
      })
  })

  it('provide common short cuts', function () {
    expect(popsicleLimit.SECOND).to.be.a('number')
    expect(popsicleLimit.MINUTE).to.be.a('number')
    expect(popsicleLimit.HOUR).to.be.a('number')
    expect(popsicleLimit.DAY).to.be.a('number')
    expect(popsicleLimit.WEEK).to.be.a('number')
  })
})
