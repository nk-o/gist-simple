import domReady from './utils/ready';
import global from './utils/global';
import gistSimple from './core';

const $ = global.jQuery;

// jQuery support
if (typeof $ !== 'undefined') {
  const $Plugin = function (...args) {
    Array.prototype.unshift.call(args, this);
    const res = gistSimple.apply(global, args);
    return typeof res !== 'object' ? res : this;
  };
  $Plugin.constructor = gistSimple.constructor;

  // no conflict
  const old$Plugin = $.fn.gistSimple;
  $.fn.gistSimple = $Plugin;
  $.fn.gistSimple.noConflict = function () {
    $.fn.gistSimple = old$Plugin;
    return this;
  };
}

// dom ready initialization
domReady(() => {
  gistSimple(document.querySelectorAll('.gist-simple[data-id]'));
});

export default gistSimple;
