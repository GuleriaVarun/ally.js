(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.focusTabindexTrailingCharacters = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    element: 'div',
    mutate: function mutate(element) {
      element.setAttribute('tabindex', '3x');
    }
  };
  module.exports = exports['default'];
});
//# sourceMappingURL=focus-tabindex-trailing-characters.js.map