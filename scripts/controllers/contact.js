'use strict';

/**
 * @ngdoc function
 * @name diskApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the diskApp
 */

angular.module('diskApp')
.controller('ContactCtrl', function ($scope, diskdb) {

  $scope.init = function() {
    diskdb.connect('data','contact');
    $scope.contacts = diskdb.find('contact');
  }

  var checked = [];

  $scope.mark = function(id) {
    if( checked.indexOf(id) == -1 ) {
      checked.push(id);
      console.log("push");
    }
    else {
      var index = checked.indexOf(id);
      checked[index] = checked[checked.length -1];
      checked.pop();
      console.log("pop");
    }
    console.log(checked);
  }

  $scope.deleteItems = function() {
    for(var i in checked){
      diskdb.remove('contact', { _id: checked[i] } );
    }
    $scope.contacts = diskdb.find('contact');
  }

  $scope.init();
});
