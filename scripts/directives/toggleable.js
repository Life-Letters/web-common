'use strict';

/**
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
        scope.on = false || attrs.toggleable === '1' || attrs.toggleable === 'true';
      },
      controller: function($scope) {
        $scope.toggle = function() {
          $scope.on = !$scope.on;
        };
        $scope.turnOn = function() {
          $scope.on = true;
        };
        $scope.turnOff = function() {
          $scope.on = false;
        };
        $scope.isOn = function() {
          return $scope.on;
        };
        $scope.isOff = function() {
          return !$scope.on;
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