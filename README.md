# luciascript

> Hastscript-like utility to create HTML strings

[![Build Status](https://img.shields.io/travis/lucialand/luciascript)](https://travis-ci.org/lucialand/luciascript)
[![Coverage Status](https://img.shields.io/coveralls/github/lucialand/luciascript)](https://coveralls.io/github/lucialand/luciascript?branch=master)
[![NPM version](https://img.shields.io/npm/v/luciascript)](https://npmjs.org/package/luciascript)
[![Minzipped size](https://badgen.net/bundlephobia/minzip/luciascript)](https://bundlephobia.com/result?p=luciascript@0.1.0)

## Installation

```
$ npm install luciascript

# or with yarn

$ yarn add luciascript
```

Luciascript exports UMD, CJS, and ES builds.

```js
// ES
import { l } from "luciascript";
// CJS
const { l } = require("luciascript");
// UMD
const { l } = window.Luciascript;
```

## Usage

Luciascript has the following type declarations:
```ts
declare l(tag: string, props: Record<string, string> = {}, children: string[] | string[] = []) => string;
```

Given those properties it will generate HTML.
```js
l("div", { className: "foo", id: "bar", style: "text-align: center;" }, [
    l("p", {}, "Hello World!"),
    l("button", {}, "Click Me!")
])
```
or, with classes
```js

const luciaScript = new L(
   "div", { className: "foo", id: "bar", style: "text-align: center;" }, 
)
```


```html
<div class="foo" id="bar" style="text-align: center;">
    <p>Hello World</p>
    <button>Click Me!</button>
</div>
```

