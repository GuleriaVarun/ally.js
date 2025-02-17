(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'exports', './media/gif'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./media/gif'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.gif);
    global.focusImgIsmap = mod.exports;
  }
})(this, function (module, exports, _gif) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _gif2 = _interopRequireDefault(_gif);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = {
    element: 'a',
    mutate: function mutate(element) {
      element.href = '#void';
      element.innerHTML = '<img ismap src="' + _gif2.default + '" alt="">';
      return element.querySelector('img');
    }
  };
  module.exports = exports['default'];
});
//# sourceMappingURL=focus-img-ismap.js.map