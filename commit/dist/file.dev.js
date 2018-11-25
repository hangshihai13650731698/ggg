"use strict";

var fs = require('fs');

module.exports = function (message) {
  return new Promise(function (resolve, reject) {
    fs.appendFile('message.txt', "".concat(message, "\n"), function (err) {
      // console.log('数据已追加到文件');
      err ? reject() : resolve();
    });
  });
};