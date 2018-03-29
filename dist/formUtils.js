/**
 * @switch-company/form-utils - Convenience methods for form datas
 * @version v1.0.0
 * @link undefined
 * @license ISC
 **/

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.formUtils = factory());
}(this, (function () { 'use strict';

  var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

  function toJSON(form) {
    var stringOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var data = new FormData(form);
    var json = {};

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _ref = _step.value;

        var _ref2 = _slicedToArray(_ref, 2);

        var name = _ref2[0];
        var value = _ref2[1];


        if (stringOnly && typeof value !== 'string') {
          continue;
        }

        // don't store empty file inputs
        if (value.constructor.name === 'File' && value.size === 0) {
          continue;
        }

        if (json[name]) {
          // push the value
          if (Array.isArray(json[name])) {
            json[name].push(value);

            continue;
          }

          // transform into an array
          json[name] = [json[name], value];

          continue;
        }

        // create pair
        json[name] = value;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return json;
  }

  var escape = window.encodeURIComponent;

  function toQuery(form) {
    var params = toJSON(form, true);

    return Object.keys(params).map(function (key) {
      if (Array.isArray(params[key])) {
        return params[key].map(function (value) {
          return escape(key) + '=' + escape(value);
        }).join('&');
      }

      return escape(key) + '=' + escape(params[key]);
    }).join('&');
  }

  function hasFile(form) {
    var elements = Array.from(form.elements);

    return elements.some(function (element) {
      return element.type === 'file' && element.files.length > 0;
    });
  }

  var index = { toJSON: toJSON, toQuery: toQuery, hasFile: hasFile };

  return index;

})));
