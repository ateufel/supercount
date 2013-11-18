(function ($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */
	'use strict';

	module('jQuery#supercount.basic', {
		setup: function () {
			this.elem = $('#counter1').supercount();
		}
	});

	asyncTest('test with default settings', function () {
		expect(2);
		this.elem.on('onCountStarted', function () {
			equal($(this).html(), '0', 'start value 0');
		});
		this.elem.on('onCountFinished', function () {
			equal($(this).html(), '10', 'end value 10');
			start();
		});
		this.elem.start();
	});
	
	module('jQuery#supercount.parameters', {
		setup: function () {
			this.elem = $('#counter2').supercount({
				from: 10,
				to: 100,
				step: 2,
				stepTime: 50
			});
		}
	});

	asyncTest('test with parameters', function () {
		expect(2);
		this.elem.on('onCountStarted', function () {
			equal($(this).html(), 10, 'start value 10');
		});
		this.elem.on('onCountFinished', function () {
			equal($(this).html(), 100, 'end value 100');
			start();
		});
		this.elem.start();
	});
}(jQuery));