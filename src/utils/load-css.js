/**
 * Load CSS with callback
 */
const LOADED_FLAG = '__gist_simple_css_loaded__';

export default function loadCSS(url, callback, doc = document) {
  // Already exists.
  let el = doc.body.querySelector(`link[href="${url}"]`);

  if (!el) {
    el = doc.createElement('link');

    el.href = url;
    el.rel = 'stylesheet';
    el.type = 'text/css';

    doc.head.appendChild(el);
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
