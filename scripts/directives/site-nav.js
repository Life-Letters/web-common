'use strict';

angular.module('life.common')
  .directive('siteNav', function (users) {
    return {
    	templateUrl: 'views/site-nav.html',
      restrict: 'E',
      link: function(scope, element, attrs) {
      	// need to load the users service to ensure the init logic runs
      },
    };
  });