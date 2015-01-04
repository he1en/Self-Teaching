function callback(err, data) {
    if (err) throw err;
    var lines = data.toString().split('\n');
    console.log(lines.length - 1);
}

var fs = require('fs');
fs.readFile(process.argv[2], callback);
