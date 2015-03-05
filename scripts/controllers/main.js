'use strict';

/**
 * @ngdoc function
 * @name diskApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the diskApp
 */

angular.module('diskApp')
.controller('MainCtrl', function ($scope, diskdb, importjs) {

  $scope.init = function() {
    diskdb.connect('data','contact');
  };

  $scope.init();

  $scope.contacts = [];

  $scope.onSubmit = function() {
    var contact = {
      name: $scope.name,
      phno: $scope.phno
    };
    $scope.contacts.push(contact);
    $scope.name = "";
    $scope.phno = "";
    diskdb.save('contact', contact);
  };

  $scope.importFile = function() {
    var fname = $scope.myFile.path
    var data = importjs.read(fname);
    console.log(data);
    for(var i in data) {
      var contact = {
        name: data[i].name,
        phno: data[i].phno
      };
      diskdb.save('contact', contact);
    }
  }
});
