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

	$scope.menuSize = ['small','large'];	

	$scope.menuFunctions = {
		pendCustItems: [],
		pMenuItem: function(p){
	     function(){
	    	//pendCustItems.push(p);	     	
	     }
	     	return console.log(p);
		}
	};

  })

  .controller('PlateCtrl', function($scope) {

  }) 

  .controller('HomeCtrl', function($scope) {

  }); 
