# ES6 Shim
Provides compatibility shims so that legacy JavaScript engines behave as
closely as possible to ECMAScript 6 (Harmony).

Project targets engines that support ES5. With
[ES5-shim](https://github.com/kriskowal/es5-shim) it would also work in older
browsers.

## Installation

    npm install es6-shim

## Safe shims
* Maps & Sets (FIXME: iteration doesn't work)
* String.prototype.repeat, String.prototype.startsWith,
String.prototype.endsWith, String.prototype.contains, String.prototype.toArray
* Array.from, Array.of
* Number.isNaN, Number.toInteger, Number.isInteger
* Object.getOwnPropertyDescriptors, Object.getPropertyDescriptor,
Object.getPropertyNames, Object.is
* Math.sign

## Dubious shims


## Shims that fail silently


## License
The MIT License (MIT)

Copyright (c) 2011 Paul Miller

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.