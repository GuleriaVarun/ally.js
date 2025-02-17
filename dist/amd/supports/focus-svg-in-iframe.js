(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'exports', '../util/platform'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../util/platform'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.platform);
    global.focusSvgInIframe = mod.exports;
  }
})(this, function (module, exports, _platform) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    return result;
  };

  var _platform2 = _interopRequireDefault(_platform);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  // Firefox seems to be handling the SVG-document-in-iframe creation asynchronously
  // and thereby produces a false negative test result. Thus the test is pointless
  // and we resort to UA sniffing once again.
  // see http://jsbin.com/vunadohoko/1/edit?js,console,output

  var result = Boolean(_platform2.default.is.GECKO && typeof SVGElement !== 'undefined' && SVGElement.prototype.focus);

  module.exports = exports['default'];
});
//# sourceMappingURL=focus-svg-in-iframe.js.map