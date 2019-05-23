/*!
 * Name    : Gist Simple - jQuery Gist Loader
 * Version : 1.0.0
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/gist-simple
 * Based   : https://github.com/blairvanderhoof/gist-embed by Blair Vanderhoof
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon_preloader_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _icon_preloader_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_icon_preloader_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_arrow_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _icon_arrow_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_icon_arrow_svg__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var $ = global__WEBPACK_IMPORTED_MODULE_0__["window"].jQuery;
var cache = {};
var instanceID = 0;

var GistSimple =
/*#__PURE__*/
function () {
  function GistSimple(container, userOptions) {
    _classCallCheck(this, GistSimple);

    var self = this;
    self.instanceID = instanceID++;
    self.$container = $(container);
    self.defaults = {
      id: '',
      file: '',
      caption: '',
      lines: '',
      linesExpanded: false,
      highlightLines: '',
      showFooter: true,
      showLineNumbers: true,
      enableCache: true,
      // events
      onInit: null,
      // function() {}
      onDestroy: null // function() {}

    }; // prepare data-options

    var dataOptions = self.$item.dataset || {};
    var pureDataOptions = {};
    Object.keys(dataOptions).forEach(function (key) {
      var loweCaseOption = key.substr(0, 1).toLowerCase() + key.substr(1);

      if (loweCaseOption && typeof self.defaults[loweCaseOption] !== 'undefined') {
        pureDataOptions[loweCaseOption] = dataOptions[key];
      }
    });
    self.options = Object.assign({}, self.defaults, pureDataOptions, userOptions);
    self.pureOptions = Object.assign({}, self.options);
    self.init();
  }

  _createClass(GistSimple, [{
    key: "init",
    value: function init() {
      var self = this;
      var options = self.options;
      var url = "https://gist.github.com/".concat(options.id, ".json");
      var lines = options.lines;
      var data = {};

      if (options.file) {
        data.file = options.file;
      } // if the id doesn't exist, then ignore the code block


      if (!options.id) {
        self.insertContent('Gist ID is required');
        return;
      }

      var cacheUrl = url + options.file;
      var enableCache = options.enableCache || cache[cacheUrl]; // show preloader.

      self.insertContent(_icon_preloader_svg__WEBPACK_IMPORTED_MODULE_1___default.a);

      function successCallback(response) {
        // the html payload is in the div property
        if (response && response.div) {
          var stylesheet = response.stylesheet; // github returns /assets/embed-id.css now, but let's be sure about that

          if (stylesheet) {
            // github passes down html instead of a url for the stylesheet now
            // parse off the href
            if (stylesheet.indexOf('<link') === 0) {
              stylesheet = stylesheet.replace(/\\/g, '').match(/href="([^\s]*)"/);
              var _stylesheet = stylesheet;

              var _stylesheet2 = _slicedToArray(_stylesheet, 1);

              stylesheet = _stylesheet2[0];
            } else if (stylesheet.indexOf('http') !== 0) {
              // add leading slash if missing
              if (stylesheet.indexOf('/') !== 0) {
                stylesheet = "/".concat(stylesheet);
              }

              stylesheet = "https://gist.github.com".concat(stylesheet);
            }
          } // add the stylesheet if it does not exist


          self.addStyles(stylesheet); // reference to div

          var $responseDiv = $(response.div); // remove id for uniqueness constraints

          $responseDiv.removeAttr('id');
          self.insertContent($responseDiv); // highlight lines

          self.highlightLines(options.highlightLines); // show only specific lines

          self.showSpecificLines(lines, options.linesExpanded); // show caption

          self.showCaption(options.caption); // remove footer

          if (!options.showFooter) {
            self.removeFooter();
          } // remove line numbers


          if (!options.showLineNumbers) {
            self.removeLineNumbers();
          }
        } else {
          self.insertContent("Failed loading gist ".concat(url));
        }
      }

      function errorCallBack(textStatus) {
        self.insertContent("Failed loading gist ".concat(url, ": ").concat(textStatus));
      } // request the json version of this gist


      $.ajax({
        url: url,
        data: data,
        dataType: 'jsonp',
        timeout: 20000,
        beforeSend: function beforeSend() {
          // option to enable caching of the gists
          if (enableCache) {
            if (cache[cacheUrl]) {
              // loading the response from cache and preventing the ajax call
              cache[cacheUrl].then(function (response) {
                successCallback(response);
              }, function (errorStatus) {
                errorCallBack(errorStatus);
              });
              return false;
            } // saving the promise for the requested json as a proxy for the actual response


            cache[cacheUrl] = $.Deferred();
          }

          return true;
        },
        success: function success(response) {
          if (enableCache) {
            if (cache[cacheUrl]) {
              cache[cacheUrl].resolve(response);
            }
          }

          successCallback(response);
        },
        error: function error(jqXHR, textStatus) {
          errorCallBack(textStatus);
        }
      });
    }
  }, {
    key: "chunkBy",
    value: function chunkBy(items, predicate) {
      if (items.length === 0) {
        return [];
      }

      return items.slice(1).reduce(function (chunked, item) {
        if (predicate(item)) {
          chunked.push([item]);
        } else {
          chunked.push(chunked.pop().concat([item]));
        }

        return chunked;
      }, [items.slice(0, 1)]);
    }
  }, {
    key: "getLineNumbers",
    value: function getLineNumbers(lineRangeString) {
      var lineNumbers = [];
      var range;
      var lineNumberSections;

      if (typeof lineRangeString === 'number') {
        lineNumbers.push(lineRangeString);
      } else {
        lineNumberSections = lineRangeString.split(',');

        for (var i = 0; i < lineNumberSections.length; i++) {
          range = lineNumberSections[i].split('-');

          if (range.length === 2) {
            for (var j = parseInt(range[0], 10); j <= range[1]; j++) {
              lineNumbers.push(j);
            }
          } else if (range.length === 1) {
            lineNumbers.push(parseInt(range[0], 10));
          }
        }
      }

      return lineNumbers;
    } // add styles.

  }, {
    key: "addStyles",
    value: function addStyles(url) {
      if (url && !$("link[href=\"".concat(url, "\"]")).length) {
        $("<link type=\"text/css\" rel=\"stylesheet\" href=\"".concat(url, "\">")).appendTo('head');
      }
    } // insert content.

  }, {
    key: "insertContent",
    value: function insertContent(content) {
      this.$container.html(content);
    } // highlight lines.

  }, {
    key: "highlightLines",
    value: function highlightLines(lines) {
      if (!lines) {
        return;
      }

      var highlightLineNumbers = this.getLineNumbers(lines); // we need to set the line-data td to 100% so the highlight expands the whole line

      this.$container.find('td.line-data').css({
        width: '100%'
      }); // find all .js-file-line tds (actual code lines) that match the highlightLines and add the highlight class

      this.$container.find('.js-file-line').each(function (index) {
        if ($.inArray(index + 1, highlightLineNumbers) !== -1) {
          $(this).css({
            backgroundColor: 'rgb(255, 255, 204)'
          });
        }
      });
    } // show only specific lines.
    // value example: "2", "1-5", "1,4", "1,4,6-8"

  }, {
    key: "showSpecificLines",
    value: function showSpecificLines(lines, linesExpanded) {
      if (!lines) {
        return;
      }

      var lineNumbers = this.getLineNumbers(lines);
      var collapsableLineNumbers = []; // find all trs containing code lines that don't exist in the line param

      this.$container.find('.js-file-line').each(function (index) {
        if ($.inArray(index + 1, lineNumbers) === -1) {
          if (linesExpanded) {
            collapsableLineNumbers.push(index + 1);
            $(this).parent().hide();
          } else {
            $(this).parent().remove();
          }
        }
      }); // option to expand highlight lines and collapse hidden lines

      if (linesExpanded) {
        var collapsableBlocks = this.chunkBy(collapsableLineNumbers, function (line) {
          return !collapsableLineNumbers.includes(line - 1);
        });
        $.each(collapsableBlocks, function (index, block) {
          var firstLine = block[0];
          var lineBeforeFirstLine = firstLine - 1;
          var lastLine = block[block.length - 1];
          var collapsibleIcon = $('<a></<a>').attr('lines', block.join()).css({
            display: 'block',
            cursor: 'pointer'
          }).html(_icon_arrow_svg__WEBPACK_IMPORTED_MODULE_2___default.a).on('click', function (event) {
            event.preventDefault();
            $(this).closest('tr').remove();
            var that = $(this);
            $('table.highlight').find('tr:hidden td[data-line-number]').each(function () {
              var $element = $(this);
              lines = that.attr('lines').split(',');

              if ($.inArray($element.attr('data-line-number'), lines) === -1) {
                return;
              }

              $element.parent().show();
            });
          });
          var lineNumberElement = $("\n                    <td\n                        class=\"blob-num js-line-number collapsed\"\n                        style=\"background-color: #f9f9f9; color: #999; font-size: 12px; font-style: italic; text-align: center; padding-top: 5px !important; padding-bottom: 5px !important;\"\n                    ></td>\n                ").append(collapsibleIcon);
          var lineCodeElement = $("\n                    <td\n                        class=\"blob-code blob-code-inner js-file-line collapsed\"\n                        style=\"background-color: #f9f9f9; color: #999; font-size: 12px; font-style: italic; padding-top: 5px !important; padding-bottom: 5px !important;\"\n                    >\n                    ... Lines ".concat(firstLine, " - ").concat(lastLine, "\n                    </td>\n                "));
          var lineElement = $('<tr></tr>').append(lineNumberElement).append(lineCodeElement);
          this.$container.find(".js-line-number[data-line-number=".concat(lineBeforeFirstLine, "]")).parent().after(lineElement);
        });
      }
    } // show caption.

  }, {
    key: "showCaption",
    value: function showCaption(caption) {
      if (!caption) {
        return;
      }

      var tbody = this.$container.find('table tbody');
      var row = $('<tr></tr>');
      var captionColumn = $('<td></td>').attr('style', 'padding: 10px !important; border-bottom: 10px solid white; background-color: #f9f9f9; font-weight: bold;').html(caption);
      row.append($('<td style="background-color: #f9f9f9; border-bottom: 10px solid white;"></td>'));
      row.append(captionColumn);
      tbody.prepend(row);
    } // remove footer.

  }, {
    key: "removeFooter",
    value: function removeFooter() {
      this.$container.find('.gist-meta').remove(); // present a uniformed border when footer is hidden

      this.$container.find('.gist-data').css('border-bottom', '0px');
      this.$container.find('.gist-file').css('border-bottom', '1px solid #ddd');
    } // remove line numbers.

  }, {
    key: "removeLineNumbers",
    value: function removeLineNumbers() {
      this.$container.find('.js-line-number').remove();
    }
  }]);

  return GistSimple;
}(); // global definition


