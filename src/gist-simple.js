import { window } from 'global';

import iconPreloader from './icon-preloader.svg';
import iconArrow from './icon-arrow.svg';

const $ = window.jQuery;
const cache = {};
let instanceID = 0;

class GistSimple {
    constructor(container, userOptions) {
        const self = this;

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
        };

        // prepare data-options
        const dataOptions = self.$item.dataset || {};
        const pureDataOptions = {};
        Object.keys(dataOptions).forEach((key) => {
            const loweCaseOption = key.substr(0, 1).toLowerCase() + key.substr(1);
            if (loweCaseOption && typeof self.defaults[loweCaseOption] !== 'undefined') {
                pureDataOptions[loweCaseOption] = dataOptions[key];
            }
        });

        self.options = Object.assign({}, self.defaults, pureDataOptions, userOptions);
        self.pureOptions = Object.assign({}, self.options);

        self.init();
    }

    init() {
        const self = this;
        const { options } = self;
        const url = `https://gist.github.com/${options.id}.json`;
        const { lines } = options;
        const data = {};

        if (options.file) {
            data.file = options.file;
        }

        // if the id doesn't exist, then ignore the code block
        if (!options.id) {
            self.insertContent('Gist ID is required');
            return;
        }

        const cacheUrl = url + options.file;
        const enableCache = options.enableCache || cache[cacheUrl];

        // show preloader.
        self.insertContent(iconPreloader);

        function successCallback(response) {
            // the html payload is in the div property
            if (response && response.div) {
                let { stylesheet } = response;

                // github returns /assets/embed-id.css now, but let's be sure about that
                if (stylesheet) {
                    // github passes down html instead of a url for the stylesheet now
                    // parse off the href
                    if (stylesheet.indexOf('<link') === 0) {
                        stylesheet = stylesheet
                            .replace(/\\/g, '')
                            .match(/href="([^\s]*)"/);
                        [stylesheet] = stylesheet;
                    } else if (stylesheet.indexOf('http') !== 0) {
                        // add leading slash if missing
                        if (stylesheet.indexOf('/') !== 0) {
                            stylesheet = `/${stylesheet}`;
                        }
                        stylesheet = `https://gist.github.com${stylesheet}`;
                    }
                }

                // add the stylesheet if it does not exist
                self.addStyles(stylesheet);

                // reference to div
                const $responseDiv = $(response.div);

                // remove id for uniqueness constraints
                $responseDiv.removeAttr('id');

                self.insertContent($responseDiv);

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
            } else {
                self.insertContent(`Failed loading gist ${url}`);
            }
        }

        function errorCallBack(textStatus) {
            self.insertContent(`Failed loading gist ${url}: ${textStatus}`);
        }

        // request the json version of this gist
        $.ajax({
            url,
            data,
            dataType: 'jsonp',
            timeout: 20000,
            beforeSend() {
                // option to enable caching of the gists
                if (enableCache) {
                    if (cache[cacheUrl]) {
                        // loading the response from cache and preventing the ajax call
                        cache[cacheUrl].then(
                            (response) => {
                                successCallback(response);
                            },
                            (errorStatus) => {
                                errorCallBack(errorStatus);
                            },
                        );
                        return false;
                    }

                    // saving the promise for the requested json as a proxy for the actual response
                    cache[cacheUrl] = $.Deferred();
                }
                return true;
            },
            success(response) {
                if (enableCache) {
                    if (cache[cacheUrl]) {
                        cache[cacheUrl].resolve(response);
                    }
                }
                successCallback(response);
            },
            error(jqXHR, textStatus) {
                errorCallBack(textStatus);
            },
        });
    }

    chunkBy(items, predicate) {
        if (items.length === 0) {
            return [];
        }

        return items.slice(1).reduce((chunked, item) => {
            if (predicate(item)) {
                chunked.push([item]);
            } else {
                chunked.push(chunked.pop().concat([item]));
            }

            return chunked;
        }, [items.slice(0, 1)]);
    }

    getLineNumbers(lineRangeString) {
        const lineNumbers = [];
        let range;
        let lineNumberSections;

        if (typeof lineRangeString === 'number') {
            lineNumbers.push(lineRangeString);
        } else {
            lineNumberSections = lineRangeString.split(',');

            for (let i = 0; i < lineNumberSections.length; i++) {
                range = lineNumberSections[i].split('-');
                if (range.length === 2) {
                    for (let j = parseInt(range[0], 10); j <= range[1]; j++) {
                        lineNumbers.push(j);
                    }
                } else if (range.length === 1) {
                    lineNumbers.push(parseInt(range[0], 10));
                }
            }
        }
        return lineNumbers;
    }

    // add styles.
    addStyles(url) {
        if (url && !$(`link[href="${url}"]`).length) {
            $(`<link type="text/css" rel="stylesheet" href="${url}">`).appendTo('head');
        }
    }

    // insert content.
    insertContent(content) {
        this.$container.html(content);
    }

    // highlight lines.
    highlightLines(lines) {
        if (!lines) {
            return;
        }
        const highlightLineNumbers = this.getLineNumbers(lines);

        // we need to set the line-data td to 100% so the highlight expands the whole line
        this.$container.find('td.line-data').css({
            width: '100%',
        });

        // find all .js-file-line tds (actual code lines) that match the highlightLines and add the highlight class
        this.$container.find('.js-file-line').each(function (index) {
            if ($.inArray(index + 1, highlightLineNumbers) !== -1) {
                $(this).css({
                    backgroundColor: 'rgb(255, 255, 204)',
                });
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
        this.$container.find('.js-file-line').each(function (index) {
            if (($.inArray(index + 1, lineNumbers)) === -1) {
                if (linesExpanded) {
                    collapsableLineNumbers.push(index + 1);
                    $(this).parent().hide();
                } else {
                    $(this).parent().remove();
                }
            }
        });

        // option to expand highlight lines and collapse hidden lines
        if (linesExpanded) {
            const collapsableBlocks = this.chunkBy(collapsableLineNumbers, line => !collapsableLineNumbers.includes(line - 1));

            $.each(collapsableBlocks, function (index, block) {
                const firstLine = block[0];
                const lineBeforeFirstLine = firstLine - 1;
                const lastLine = block[block.length - 1];

                const collapsibleIcon = $('<a></<a>')
                    .attr('lines', block.join())
                    .css({
                        display: 'block',
                        cursor: 'pointer',
                    })
                    .html(iconArrow)
                    .on('click', function (event) {
                        event.preventDefault();
                        $(this).closest('tr').remove();
                        const that = $(this);
                        $('table.highlight').find('tr:hidden td[data-line-number]').each(function () {
                            const $element = $(this);
                            lines = that.attr('lines').split(',');

                            if (($.inArray($element.attr('data-line-number'), lines)) === -1) {
                                return;
                            }

                            $element.parent().show();
                        });
                    });

                const lineNumberElement = $(`
                    <td
                        class="blob-num js-line-number collapsed"
                        style="background-color: #f9f9f9; color: #999; font-size: 12px; font-style: italic; text-align: center; padding-top: 5px !important; padding-bottom: 5px !important;"
                    ></td>
                `)
                    .append(collapsibleIcon);

                const lineCodeElement = $(`
                    <td
                        class="blob-code blob-code-inner js-file-line collapsed"
                        style="background-color: #f9f9f9; color: #999; font-size: 12px; font-style: italic; padding-top: 5px !important; padding-bottom: 5px !important;"
                    >
                    ... Lines ${firstLine} - ${lastLine}
                    </td>
                `);

                const lineElement = $('<tr></tr>')
                    .append(lineNumberElement)
                    .append(lineCodeElement);

                this.$container.find(`.js-line-number[data-line-number=${lineBeforeFirstLine}]`).parent().after(lineElement);
            });
        }
    }

    // show caption.
    showCaption(caption) {
        if (!caption) {
            return;
        }

        const tbody = this.$container.find('table tbody');
        const row = $('<tr></tr>');
        const captionColumn = $('<td></td>')
            .attr('style', 'padding: 10px !important; border-bottom: 10px solid white; background-color: #f9f9f9; font-weight: bold;')
            .html(caption);

        row.append($('<td style="background-color: #f9f9f9; border-bottom: 10px solid white;"></td>'));
        row.append(captionColumn);
        tbody.prepend(row);
    }

    // remove footer.
    removeFooter() {
        this.$container.find('.gist-meta').remove();

        // present a uniformed border when footer is hidden
        this.$container.find('.gist-data').css('border-bottom', '0px');
        this.$container.find('.gist-file').css('border-bottom', '1px solid #ddd');
    }

    // remove line numbers.
    removeLineNumbers() {
        this.$container.find('.js-line-number').remove();
    }
}

// global definition
const plugin = function (items) {
    // check for dom element
    // thanks: http://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
    if (typeof HTMLElement === 'object' ? items instanceof HTMLElement : items && typeof items === 'object' && items !== null && items.nodeType === 1 && typeof items.nodeName === 'string') {
        items = [items];
    }

    const options = arguments[1];
    const args = Array.prototype.slice.call(arguments, 2);
    const len = items.length;
    let k = 0;
    let ret;

    for (k; k < len; k++) {
        if (typeof options === 'object' || typeof options === 'undefined') {
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

window.GistSimple = GistSimple;

const jQueryPlugin = function () {
    const args = arguments || [];
    Array.prototype.unshift.call(args, this);
    const res = plugin.apply(window, args);
    return typeof res !== 'object' ? res : this;
};
jQueryPlugin.constructor = plugin.constructor;

// no conflict
const oldJqPlugin = $.fn.gistsimple;
$.fn.gistsimple = jQueryPlugin;
$.fn.gistsimple.noConflict = function () {
    $.fn.gistsimple = oldJqPlugin;
    return this;
};

// init
$(() => {
    $('.gist-simple').gistsimple();
});
