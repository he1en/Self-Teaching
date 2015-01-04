var fs = require('fs');
var contents = fs.readFileSync(process.argv[2]).toString();
var lines = contents.split('\n');
console.log(lines.length - 1);
