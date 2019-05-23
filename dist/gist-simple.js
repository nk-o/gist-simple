/*!
 * Name    : Gist Simple - jQuery Gist Loader
 * Version : 1.0.1
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
      onInit: null,
      // () => {}
      onInitEnd: null,
      // () => {}
      onDestroy: null,
      // () => {}
      onDestroyEnd: null,
      // () => {}
      onAjaxBeforeSend: null,
      // () => {}
      onAjaxSuccess: null,
      // (response) => {}
      onAjaxLoaded: null // () => {}

    }; // prepare data-options

    var dataOptions = self.$container[0].dataset || {};
    var pureDataOptions = {};
    Object.keys(dataOptions).forEach(function (key) {
      var loweCaseOption = key.substr(0, 1).toLowerCase() + key.substr(1);

      if (loweCaseOption && typeof self.defaults[loweCaseOption] !== 'undefined') {
        pureDataOptions[loweCaseOption] = dataOptions[key];
      }
    });
    self.options = Object.assign({}, self.defaults, pureDataOptions, userOptions);
    self.pureOptions = Object.assign({}, self.options); // convert strings options to boolean

    ['linesExpanded', 'showFooter', 'showLineNumbers', 'enableCache'].forEach(function (item) {
      if (self.options[item] === 'true') {
        self.options[item] = true;
      } else if (self.options[item] === 'false') {
        self.options[item] = false;
      }
    });
    self.init();
  }

  _createClass(GistSimple, [{
    key: "init",
    value: function init() {
      var self = this;
      var options = self.options;
      var url = "https://gist.github.com/".concat(options.id, ".json");
      var lines = options.lines;
      var data = {}; // call onInit event

      if (self.options.onInit) {
        self.options.onInit.call(self);
      }

      if (options.file) {
        data.file = options.file;
      }

      self.$container.addClass('gist-simple'); // if the id doesn't exist, then ignore the code block

      if (!options.id) {
        self.insertContent('Gist ID is required', true);
        return;
      }

      var cacheUrl = url + options.file;
      var enableCache = options.enableCache || cache[cacheUrl]; // show preloader.

      self.insertContent(_icon_preloader_svg__WEBPACK_IMPORTED_MODULE_1___default.a, true);

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
          } // call onAjaxLoaded event


          if (self.options.onAjaxLoaded) {
            self.options.onAjaxLoaded.call(self, response);
          }
        } else {
          self.insertContent("Failed loading gist ".concat(url), true);
        }
      }

      function errorCallBack(textStatus) {
        self.insertContent("Failed loading gist ".concat(url, ": ").concat(textStatus), true);
      } // request the json version of this gist


      $.ajax({
        url: url,
        data: data,
        dataType: 'jsonp',
        timeout: 20000,
        beforeSend: function beforeSend() {
          // call onAjaxBeforeSend event
          if (self.options.onAjaxBeforeSend) {
            self.options.onAjaxBeforeSend.call(self);
          } // option to enable caching of the gists


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
          // call onAjaxSuccess event
          if (self.options.onAjaxSuccess) {
            self.options.onAjaxSuccess.call(self, response);
          }

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
      }); // call onInitEnd event

      if (self.options.onInitEnd) {
        self.options.onInitEnd.call(self);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var self = this; // call onDestroy event

      if (self.options.onDestroy) {
        self.options.onDestroy.call(self);
      } // remove content


      self.$container.html(''); // delete GistSimple instance from container

      delete self.$container[0].GistSimple; // call onDestroyEnd event

      if (self.options.onDestroyEnd) {
        self.options.onDestroyEnd.call(self);
      }
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
      var wrapper = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (wrapper) {
        content = $('<div class="gist-simple-wrap">').html(content);
      }

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

module.exports = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M28.4375 2.23438C32.8672 4.45312 35.9063 7.375 37.8906 11.7969L35.4375 12.9687C33.875 9.76562 30.5156 6.40625 27.2656 4.80469\" fill=\"#eee\"><animate attributeName=\"fill\" values=\"#eee;#999;#eee;#eee\" begin=\"0s\" dur=\"0.875s\" repeatCount=\"indefinite\"></animate></path><path d=\"M38.5937 13.2031C40.1562 17.8906 40.2344 22.1094 38.5156 26.6406L35.9531 25.75C37.125 22.3672 37.125 17.625 35.9531 14.1875\" fill=\"#eee\"><animate attributeName=\"fill\" values=\"#eee;#999;#eee;#eee\" begin=\"0.125s\" dur=\"0.875s\" repeatCount=\"indefinite\"></animate></path><path d=\"M37.9219 28.0625C35.7109 32.4844 32.7813 35.5234 28.3594 37.5156L27.1719 35.0625C30.3984 33.5 33.75 30.1406 35.3516 26.8906\" fill=\"#eee\"><animate attributeName=\"fill\" values=\"#eee;#999;#eee;#eee\" begin=\"0.250s\" dur=\"0.875s\" repeatCount=\"indefinite\"></animate></path><path d=\"M26.9141 38.1641C22.2266 39.7266 18.0078 39.8047 13.4766 38.0859L14.3672 35.5078C17.7422 36.6797 22.4922 36.6797 25.9297 35.5078\" fill=\"#eee\"><animate attributeName=\"fill\" values=\"#eee;#999;#eee;#eee\" begin=\"0.375s\" dur=\"0.875s\" repeatCount=\"indefinite\"></animate></path><path d=\"M12.0547 37.7187C7.63281 35.5 4.59375 32.5781 2.60156 28.1562L5.05469 26.9688C6.61719 30.1953 9.97656 33.5469 13.2266 35.1484\" fill=\"#eee\"><animate attributeName=\"fill\" values=\"#eee;#999;#eee;#eee\" begin=\"0.500s\" dur=\"0.875s\" repeatCount=\"indefinite\"></animate></path><path d=\"M1.85156 26.7734C0.289062 22.0859 0.210938 17.8672 1.92969 13.3359L4.50781 14.2266C3.33594 17.625 3.33594 22.3516 4.50781 25.7891\" fill=\"#eee\"><animate attributeName=\"fill\" values=\"#eee;#999;#eee;#eee\" begin=\"0.625s\" dur=\"0.875s\" repeatCount=\"indefinite\"></animate></path><path d=\"M2.48438 11.7969C4.6875 7.35938 7.61719 4.32031 12.0312 2.34375L13.2266 4.78906C10.0078 6.35156 6.66406 9.71094 5.05469 12.9609\" fill=\"#eee\"><animate attributeName=\"fill\" values=\"#eee;#999;#eee;#eee\" begin=\"0.750s\" dur=\"0.875s\" repeatCount=\"indefinite\"></animate></path><path d=\"M13.5156 1.64062C18.2031 0.078125 22.4219 0 26.9531 1.71875L26.0547 4.28125C22.6719 3.10937 17.9297 3.10937 14.4922 4.28125\" fill=\"#eee\"><animate attributeName=\"fill\" values=\"#eee;#999;#eee;#eee\" begin=\"0.875s\" dur=\"0.875s\" repeatCount=\"indefinite\"></animate></path><path d=\"M15.3906 35.8594V32.1094C15.3906 32.1094 15.0781 31.7969 12.8125 32.0313C10.625 32.2656 7.96875 26.875 7.73438 26.6406C9.60938 25.8594 11.0938 28.6719 12.8125 29.6094H15.2344C15.2344 29.6094 15.4688 26.1719 16.7969 26.7188C18.125 27.1875 11.1719 26.7969 9.21875 21.9531C7.26562 17.1094 10.7031 12.1094 10.7812 12.9688C10.7812 13.6719 9.45312 10.2344 10 9.375C11.5625 7.5 13.9062 10.2344 15.3906 10.5469C15.7812 10.5469 16.7969 9.92188 20 10C23.2031 10 24.2969 10.625 24.6875 10.4688C26.4062 9.6875 28.6719 7.96875 29.7656 9.14063C30.5469 10.0781 29.6875 13.9063 29.6875 12.9688C29.6875 12.0313 33.0469 19.2969 30.1562 23.2813C27.8906 26.875 22.7344 26.6406 23.5938 26.875C25.2344 28.0469 24.6875 33.9844 24.6875 35.8594L22.9688 36.1719V30.3906C22.9688 29.6875 22.2656 29.6094 22.2656 29.6875V36.3281L20.625 36.4063V29.6875H19.8438V36.4063L18.2812 36.3281V29.8438C18.2812 29.8438 17.6562 29.7656 17.6562 30.625V36.25\" fill=\"#eee\"></path></svg>"

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 44\" style=\"height: 15px; position: relative; top: 2px;\"><path fill=\"#bbb\" fill-rule=\"evenodd\" d=\"M8.0066 16.05305v-7.6523c0-.82422-.47656-1.0273-1.0586-.4414l-3.5117 3.5039c-1.8789 1.875-4.6953-.94142-2.8164-2.8164L8.7215.61564c.68359-.67579 1.8008-.6797 2.4922 0l8.1641 8.0312c1.8789 1.875-.9375 4.6914-2.8164 2.8164l-3.5078-3.5039c-.58984-.58985-1.0625-.38673-1.0625.4414v27.30827c0 .82031.47656 1.0273 1.0586.44141l3.5117-3.5039c1.8789-1.875 4.6953.9375 2.8164 2.8164l-8.1016 8.0273c-.6836.6797-1.8008.6797-2.4922 0l-8.1641-8.0273c-1.8789-1.8789.9375-4.6914 2.8164-2.8164l3.5078 3.5039c.58984.58984 1.0625.38672 1.0625-.4414V16.05304z\"></path></svg>"

/***/ })
/******/ ]);