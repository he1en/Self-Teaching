var http = require('http');
http.get(process.argv[2], function (response) {
    response.setEncoding('utf8');
    var contents = "";
    response.on('data', function(data) {
        contents += data;
    });
    response.on('error', function(err) {
        console.error(err);
    });
    response.on('end', function() {
      console.log(contents.length);
      console.log(contents);
    })
});
