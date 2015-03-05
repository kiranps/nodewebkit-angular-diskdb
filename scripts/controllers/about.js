'use strict';

/**
 * @ngdoc function
 * @name diskApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the diskApp
 */
angular.module('diskApp')
  .controller('AboutCtrl', function ($scope, _) {
    $scope.max = _.max([1,9,2,3,4]);
  });
