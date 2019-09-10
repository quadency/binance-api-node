'use strict';

var main = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var client;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            client = (0, _index2.default)({
              apiKey: 'ohGTYpO8FsM63C7wyORFD4RZAXMduMIQbXzsGYqvxyg9rgtluXNbjTFpbxllgwoj',
              apiSecret: 'cUNIJLz7VxDbTqNXacsb9XuPIoqS0gV99gr5dazhdUWSd0HaBNyJt50Mhao9Ty1D'
            });


            client.ws.user(function (message) {
              console.log('mess', message);
            });

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function main() {
    return _ref.apply(this, arguments);
  };
}();

var _index = require('../dist/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

main().then(function () {});