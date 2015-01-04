var calls = 0;
output = [];
function callback (err, index, data) {
  if (err) return console.error(err);
  output[index] = data;
  if (++calls == 3) {
    for (var i = 0; i < 3; i++) {
      console.log(output[i]);
    }
  }
}

var http = require('http');
[0,1,2].forEach(function(i) {
  http.get(process.argv[i + 2], function (response) {
      response.setEncoding('utf8');
      var contents = "";
      response.on('data', function(data) {
          contents += data;
      });
      response.on('error', function(err) {
          return callback(err);
      });
      response.on('end', function() {
        callback(null, i, contents);
      })
  });
});
