import extend from './utils/extend';
import Deferred from './utils/deferred';
import loadJSONP from './utils/load-jsonp';
import loadCSS from './utils/load-css';
import iconPreloader from './icons/preloader.svg';
import iconArrow from './icons/arrow.svg';
import defaults from './defaults';

const cache = {};
let instanceID = 0;

// Gist Simple class
class GistSimple {
  constructor(container, userOptions) {
    const self = this;

    self.instanceID = instanceID;

    instanceID += 1;

    self.$container = container;

    self.defaults = { ...defaults };

    // prepare data-options
    const dataOptions = self.$container.dataset || {};
    const pureDataOptions = {};
    Object.keys(dataOptions).forEach((key) => {
      if (key && typeof self.defaults[key] !== 'undefined') {
        pureDataOptions[key] = dataOptions[key];
      }
    });

    self.options = extend({}, self.defaults, pureDataOptions, userOptions);
    self.pureOptions = extend({}, self.options);

    // prepare 'true' and 'false' strings to boolean
    Object.keys(self.options).forEach((key) => {
      if (self.options[key] === 'true') {
        self.options[key] = true;
      } else if (self.options[key] === 'false') {
        self.options[key] = false;
      }
    });

    self.init();
  }

  init() {
    const self = this;
    const { options } = self;
    const url = `https://gist.github.com/${options.id}.json`;
    const { lines } = options;
    const data = {};

    // call onInit event
    if (self.options.onInit) {
      self.options.onInit.call(self);
    }

    if (options.file) {
      data.file = options.file;
    }

    self.$container.classList.add('gist-simple');

    // if the id doesn't exist, then ignore the code block
    if (!options.id) {
      self.insertContent('Gist ID is required', true);
      return;
    }

    const cacheUrl = url + options.file;
    const enableCache = options.enableCache || cache[cacheUrl];

    // show preloader.
    self.insertContent(iconPreloader, true);

    function insertGist(response) {
      // reference to div
      const $responseDiv = document.createElement('div');
      $responseDiv.innerHTML = response.div;

      // remove id for uniqueness constraints
      if ($responseDiv.firstChild) {
        $responseDiv.firstChild.removeAttribute('id');
      }

      self.insertContent($responseDiv.innerHTML);

      // highlight lines
      self.highlightLines(options.highlightLines);

      // show only specific lines
      self.showSpecificLines(lines, options.linesExpanded);

      // show caption
      self.showCaption(options.caption);

      // remove footer
      if (!options.showFooter) {
        self.removeFooter();
      }

      // remove line numbers
      if (!options.showLineNumbers) {
        self.removeLineNumbers();
      }

      // call onAjaxLoaded event
      if (self.options.onAjaxLoaded) {
        self.options.onAjaxLoaded.call(self, response);
      }
    }

    function successCallback(response) {
      // the html payload is in the div property
      if (response && response.div) {
        let { stylesheet } = response;

        // github returns /assets/embed-id.css now, but let's be sure about that
        if (stylesheet) {
          // github passes down html instead of a url for the stylesheet now
          // parse off the href
          if (stylesheet.indexOf('<link') === 0) {
            stylesheet = stylesheet.replace(/\\/g, '').match(/href="([^\s]*)"/);
            [stylesheet] = stylesheet;
          } else if (stylesheet.indexOf('http') !== 0) {
            // add leading slash if missing
            if (stylesheet.indexOf('/') !== 0) {
              stylesheet = `/${stylesheet}`;
            }
            stylesheet = `https://gist.github.com${stylesheet}`;
          }

          // Insert gist only after CSS loaded.
          loadCSS(stylesheet, () => {
            insertGist(response);
          });
        } else {
          insertGist(response);
        }
      } else {
        self.insertContent(`Failed loading gist ${url}`, true);
      }
    }

    function errorCallBack(textStatus) {
      self.insertContent(`Failed loading gist ${url}: ${textStatus}`, true);
    }

    // request the json version of this gist
    loadJSONP(url, {
      data,
      beforeSend() {
        // call onAjaxBeforeSend event
        if (self.options.onAjaxBeforeSend) {
          self.options.onAjaxBeforeSend.call(self);
        }

        // option to enable caching of the gists
        if (enableCache) {
          if (cache[cacheUrl]) {
            // Cached response.
            if (cache[cacheUrl].div) {
              successCallback(cache[cacheUrl]);

              return false;
            }

            // loading the response from cache and preventing the ajax call
            cache[cacheUrl].done((response) => {
              successCallback(response);
            });
            cache[cacheUrl].fail((errorStatus) => {
              errorCallBack(errorStatus);
            });

            return false;
          }

          // saving the promise for the requested json as a proxy for the actual response
          cache[cacheUrl] = new Deferred();
        }
        return true;
      },
      success(response) {
        // call onAjaxSuccess event
        if (self.options.onAjaxSuccess) {
          self.options.onAjaxSuccess.call(self, response);
        }

        if (enableCache) {
          if (cache[cacheUrl] && cache[cacheUrl].resolve) {
            cache[cacheUrl].resolve(response);
            cache[cacheUrl] = response;
          }
        }

        successCallback(response);
      },
      error(textStatus) {
        errorCallBack(textStatus);
      },
    });

    // call onInitEnd event
    if (self.options.onInitEnd) {
      self.options.onInitEnd.call(self);
    }
  }

