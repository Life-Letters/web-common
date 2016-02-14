'use strict';

/**
 * Provides a quick UI for editing a cookie. 
 * 
 * Usage:
 *
 * <cookie-preference name="defaultEmail" label="Email"></cookie-preference>
 */
angular.module('life.common')
  .directive('editCookie', function ($cookies) {
    return {
      template: 
      		'<form class="form-horizontal">'+
	      		'<div class="form-group">'+
	      			'<label class="col-sm-4 control-label">{{label}}</label>'+
	      			'<div class="col-sm-6">'+
	      				'<input class="form-control" ng-model="model" />'+
	      			'</div>'+
	      			'<div class="col-sm-2">'+
	      				'<button class="form-control" ng-click="clear()">Clear</button>'+
	      			'</div>'+
      			'</div>'+
      		'</form>',
      restrict: 'E',
      scope: {
      	label: '@',
      	name: '@',
      },
      link: function postLink(scope) {
        scope.model = $cookies.get(scope.name);
        scope.$watch('model', function() { 
        	if ( scope.model === null ) {
        		$cookies.remove(scope.name);
        	} else {
        		$cookies.put(scope.name, scope.model);
        	}
      	});
        scope.clear = function() { scope.model = null; };
      }
    };
  });
