/*! supercount - v0.0.1 - 2013-11-18
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
			that;
		
		var loop = function () {
			val += settings.step;
			that.html(val);
			
			if (val >= settings.to) {
				clearInterval(intervalId);
				that.trigger('onCountFinished');
			}
		};
		
		this.start = function () {
			that = $(this);
			intervalId = setInterval(loop, settings.stepTime);
			$(this).trigger('onCountStarted');
		};
		
		return this.each(function () {
			$(this).html(settings.from);
		});
	};
}(jQuery));