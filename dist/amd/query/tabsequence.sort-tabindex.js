(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'exports', '../util/tabindex-value'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../util/tabindex-value'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.tabindexValue);
    global.tabsequenceSortTabindex = mod.exports;
  }
})(this, function (module, exports, _tabindexValue) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (elements) {
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement.tabIndex
    // elements with tabIndex "0" (including tabbableElements without tabIndex) should be navigated in the order they appear.
    // elements with a positive tabIndex:
    //   Elements that have identical tabIndexes should be navigated in the order they appear.
    //   Navigation proceeds from the lowest tabIndex to the highest tabIndex.

    // NOTE: sort implementation may be unstable and thus mess up DOM order,
    // that's why we build a map that's being sorted instead. If we were able to rely
    // on a stable sorting algorithm, sortTabindex() could be as simple as
    // elements.sort(function(a, b) { return a.tabIndex - b.tabIndex; });
    // at this time Chrome does not use a stable sorting algorithm
    // see http://blog.rodneyrehm.de/archives/14-Sorting-Were-Doing-It-Wrong.html#stability

    // NOTE: compareDocumentPosition seemed like more overhead than just sorting this with buckets
    // https://developer.mozilla.org/en-US/docs/Web/API/Node.compareDocumentPosition

    var map = {};
    var indexes = [];
    var normal = elements.filter(function (element) {
      // in Trident and Gecko SVGElement does not know about the tabIndex property
      var tabIndex = element.tabIndex;
      if (tabIndex === undefined) {
        tabIndex = (0, _tabindexValue2.default)(element);
      }

      // extract elements that don't need sorting
      if (tabIndex <= 0 || tabIndex === null || tabIndex === undefined) {
        return true;
      }

      if (!map[tabIndex]) {
        // create sortable bucket for dom-order-preservation of elements with the same tabIndex
        map[tabIndex] = [];
        // maintain a list of unique tabIndexes
        indexes.push(tabIndex);
      }

      // sort element into the proper bucket
      map[tabIndex].push(element);
      // element moved to sorting map, so not "normal" anymore
      return false;
    });

    // sort the tabindex ascending,
    // then resolve them to their appropriate buckets,
    // then flatten the array of arrays to an array
    var _elements = indexes.sort().map(function (tabIndex) {
      return map[tabIndex];
    }).reduceRight(function (previous, current) {
      return current.concat(previous);
    }, normal);

    return _elements;
  };

  var _tabindexValue2 = _interopRequireDefault(_tabindexValue);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  module.exports = exports['default'];
});
//# sourceMappingURL=tabsequence.sort-tabindex.js.map