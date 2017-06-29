(function(){ //self called
		
	
	var app = angular.module("calcApp",[]);


	app.controller("CalcCtrl", ["$scope",function($scope) {


		$scope.desconto = 0;
		$scope.valorFinal = 0;
		$scope.preco = 0;
		$scope.isWatching = false;


		var watcher;



		$scope.iniciarWatch = function (){
			
			watcher = $scope.$watch("preco", calculaDesconto);
			$scope.isWatching = true;
			
		};

		$scope.encerrarWatch = 	function (){

			watcher();
			$scope.isWatching = false;

		};


		function calculaDesconto(){

			$scope.valorFinal = $scope.preco - ($scope.preco * ($scope.desconto / 100));
		}


	}]);
	



})()

