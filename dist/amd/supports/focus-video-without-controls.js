(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'exports', './media/mp4'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./media/mp4'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.mp4);
    global.focusVideoWithoutControls = mod.exports;
  }
})(this, function (module, exports, _mp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _mp2 = _interopRequireDefault(_mp);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = {
    element: 'video',
    mutate: function mutate(element) {
      try {
        // invalid media file can trigger warning in console, data-uri to prevent HTTP request
        element.setAttribute('src', _mp2.default);
      } catch (e) {
        // IE9 may throw "Error: Not implemented"
      }
    }
  };
  module.exports = exports['default'];
});
//# sourceMappingURL=focus-video-without-controls.js.map