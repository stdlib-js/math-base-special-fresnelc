<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# fresnelc

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [Fresnel integral][fresnel-integral] C(x).

<section class="intro">

The [Fresnel integral][fresnel-integral] C(x) is defined as

<!-- <equation class="equation" label="eq:fresnel_integral" align="center" raw="C(x) = \int_0^x \cos\left(\frac{\pi}{2} t^2\right)\,\mathrm{d}t." alt="Fresnel integral C(x)"> -->

```math
C(x) = \int_0^x \cos\left(\frac{\pi}{2} t^2\right)\,\mathrm{d}t.
```

<!-- <div class="equation" align="center" data-raw-text="C(x) = \int_0^x \cos\left(\frac{\pi}{2} t^2\right)\,\mathrm{d}t." data-equation="eq:fresnel_integral">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/math/base/special/fresnelc/docs/img/equation_fresnel_integral.svg" alt="Fresnel integral C(x)">
    <br>
</div> -->

<!-- </equation> -->

Some sources define C(x) using t<sup>2</sup> for the argument of the cosine. To get this function, multiply the computed integral by `√(π/2)` and multiply the argument `x` by `√(2/π)`.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
fresnelc = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-fresnelc@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/math-base-special-fresnelc/tags). For example,

```javascript
fresnelc = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-fresnelc@v0.2.1-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var fresnelc = require( 'path/to/vendor/umd/math-base-special-fresnelc/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-fresnelc@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.fresnelc;
})();
</script>
```

#### fresnelc( x )

Computes the [Fresnel integral][fresnel-integral] C(x).

```javascript
var v = fresnelc( 0.0 );
// returns ~0.0

v = fresnelc( 1.0 );
// returns ~0.780

v = fresnelc( Infinity );
// returns ~0.5

v = fresnelc( -Infinity );
// returns ~-0.5

v = fresnelc( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-base-linspace@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-fresnelc@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var x = linspace( 0.0, 10.0, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( fresnelc( x[ i ] ) );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/fresnel`][@stdlib/math/base/special/fresnel]</span><span class="delimiter">: </span><span class="description">compute the Fresnel integrals S(x) and C(x).</span>
-   <span class="package-name">[`@stdlib/math-base/special/fresnels`][@stdlib/math/base/special/fresnels]</span><span class="delimiter">: </span><span class="description">compute the Fresnel integral S(x).</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-fresnelc.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-fresnelc

[test-image]: https://github.com/stdlib-js/math-base-special-fresnelc/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/math-base-special-fresnelc/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-fresnelc/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-fresnelc?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-fresnelc.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-fresnelc/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-fresnelc/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-fresnelc/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-fresnelc/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-fresnelc/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-fresnelc/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-fresnelc/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-fresnelc/blob/main/branches.md

[fresnel-integral]: https://en.wikipedia.org/wiki/Fresnel_integral

<!-- <related-links> -->

[@stdlib/math/base/special/fresnel]: https://github.com/stdlib-js/math-base-special-fresnel/tree/umd

[@stdlib/math/base/special/fresnels]: https://github.com/stdlib-js/math-base-special-fresnels/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
