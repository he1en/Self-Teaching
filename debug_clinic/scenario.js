var fs = require("fs");

var peach = function (obj) {
  console.trace('traced')
  console.log('percent j obj dump: %j', obj)
  console.log('console.dir dump:')
  console.dir(obj)
}

var bowser = function (callback) {
  fs.readFile(process.argv[2], {encoding: "utf8"}, callback);
}

var koopa = function (error, file) {
  if (error) {
    console.error('error:', error)
    return
  }
  console.assert(error === null)

  peach(JSON.parse(file))
}

console.time('time')
bowser(koopa)
console.timeEnd('time')
