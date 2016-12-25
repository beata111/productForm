'use strict';

// /**
//  * @ngdoc function
//  * @name angularApp.controller:MainCtrl
//  * @description
//  * # MainCtrl
//  * Controller of the angularApp
//  */

angular
  .module('productFormApp')
  .controller('MainCtrl', MainCtrl);

function MainCtrl () {

  var $ctrl = this;

  this.products = [
    {
      name: 'standard edition'
    },{
      name: 'silver edition'
    },{
      name: 'gold edition'
    },{
      name: 'diamond edition'
    },{
      name: 'platinum edition'
    }
  ];


  this.checkedProduct = $ctrl.products[0].name;

  this.buy = function () {
    if ($ctrl.checkedProduct) {
      $ctrl.productBought = true;
    }
  }

}





