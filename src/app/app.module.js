(function(){
	"use strict";
	/*
	 * @description Instancia-se os modulos que serão usados em toda a aplicação no core
	 */

	angular.module("app.core", [
		"ui.router"
	]);

	//intanciando cada módulo
	angular.module("app.home", []);
	angular.module("app.criar-proposta", []);

	//app extende os demais modulos filhos
	angular.module("app", [
		"app.core",
		"app.config",
		"app.home",
		"app.criar-proposta"
	]);

})();
