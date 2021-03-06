## Gist Simple
jQuery plugin for Gist code loading.

## [Demo](https://codepen.io/_nK/pen/KLQZqr)

## Getting Started

```html
<link type="text/css" rel="stylesheet" href="gist-simple/dist/gist-simple.css">
<script src="gist-simple/dist/gist-simple.min.js"></script>
```

#### CDN
Link directly from [unpkg](https://unpkg.com/)
```html
<link type="text/css" rel="stylesheet" href="https://unpkg.com/gist-simple@1/dist/gist-simple.css">
<script src="https://unpkg.com/gist-simple@1/dist/gist-simple.min.js"></script>
```

## Call the plugin

### A. Data attribute way
```html
<div class="gist-simple" data-id="b58861072e53b12430ec2f78a99dbe4d" data-file="example-1.html"></div>
```
Note: You can use all available options as data attributes. For example: `data-id`, `data-file`, `data-show-footer`, etc...

### B. jQuery way
```javascript
$('.gist-simple').gistsimple({
    id: 'b58861072e53b12430ec2f78a99dbe4d',
    file: 'example-1.html',
});
```

## Options
Name | Type | Default | Description
:--- | :--- | :------ | :----------
id | string | `` | Gist ID.
file | string | `` | Specific file name.
caption | string | `` | Caption, that will be shown above code.
lines | string | `` | Show only specific code lines. Example: "2", "1-5", "1,4", "1,4,6-8".
linesExpanded | boolean | `false` | Hidden lines may be expanded.
highlightLines | string | `` | Highlight specific code lines. Example: "2", "1-5", "1,4", "1,4,6-8".
showFooter | boolean | `true` | Show footer section.
showLineNumbers | boolean | `true` | Show line numbers section.
enableCache | boolean | `true` | Enable AJAX caching.

## No conflict
If you already have ***jQuery.fn.gistsimple***, you can rename the plugin.

```javascript
jQuery.fn.newGistsimple = jQuery.fn.gistsimple.noConflict();
```

## For Developers

### Installation
* Run `npm install` in the command line. Or if you need to update some dependencies, run `npm update`

### Building
* `npm run build` to run build

### Linting
* `npm run js-lint` to show eslint errors
* `npm run js-lint-fix` to automatically fix some of the eslint errors
