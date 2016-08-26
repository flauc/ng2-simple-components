# ng2-simple-components
Simple Components is a set of helpful and minimalistic components, directives and services for angular 2 applications.

Every segment is completely independent and can be included separately in to your project using `@NgModule`.

You can download the library through npm
```
npm install --save ng2-simple-components
```

## Table of Contents

 1. [Example](#example)
 1. [SystemJs Setup](#systemjs-setup)
 1. [Components](#components)
 1. [Overriding Styles](#overriding-styles)
 1. [FAQ](#faq)
 1. [Help and Suggestions](#help-and-suggestions)
 
## Example
Take a look at the live demo here: [Live Demo](http://flauc.github.io/ng2-simple-components)
You can also clone this repository and check out the example folder.

## SystemJs Setup

Map the library in your `system.config.js`.
```js
var map = {
    'ng2-simple-components': 'node_modules/ng2-simple-components'
}

var packages = {
    'ng2-simple-components': { main: 'components.js', defaultExtension: 'js' }
}
```

## Components

* [Tabs](https://github.com/flauc/ng2-simple-components/blob/master/docs/tabs.md)
* [Accordion](https://github.com/flauc/ng2-simple-components/blob/master/docs/accordion.md)
* [Block Slider](https://github.com/flauc/ng2-simple-components/blob/master/docs/block-slider.md)

## Overriding Styles

## FAQ

### I only need one module for my project, does it make any sense to install the entire library?

You can still install and use this library with out any fear from accumulating unused code. 
You only import the module that you need in to your project.

## Help and Suggestions 

Any help and/or suggestions are welcome and greatly appreciated. 
Please feel free to contact me with ideas or send pull requests with bug fixes or new features.
