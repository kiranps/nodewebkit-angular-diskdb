'use strict';

/**
 * @ngdoc directive
 * @name yeomanApp.directive:modal
 * @description
 * # sam
 */
angular.module('diskApp')
  .directive('modal', function () {
    return {
      //template: '<div></div>',
      scope: { body: '@modalBody',
               btname: '@toggleButton' 
      },
      templateUrl: 'views/modal.html',
      restrict: 'E'
      //link: function postLink(scope, element, attrs) {
        //element.text('this is the sam directive');
      //}
    };
  });