var plugin = function plugin(items) {
  // check for dom element
  // thanks: http://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
  if ((typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) === 'object' ? items instanceof HTMLElement : items && _typeof(items) === 'object' && items !== null && items.nodeType === 1 && typeof items.nodeName === 'string') {
    items = [items];
  }

  var options = arguments[1];
  var args = Array.prototype.slice.call(arguments, 2);
  var len = items.length;
  var k = 0;
  var ret;

  for (k; k < len; k++) {
    if (_typeof(options) === 'object' || typeof options === 'undefined') {
      if (!items[k].GistSimple) {
        // eslint-disable-next-line new-cap
        items[k].GistSimple = new GistSimple(items[k], options);
      }
    } else if (items[k].GistSimple) {
      // eslint-disable-next-line prefer-spread
      ret = items[k].GistSimple[options].apply(items[k].GistSimple, args);
    }

    if (typeof ret !== 'undefined') {
      return ret;
    }
  }

  return items;
};

plugin.constructor = GistSimple;
global__WEBPACK_IMPORTED_MODULE_0__["window"].GistSimple = GistSimple;

var jQueryPlugin = function jQueryPlugin() {
  var args = arguments || [];
  Array.prototype.unshift.call(args, this);
  var res = plugin.apply(global__WEBPACK_IMPORTED_MODULE_0__["window"], args);
  return _typeof(res) !== 'object' ? res : this;
};

