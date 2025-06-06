/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var EPS = require( '@stdlib/constants-float64-eps' );
var abs = require( '@stdlib/math-base-special-abs' );
var randu = require( '@stdlib/random-base-randu' );
var tryRequire = require( '@stdlib/utils-try-require' );


// VARIABLES //

var fresnelc = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( fresnelc instanceof Error )
};


// FIXTURES //

var smallPositive = require( './fixtures/c/cephes/small.json' );
var mediumPositive = require( './fixtures/c/cephes/medium.json' );
var largePositive = require( './fixtures/c/cephes/large.json' );
var hugePositive = require( './fixtures/c/cephes/huge.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof fresnelc, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the Fresnel integral C(x) (small positive values)', opts, function test( t ) {
	var delta;
	var tol;
	var C;
	var x;
	var y;
	var i;

	x = smallPositive.x;
	C = smallPositive.C;

	for ( i = 0; i < x.length; i++ ) {
		y = fresnelc( x[i] );
		if ( y === C[ i ] ) {
			t.strictEqual( y, C[ i ], 'x: '+x[i]+'. Expected: '+C[i] );
		} else {
			delta = abs( y - C[i] );
			tol = 4.0 * EPS * abs( C[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. Value: '+y+'. Expected: '+C[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the Fresnel integral C(x) (medium positive values)', opts, function test( t ) {
	var delta;
	var tol;
	var C;
	var x;
	var y;
	var i;

	x = mediumPositive.x;
	C = mediumPositive.C;

	for ( i = 0; i < x.length; i++ ) {
		y = fresnelc( x[i] );
		if ( y === C[ i ] ) {
			t.strictEqual( y, C[ i ], 'x: '+x[i]+'. Expected: '+C[i] );
		} else {
			delta = abs( y - C[i] );
			tol = 1.5 * EPS * abs( C[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. Value: '+y+'. Expected: '+C[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the Fresnel integral C(x) (large positive values)', opts, function test( t ) {
	var delta;
	var tol;
	var C;
	var x;
	var y;
	var i;

	x = largePositive.x;
	C = largePositive.C;

	for ( i = 0; i < x.length; i++ ) {
		y = fresnelc( x[i] );
		if ( y === C[ i ] ) {
			t.strictEqual( y, C[ i ], 'x: '+x[i]+'. Expected: '+C[i] );
		} else {
			delta = abs( y - C[i] );
			tol = 1.5 * EPS * abs( C[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. Value: '+y+'. Expected: '+C[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the Fresnel integral C(x) (very large positive values)', opts, function test( t ) {
	var delta;
	var tol;
	var C;
	var x;
	var y;
	var i;

	x = hugePositive.x;
	C = hugePositive.C;

	for ( i = 0; i < x.length; i++ ) {
		y = fresnelc( x[i] );
		if ( y === C[ i ] ) {
			t.strictEqual( y, C[ i ], 'x: '+x[i]+'. Expected: '+C[i] );
		} else {
			delta = abs( y - C[i] );
			tol = 1.5 * EPS * abs( C[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. Value: '+y+'. Expected: '+C[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function is an odd function of x', opts, function test( t ) {
	var yn;
	var yp;
	var x;
	var i;

	for ( i = 0; i < 500; i++ ) {
		x = randu() * 10000.0;
		yn = fresnelc( -x );
		yp = fresnelc( x );

		t.strictEqual( yp, -yn, 'C(x) = -C(-x)' );
	}
	t.end();
});

tape( 'the function returns `0.5` if provided `+infinity`', opts, function test( t ) {
	var v = fresnelc( PINF );
	t.strictEqual( v, 0.5, 'returns 0.5' );
	t.end();
});

tape( 'the function returns `-0.5` if provided `-infinity`', opts, function test( t ) {
	var v = fresnelc( NINF );
	t.strictEqual( v, -0.5, 'returns -0.5' );
	t.end();
});

tape( 'the function returns `NaN` if provided a `NaN`', opts, function test( t ) {
	var v = fresnelc( NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});
