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

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-fresnelc
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var fresnelc = require( '@stdlib/math-base-special-fresnelc' );
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

```javascript
var linspace = require( '@stdlib/array-base-linspace' );
var fresnelc = require( '@stdlib/math-base-special-fresnelc' );

var x = linspace( 0.0, 10.0, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( fresnelc( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/fresnelc.h"
```

#### stdlib_base_fresnelc( x )

Computes the [Fresnel integral][fresnel-integral] C(x).

```c
double out = stdlib_base_fresnelc( 0.0 );
// returns ~0.0

out = stdlib_base_fresnelc( 1.0 );
// returns ~0.780
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_fresnelc( const double x );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/fresnelc.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 0.0, 3.14, 5.55, 10.0 };

    double y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_fresnelc( x[ i ] );
        printf( "fresnelc(%lf) = %lf\n", x[ i ], y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

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

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-fresnelc.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-fresnelc

[test-image]: https://github.com/stdlib-js/math-base-special-fresnelc/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-fresnelc/actions/workflows/test.yml?query=branch:main

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

[@stdlib/math/base/special/fresnel]: https://github.com/stdlib-js/math-base-special-fresnel

[@stdlib/math/base/special/fresnels]: https://github.com/stdlib-js/math-base-special-fresnels

<!-- </related-links> -->

</section>

<!-- /.links -->
