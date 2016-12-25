'use strict';

/**
 * @ngdoc directive
 * @name angularApp.directive:main
 * @description
 * # main
 */

angular
  .module('productFormApp')
  .directive('main', function () {

    return {
      restrict: 'E',
      templateUrl: 'main/main.html',
      controller: 'MainCtrl',
      controllerAs: "$ctrl"
    };
  });
