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
    global.cssShadowPiercingDeepCombinator = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    var combinator = void 0;

    // see https://dev.w3.org/csswg/css-scoping-1/#deep-combinator
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1117572
    // https://code.google.com/p/chromium/issues/detail?id=446051
    try {
      document.querySelector('html >>> :first-child');
      combinator = '>>>';
    } catch (noArrowArrowArrow) {
      try {
        // old syntax supported at least up to Chrome 41
        // https://code.google.com/p/chromium/issues/detail?id=446051
        document.querySelector('html /deep/ :first-child');
        combinator = '/deep/';
      } catch (noDeep) {
        combinator = '';
      }
    }

    return combinator;
  };

  module.exports = exports['default'];
});
//# sourceMappingURL=css-shadow-piercing-deep-combinator.js.map