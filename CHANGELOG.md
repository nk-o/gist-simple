# Changelog

## [2.0.1] - Sep 21, 2023

- added support for styles loading when gist placed inside iframe
- changed loading icon animation

## [2.0.0] - Jul 4, 2023

- removed jQuery requirement, this library is for vanilla JS now
- added separate scripts for ESM, UMD and CJS
- improved first load - prevent jumping because of styles loading - waiting for styles load, then hide the preloader
- changed preloader icon
- removed deprecated JS method `substr`
- changed CDN example to jsdelivr
- changed `$.gistsimple` to `$.gistSimple`
- changed gulp + webpack bundler to rollup

## [1.0.1] - May 23, 2019

- added callback options and destroy method
- changed preloader icon

## [1.0.0] - May 23, 2019

- initial release
