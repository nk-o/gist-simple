/**
 * Load CSS with callback
 */
const LOADED_FLAG = '__gist_simple_css_loaded__';

export default function loadCSS(url, callback) {
  // Already exists.
  let el = document.body.querySelector(`link[href="${url}"]`);

  if (!el) {
    el = document.createElement('link');

    el.href = url;
    el.rel = 'stylesheet';
    el.type = 'text/css';

    document.head.appendChild(el);
  }

  if (callback) {
    // Is loaded already.
    if (el[LOADED_FLAG]) {
      callback(el);
      return;
    }

    // Add listener.
    el.addEventListener(
      'load',
      () => {
        el[LOADED_FLAG] = true;

        callback(el);
      },
      false
    );
  }
}
