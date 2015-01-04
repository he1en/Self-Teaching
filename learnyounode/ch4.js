var fs = require('fs');
fs.readFile(process.argv[2], function (err, data) {
  if (err) throw err;
  var lines = data.toString().split('\n');
  console.log(lines.length - 1);
});
