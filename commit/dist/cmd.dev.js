"use strict";

var exec = require('child_process').exec;

module.exports = function (cmd) {
  return new Promise(function (resolve, reject) {
    exec(cmd, function (error, stdout, stderr) {
      if (error) {
        console.log(error);
        reject(stderr);
      } else {
        resolve(stdout); // console.log("成功");
      }
    });
  });
};