'use strict';

/* Controllers */

angular.module('chensKitchen.controllers', [])

  .controller('MenuCtrl', function($scope) {
  
   $scope.menuItem = [ 
         {  
         	name: 'Chicken Fried Rice',
         	price: [{small: 8.95, large: 9.55}],
		 	description: 'Fried rice with scallions and savory chicken'},
		 {
		 	name: 'Beef Fried Rice',
		 	price: [{small: 8.95, large: 9.55}],
		 	description: 'Fried rice with scallions and savory beef'},
		 {
		 	name: 'Shrimp Fried Rice',
		 	price: [{small: 8.95, large: 9.55}],
		 	description: 'Fried rice with scallions and savory shrimp'},
		 {
		 	name: 'Pork Fried Rice',
		 	price: [{small: 8.95, large: 9.55}],
		 	description: 'Fried rice with scallions and savory pork'}
			         ];
	$scope.orderList = [];	

	$scope.sizes = [{size: 'small'},{size: 'large'}];	         
    
  })

  .controller('PlateCtrl', function($scope) {

  }) 

  .controller('HomeCtrl', function($scope) {

  })

  .controller('OrderCtrl', function($scope, $routeParams) {
     
         // $scope.item = "stuff";
         $scope.item = $routeParams.id;

  }); 
