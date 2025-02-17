(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module", "exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.getContentDocument = mod.exports;
  }
})(this, function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (node) {
    try {
      // works on <object> and <iframe>
      return node.contentDocument
      // works on <object> and <iframe>
      || node.contentWindow && node.contentWindow.document
      // works on <object> and <iframe> that contain SVG
      || node.getSVGDocument && node.getSVGDocument() || null;
    } catch (e) {
      // SecurityError: Failed to read the 'contentDocument' property from 'HTMLObjectElement'
      // also IE may throw member not found exception e.g. on <object type="image/png">
      return null;
    }
  };

  module.exports = exports["default"];
});
//# sourceMappingURL=get-content-document.js.map