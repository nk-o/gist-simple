/**
 * Load JSONP url with callback.
 *
 * @thanks https://gist.github.com/gf3/132080/110d1b68d7328d7bfe7e36617f7df85679a08968
 */
const NAME_FLAG = '__gist_simple_jsonp__';

export default function loadJSONP(url, params) {
  const { data = {}, beforeSend, success } = params;

  window[NAME_FLAG] = (window[NAME_FLAG] || 0) + 1;

  // Add callback function name.
  data.callback = `${NAME_FLAG}_cb_${window[NAME_FLAG]}`;

  // Add params to URL.
  Object.keys(data).forEach((k) => {
    if (url.match(/\?/)) {
      url += `&${k}=${data[k]}`;
    } else {
      url += `?${k}=${data[k]}`;
    }
  });

  if (beforeSend && !beforeSend()) {
    return;
  }

  // Create script
  let script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;

  // Setup handler
  window[data.callback] = function (response) {
    success.call(window, response);
    document.head.removeChild(script);
    script = null;
    delete window[data.callback];
  };

  // Load JSON
  document.head.appendChild(script);
}
