"use strict";

$(document).ready(function () {
	!(function () {
		$(".h-menu__close").on("click", function () {
			$(".h-menu").removeClass("h-menu--active");
			$(".submenu").removeClass("submenu--active");
			$(".h-menu__back").removeClass("h-menu__back--active");
		});
		$(".h-menu__back").on("click", function () {
			$(".submenu").removeClass("submenu--active");
			$(".h-menu__back").removeClass("h-menu__back--active");
		});
		$(".h-menu__link").on("click", function (e) {
			var sub = $(this).parent().find(".submenu");

			if (sub.length > 0) {
				e.preventDefault();
				sub.addClass("submenu--active");
				$(".h-menu__back").addClass("h-menu__back--active");
			}
		});
		$(".header__menuopen").on("click", function () {
			$(".h-menu").addClass("h-menu--active");
		});
	})();
	$(function () {
		$("#phone1, #phone2").mask("+380(99) 999-99-99");
	});
	$("a.scroll, button.scroll").on("click", function (e) {
		e.preventDefault();
		var anchor = $(this);
		$("html, body")
			.stop()
			.animate(
				{
					scrollTop: $(anchor.attr("href")).offset().top - 0,
				},
				777,
				function () {}
			);

		if ($(".h-menu").hasClass("h-menu--active")) {
			$(".h-menu").removeClass("h-menu--active");
		}
	});
});
//# sourceMappingURL=index.js.map
