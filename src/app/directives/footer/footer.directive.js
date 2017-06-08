(function(){
	"use strict";
	/*
	 * @description Date Input directive
	 */

	angular.module("app")
		.directive("appFooter", [
		function() {
			return {
				restrict: "E",
				templateUrl: "app/directives/footer/footer.html",
				link: function(scope, element) {
					scope.goToTop = function(){
						var body = $("html, body");
						body.stop().animate({scrollTop:0}, 500, 'swing');
					}
				}
			};
		}
	]);

})();