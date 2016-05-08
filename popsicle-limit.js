var trickle = require('timetrickle')

module.exports = popsicleLimit

function popsicleLimit (count, duration) {
  var limit = trickle(count, duration)

  return function (req, next) {
    return new Promise(limit).then(next)
  }
}

popsicleLimit.SECOND = 1000
popsicleLimit.MINUTE = popsicleLimit.SECOND * 60
popsicleLimit.HOUR = popsicleLimit.MINUTE * 60
popsicleLimit.DAY = popsicleLimit.HOUR * 24
popsicleLimit.WEEK = popsicleLimit.DAY * 7
