/*jslint browser: true, nomen: false, devel: true*/
/*global $, jQuery, Modernizr */

(function () {
	"use strict";

	$(document).ready(function () {

		var Global = (function () {

			var init = function () {
					initResponsiveTables();
				},

				initResponsiveTables = function () {
					$('.megapony-rwd-table-container table').stacktable();
				};

			return { init: init };
		}());

		Global.init();

	});
}());