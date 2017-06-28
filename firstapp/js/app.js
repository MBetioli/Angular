//Inicia a aplicacao carregando o modulo angular, referenciando a app da tela
var myApp = angular.module('myApp', []);


//instancia o controler, carrega o scope em seguinda inicia os procedimetnos da tela passando o scope como parametro.
myApp.controller('MainCtrl', ['$scope', function($scope){

	$scope.mensagem = 'Hello WOrld';


	//function que vai ser disparada pelo ng-click
	$scope.showMessage = function(event){
		$scope.mensagem = 'Hey hei';
		alert($scope.mensagem);
	}

}]);