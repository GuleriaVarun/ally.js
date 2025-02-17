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
    global.focusScrollContainerWithoutOverflow = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    element: 'div',
    mutate: function mutate(element) {
      element.setAttribute('style', 'width: 100px; height: 50px;');
      element.innerHTML = '<div style="width: 500px; height: 40px;">scrollable content</div>';
    }
  };
  module.exports = exports['default'];
});
//# sourceMappingURL=focus-scroll-container-without-overflow.js.map