  destroy() {
    const self = this;

    // call onDestroy event
    if (self.options.onDestroy) {
      self.options.onDestroy.call(self);
    }

    // remove content
    self.$container.innerHTML = '';

    // delete GistSimple instance from container
    delete self.$container.GistSimple;

    // call onDestroyEnd event
    if (self.options.onDestroyEnd) {
      self.options.onDestroyEnd.call(self);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  chunkBy(items, predicate) {
    if (items.length === 0) {
      return [];
    }

    return items.slice(1).reduce(
      (chunked, item) => {
        if (predicate(item)) {
          chunked.push([item]);
        } else {
          chunked.push(chunked.pop().concat([item]));
        }

        return chunked;
      },
      [items.slice(0, 1)]
    );
  }

  // eslint-disable-next-line class-methods-use-this
  getLineNumbers(lineRangeString) {
    const lineNumbers = [];
    let range;
    let lineNumberSections;

    if (typeof lineRangeString === 'number') {
      lineNumbers.push(lineRangeString);
    } else {
      lineNumberSections = lineRangeString.split(',');

      for (let i = 0; i < lineNumberSections.length; i += 1) {
        range = lineNumberSections[i].split('-');
        if (range.length === 2) {
          for (let j = parseInt(range[0], 10); j <= range[1]; j += 1) {
            lineNumbers.push(j);
          }
        } else if (range.length === 1) {
          lineNumbers.push(parseInt(range[0], 10));
        }
      }
    }
    return lineNumbers;
  }

  // insert content.
  insertContent(content, wrapper = false) {
    if (wrapper) {
      content = `<div class="gist-simple-wrap">${content}</div>`;
    }

    this.$container.innerHTML = content;
  }

  // highlight lines.
  highlightLines(lines) {
    if (!lines) {
      return;
    }
    const highlightLineNumbers = this.getLineNumbers(lines);

    // we need to set the line-data td to 100% so the highlight expands the whole line
    this.$container.querySelectorAll('td.line-data').forEach((el) => {
      el.style.width = '100%';
    });

    // find all .js-file-line tds (actual code lines) that match the highlightLines and add the highlight class
    this.$container.querySelectorAll('.js-file-line').forEach((el, index) => {
      if (highlightLineNumbers.indexOf(index + 1) !== -1) {
        el.style.backgroundColor = 'rgb(255, 255, 204)';
      }
    });
  }

  // show only specific lines.
  // value example: "2", "1-5", "1,4", "1,4,6-8"
  showSpecificLines(lines, linesExpanded) {
    if (!lines) {
      return;
    }

    const lineNumbers = this.getLineNumbers(lines);
    const collapsableLineNumbers = [];

    // find all trs containing code lines that don't exist in the line param
    this.$container.querySelectorAll('.js-file-line').forEach((el, index) => {
      if (lineNumbers.indexOf(index + 1) === -1) {
        if (linesExpanded) {
          collapsableLineNumbers.push(index + 1);

          el.parentNode.style.display = 'none';
        } else {
          el.parentNode.remove();
        }
      }
    });

    // option to expand highlight lines and collapse hidden lines
    if (linesExpanded) {
      const collapsableBlocks = this.chunkBy(
        collapsableLineNumbers,
        (line) => !collapsableLineNumbers.includes(line - 1)
      );

      collapsableBlocks.forEach((block) => {
        const firstLine = block[0];
        const lineBeforeFirstLine = firstLine - 1;
        const lastLine = block[block.length - 1];

        const $collapsibleIcon = document.createElement('a');
        $collapsibleIcon.setAttribute('lines', block.join());
        $collapsibleIcon.style.display = 'block';
        $collapsibleIcon.style.cursor = 'pointer';
        $collapsibleIcon.innerHTML = iconArrow;

        $collapsibleIcon.addEventListener('click', (event) => {
          event.preventDefault();

          $collapsibleIcon
            .closest('table.highlight')
            .querySelectorAll('tr[style*="display: none"] td[data-line-number]')
            .forEach(function ($element) {
              const foundLines = $collapsibleIcon.getAttribute('lines').split(',');
              const lineNumber = $element.getAttribute('data-line-number');

              if (foundLines.indexOf(lineNumber) === -1) {
                return;
              }

              $element.parentNode.style.display = '';
            });

          $collapsibleIcon.closest('tr').remove();
        });

        const lineNumberElement = `
          <td
            class="blob-num js-line-number collapsed"
            style="background-color: #f9f9f9; color: #999; font-size: 12px; font-style: italic; text-align: center; padding-top: 5px !important; padding-bottom: 5px !important;"
          ><!-- Icon Here --></td>
        `;

        const lineCodeElement = `
          <td
            class="blob-code blob-code-inner js-file-line collapsed"
            style="background-color: #f9f9f9; color: #999; font-size: 12px; font-style: italic; padding-top: 5px !important; padding-bottom: 5px !important;"
          >... Lines ${firstLine} - ${lastLine}</td>
        `;

        const $lineElement = document.createElement('tr');
        $lineElement.innerHTML = lineNumberElement + lineCodeElement;
        $lineElement.querySelector('td:first-child').append($collapsibleIcon);

        const $line = this.$container.querySelector(
          `.js-line-number[data-line-number="${
            lineBeforeFirstLine === 0 ? 1 : lineBeforeFirstLine
          }"]`
        );

        if ($line) {
          if (lineBeforeFirstLine === 0) {
            $line.parentElement.before($lineElement);
          } else {
            $line.parentElement.after($lineElement);
          }
        }
      });
    }
  }

  // show caption.
  showCaption(caption) {
    if (!caption) {
      return;
    }

    const tbody = this.$container.querySelector('table tbody');
    const $row = document.createElement('tr');
    const $captionColumn = document.createElement('td');

    $captionColumn.setAttribute(
      'style',
      'padding: 10px !important; border-bottom: 10px solid white; background-color: #f9f9f9; font-weight: bold;'
    );
    $captionColumn.innerHTML = caption;

    const $rowBorder = document.createElement('td');
    $rowBorder.setAttribute('style', 'background-color: #f9f9f9; border-bottom: 10px solid white;');

    $row.append($rowBorder);
    $row.append($captionColumn);
    tbody.prepend($row);
  }

  // remove footer.
  removeFooter() {
    this.$container.querySelector('.gist-meta').remove();

    // present a uniformed border when footer is hidden
    this.$container.querySelector('.gist-data').style.borderBottom = '0px';
    this.$container.querySelector('.gist-file').style.borderBottom = '1px solid #ddd';
  }

  // remove line numbers.
  removeLineNumbers() {
    this.$container.querySelectorAll('.js-line-number').forEach((el) => {
      el.remove();
    });
    this.$container.querySelector('table.highlight').style.width = '100%';
  }
}

// global definition
const gistSimple = function (items, options, ...args) {
  // check for dom element
  // thanks: http://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
  if (
    typeof HTMLElement === 'object'
      ? items instanceof HTMLElement
      : items &&
        typeof items === 'object' &&
        items !== null &&
        items.nodeType === 1 &&
        typeof items.nodeName === 'string'
  ) {
    items = [items];
  }

  const len = items.length;
  let k = 0;
  let ret;

  for (k; k < len; k += 1) {
    if (typeof options === 'object' || typeof options === 'undefined') {
      if (!items[k].GistSimple) {
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
gistSimple.constructor = GistSimple;

export default gistSimple;