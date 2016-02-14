'use strict';

/**
 * Maintains a value that can be switched on and off. It can also be
 * set to an arbitrary value, allowing it to be used to toggle between
 * multiple values.
 * 
 * @ngdoc directive
 * @name themeApp.directive:toggleable
 * @description
 * # toggleable
 */
angular.module('life.common')
  .directive('toggleable', function () {
    return {
  		scope: true,
      restrict: 'A',
      link: function(scope, element, attrs) {
        scope.val = attrs.toggleable === '1' || attrs.toggleable === 'true' ? 1 : 0;
      },
      controller: function($scope) {
        $scope.toggle = function() {
          $scope.val = !$scope.val;
        };
        $scope.turnOn = function() {
          $scope.val = 1;
        };
        $scope.turnOff = function() {
          $scope.val = 0;
        };
        $scope.isOn = function() {
          return $scope.val;
        };
        $scope.isOff = function() {
          return !$scope.val;
        };
        $scope.set = function(val) {
          $scope.val = val;
        };
        $scope.is = function(val) {
          return $scope.val === val;
        };
      }
    };
  })
  .directive('glyphicon', function () {
    return {
      scope: true,
      restrict: 'E',
      replace: true,
      template: 
        '<i class="glyphicon" ng-class="{'+
          '\'glyphicon-chevron-down\': isOn(),'+
          '\'glyphicon-chevron-right\': isOff()}"></i>',
    };
  });