## Gist Simple <!-- omit in toc -->
JS for Gist code block loading.

## [Demo](https://codepen.io/_nK/pen/KLQZqr) <!-- omit in toc -->

## Table of Contents <!-- omit in toc -->

- [Import Gist Simple](#import-gist-simple)
  - [ESM](#esm)
  - [ESM CDN](#esm-cdn)
  - [UMD](#umd)
  - [UMD CDN](#umd-cdn)
  - [CJS (Bundlers like Webpack)](#cjs-bundlers-like-webpack)
- [Call the plugin](#call-the-plugin)
  - [A. Data attribute way](#a-data-attribute-way)
  - [B. JavaScript way](#b-javascript-way)
  - [C. jQuery way](#c-jquery-way)
- [Options](#options)
- [For Developers](#for-developers)


## Import Gist Simple

Use one of the following examples to import Gist Simple.

### ESM

We provide a version of Gist Simple built as ESM (gist-simple.esm.js and gist-simple.esm.min.js) which allows you to use Gist Simple as a module in your browser, if your [targeted browsers support it](https://caniuse.com/es6-module).

```html
<script type="module">
  import gistSimple from "gist-simple.esm.min.js";
</script>
```

### ESM CDN

```html
<script type="module">
  import gistSimple from "https://cdn.jsdelivr.net/npm/gist-simple@2/+esm";
</script>
```

### UMD

Gist Simple may be also used in a traditional way by including script in HTML and using library by accessing `window.gistSimple`.

```html
<link type="text/css" rel="stylesheet" href="gist-simple.css">
<script src="gist-simple.min.js"></script>
```

### UMD CDN

```html
<link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/gist-simple@2/dist/gist-simple.css">
<script src="https://cdn.jsdelivr.net/npm/gist-simple@2/dist/gist-simple.min.js"></script>
```

### CJS (Bundlers like Webpack)

Install Gist Simple as a Node.js module using npm

```
npm install gist-simple
```

Import Gist Simple by adding this line to your app's entry point (usually `index.js` or `app.js`):

```javascript
import gistSimple from "gist-simple";
```

## Call the plugin

### A. Data attribute way
```html
<div class="gist-simple" data-id="b58861072e53b12430ec2f78a99dbe4d" data-file="example-1.html"></div>
```
Note: You can use all available options as data attributes. For example: `data-id`, `data-file`, `data-show-footer`, etc...

### B. JavaScript way
```javascript
gistSimple(document.querySelector('.gist-simple'), {
  id: 'b58861072e53b12430ec2f78a99dbe4d',
  file: 'example-1.html',
});
```

### C. jQuery way
```javascript
$('.gist-simple').gistSimple({
  id: 'b58861072e53b12430ec2f78a99dbe4d',
  file: 'example-1.html',
});
```

#### No conflict (only if you use jQuery) <!-- omit in toc -->

Sometimes to prevent existing namespace collisions you may call `.noConflict` on the script to revert the value of.

```javascript
const gistSimplePlugin = $.fn.gistSimple.noConflict() // return $.fn.gistSimple to previously assigned value
$.fn.newGistSimple = gistSimplePlugin // give $().newGistSimple the Gist Simple functionality
```

## Options
Name | Type | Default  | Description
:--- | :--- |:---------| :----------
id | string | ``       | Gist ID.
theme | string | `system` | Theme: `system`, `light`, `dark`.
file | string | ``       | Specific file name.
caption | string | ``       | Caption, that will be shown above code.
lines | string | ``       | Show only specific code lines. Example: "2", "1-5", "1,4", "1,4,6-8".
linesExpanded | boolean | `false`  | Hidden lines may be expanded.
highlightLines | string | ``       | Highlight specific code lines. Example: "2", "1-5", "1,4", "1,4,6-8".
showFooter | boolean | `true`   | Show footer section.
showLineNumbers | boolean | `true`   | Show line numbers section.
enableCache | boolean | `true`   | Enable AJAX caching.

## For Developers

### Installation <!-- omit in toc -->

* Run `npm install` in the command line

### Building <!-- omit in toc -->

* `npm run dev` to run build and start local server with files watcher
* `npm run build` to run build

### Linting <!-- omit in toc -->

* `npm run js-lint` to show eslint errors
* `npm run js-lint-fix` to automatically fix some of the eslint errors
