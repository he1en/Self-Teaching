var net = require('http')
var url = require('url')

var server = net.createServer(function (req, res) {
  if (req.method != 'GET')
    return res.end('Request is not a GET.\n')

  var parsed = url.parse(req.url, true)
  var path = parsed.pathname.split('/')
  if (path[1] != 'api')
    return res.end('Invalid path')

  if (parsed.query.iso == undefined)
    return res.end('Missing time query')

  var time = new Date(parsed.query.iso)

  if (path[2] == 'unixtime') {
    var retvalue = {unixtime : time.getTime()}
    return res.end(JSON.stringify(retvalue))
  }

  if (path[2] == 'parsetime') {
    var retvalue = {
      hour : time.getHours(),
      minute : time.getMinutes(),
      second : time.getSeconds()
    }
    return res.end(JSON.stringify(retvalue))
  }

  return res.send('Invalid request')

  })

server.listen(process.argv[2])
