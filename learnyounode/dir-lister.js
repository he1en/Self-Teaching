module.exports = function (dir, ext, callback) {
  var fs = require('fs');
  var path = require ('path');

  fs.readdir(dir, function (err, list) {
    if (err) return callback(err);
    var files = [];
    for (var i = 0; i < list.length; i++) {
      if (path.extname(list[i]).substr(1) == ext) {
        files[files.length] = list[i];
      }
    }
    callback(null, files);
  });
}
