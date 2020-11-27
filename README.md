# luciascript

> Hastscript-like utility to create HTML strings

## Installation

```
$ npm install luciascript
# Or with yarn
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
```html
<div class="foo" id="bar" style="text-align: center;">
    <p>Hello World</p>
    <button>Click Me!</button>
</div>
```