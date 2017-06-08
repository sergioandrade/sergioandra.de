(function(){
	"use strict";
	/*
	 * @description httploading config register
	 */
	 angular.module("app.core")
	.config(["$httpProvider", function ($httpProvider) {
		$httpProvider.interceptors.push("httpLoading");
	}]);
	 
})();