jQueryPlugin.constructor = plugin.constructor; // no conflict

var oldJqPlugin = $.fn.gistsimple;
$.fn.gistsimple = jQueryPlugin;

$.fn.gistsimple.noConflict = function () {
  $.fn.gistsimple = oldJqPlugin;
  return this;
}; // init


$(function () {
  $('.gist-simple').gistsimple();
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var win;

if (typeof window !== "undefined") {
  win = window;
} else if (typeof global !== "undefined") {
  win = global;
} else if (typeof self !== "undefined") {
  win = self;
} else {
  win = {};
}

module.exports = win;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path fill=\"#333\" d=\"M364 28.6C420.7 57 459.6 94.4 485 151l-31.4 15c-20-41-63-84-104.6-104.5\"><animate attributeName=\"fill\" values=\"#333;#eee;#333;#333\" begin=\"0s\" dur=\"1s\" repeatCount=\"indefinite\"></animate></path><path fill=\"#333\" d=\"M494 169c20 60 21 114-1 172l-32.8-11.4c15-43.3 15-104 0-148\"><animate attributeName=\"fill\" values=\"#333;#eee;#333;#333\" begin=\"0.125s\" dur=\"1s\" repeatCount=\"indefinite\"></animate></path><path fill=\"#333\" d=\"M485.4 359.2c-28.3 56.6-65.8 95.5-122.4 121l-15.2-31.4c41.3-20 84.2-63 104.7-104.6\"><animate attributeName=\"fill\" values=\"#333;#eee;#333;#333\" begin=\"0.250s\" dur=\"1s\" repeatCount=\"indefinite\"></animate></path><path fill=\"#333\" d=\"M344.5 488.5c-60 20-114 21-172-1l11.4-33c43.2 15 104 15 148 0\"><animate attributeName=\"fill\" values=\"#333;#eee;#333;#333\" begin=\"0.375s\" dur=\"1s\" repeatCount=\"indefinite\"></animate></path><path fill=\"#333\" d=\"M154.3 482.8c-56.6-28.4-95.5-65.8-121-122.4l31.4-15.2c20 41.3 63 84.2 104.6 104.7\"><animate attributeName=\"fill\" values=\"#333;#eee;#333;#333\" begin=\"0.500s\" dur=\"1s\" repeatCount=\"indefinite\"></animate></path><path fill=\"#333\" d=\"M23.7 342.7c-20-60-21-114 1-172l33 11.4c-15 43.5-15 104 0 148\"><animate attributeName=\"fill\" values=\"#333;#eee;#333;#333\" begin=\"0.625s\" dur=\"1s\" repeatCount=\"indefinite\"></animate></path><path fill=\"#333\" d=\"M31.8 151C60 94.2 97.5 55.3 154 30l15.3 31.3c-41.2 20-84 63-104.6 104.6\"><animate attributeName=\"fill\" values=\"#333;#eee;#333;#333\" begin=\"0.750s\" dur=\"1s\" repeatCount=\"indefinite\"></animate></path><path fill=\"#333\" d=\"M173 21c60-20 114-21 172 1l-11.5 32.8c-43.3-15-104-15-148 0\"><animate attributeName=\"fill\" values=\"#333;#eee;#333;#333\" begin=\"0.875s\" dur=\"1s\" repeatCount=\"indefinite\"></animate></path><path fill=\"#eee\" d=\"M197 459v-48s-4-4-33-1c-28 3-62-66-65-69 24-10 43 26 65 38h31s3-44 20-37c17 6-72 1-97-61s19-126 20-115c0 9-17-35-10-46 20-24 50 11 69 15 5 0 18-8 59-7 41 0 55 8 60 6 22-10 51-32 65-17 10 12-1 61-1 49s43 81 6 132c-29 46-95 43-84 46 21 15 14 91 14 115l-22 4v-74c0-9-9-10-9-9v85l-21 1v-86h-10v86l-20-1v-83s-8-1-8 10v72\"></path></svg>"

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 44\" style=\"height: 15px; position: relative; top: 2px;\"><path fill=\"#bbb\" fill-rule=\"evenodd\" d=\"M8.0066 16.05305v-7.6523c0-.82422-.47656-1.0273-1.0586-.4414l-3.5117 3.5039c-1.8789 1.875-4.6953-.94142-2.8164-2.8164L8.7215.61564c.68359-.67579 1.8008-.6797 2.4922 0l8.1641 8.0312c1.8789 1.875-.9375 4.6914-2.8164 2.8164l-3.5078-3.5039c-.58984-.58985-1.0625-.38673-1.0625.4414v27.30827c0 .82031.47656 1.0273 1.0586.44141l3.5117-3.5039c1.8789-1.875 4.6953.9375 2.8164 2.8164l-8.1016 8.0273c-.6836.6797-1.8008.6797-2.4922 0l-8.1641-8.0273c-1.8789-1.8789.9375-4.6914 2.8164-2.8164l3.5078 3.5039c.58984.58984 1.0625.38672 1.0625-.4414V16.05304z\"></path></svg>"

/***/ })
/******/ ]);