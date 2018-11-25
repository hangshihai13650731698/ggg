"use strict";

var cmd = require('./cmd');

var file = require('./file'); // 提交185天前的记录


var day = 185;

var random = function random(lower, upper) {
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};

var commit = function commit() {
  var today, commitTime, commitNumber;
  return regeneratorRuntime.async(function commit$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          today = new Date(); // 今天-起始时间-间距时间
          // 180天前-360天前的记录
          // 最好每次不要超过180天

          today.setTime(today.getTime() - 180 * 24 * 60 * 60 * 1000 - day * 24 * 60 * 60 * 1000);
          commitTime = "".concat(today.getFullYear(), ".").concat(today.getMonth() + 1, ".").concat(today.getDate());
          console.log(commitTime); // 提交个数

          commitNumber = random(1, 10);

        case 5:
          if (!commitNumber) {
            _context.next = 17;
            break;
          }

          _context.next = 8;
          return regeneratorRuntime.awrap(file(commitTime));

        case 8:
          _context.next = 10;
          return regeneratorRuntime.awrap(cmd('git status'));

        case 10:
          _context.next = 12;
          return regeneratorRuntime.awrap(cmd('git add .'));

        case 12:
          _context.next = 14;
          return regeneratorRuntime.awrap(cmd("git commit -m \"".concat(commitTime, "\" --no-edit --date=\"").concat(commitTime, "\"")));

        case 14:
          commitNumber--;
          _context.next = 5;
          break;

        case 17:
          if (!day) {
            _context.next = 22;
            break;
          }

          day--;
          commit();
          _context.next = 24;
          break;

        case 22:
          _context.next = 24;
          return regeneratorRuntime.awrap(cmd('git push origin master'));

        case 24:
        case "end":
          return _context.stop();
      }
    }
  });
};

commit();