var net = require('http')
var map = require('through2-map')

var server = net.createServer(function (req, res) {
  if (req.method != 'POST')
    return res.end('Request is not a POST.\n')

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res);
})

server.listen(process.argv[2])
