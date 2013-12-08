/*! supercount - v0.1.0 - 2013-12-08
* https://github.com/luschn/supercount
* Copyright (c) 2013 Andreas Teufel; Licensed MIT */
/*
 * supercount
 * 
 *
 * Copyright (c) 2013 Andreas Teufel
 * Licensed under the MIT license.
 */

(function ($) {
	'use strict';

  // Collection method.
	$.fn.supercount = function (options) {
		var settings = $.extend({
			//defaults options
			from: 0,
			to: 10,
			step: 1,
			stepTime: 100
		}, options);
		
		var intervalId,
			val = settings.from,
			that,
			decimalMultiplier = 1;
		
		var loop = function () {
			val += settings.step;
			that.html(val / decimalMultiplier);
			
			if (val >= settings.to) {
				clearInterval(intervalId);
				that.trigger('onCountFinished');
			}
		};
		
		this.start = function () {
			that = $(this);
			if (settings.step.toString().indexOf('.') >= 0) {
				decimalMultiplier = Math.pow(10, settings.step.toString().split('.')[1].length);
			} else {
				decimalMultiplier = 1;
			}
			val *= decimalMultiplier;
			settings.step *= decimalMultiplier;
			settings.to *= decimalMultiplier;
			intervalId = setInterval(loop, settings.stepTime);
			$(this).trigger('onCountStarted');
		};
		
		return this.each(function () {
			$(this).html(settings.from);
		});
	};
}(jQuery));