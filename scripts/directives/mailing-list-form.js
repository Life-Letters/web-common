'use strict';

/**
 * Provides the functionality for a mailing list form.
 */
angular.module('life.common')
  .directive('mailingListForm', function ($log, $http) {
    return {
      restrict: 'A',
      scope: false,
      link: function postLink( scope ) {

        if ( !window.urls.mailingListService ) {
          $log.error('window.urls.mailingListService not set');
          return;
        }
      	
        scope.successful = false;
      	scope.serverError = false;
      	scope.processing = false;
        scope.credentials = {
        	FNAME: null,
        	LNAME: null,
        	email: null,
        };

        scope.submit = function(form) {
        	scope.successful = false;
      		scope.serverError = false;

		    	if ( form.$invalid ) {
		    		return;
		    	}
		    	scope.processing = true;

          var url = window.urls.mailingListService+'subscriptions/newsletter';

          return $http.post(url, scope.credentials )
			    	.then( function() {
				      scope.successful = true;
				      scope.credentials = {};

				    }, function (error) {
				      $log.error( error );
				      scope.serverError = error.data;
				    })
				    .finally(function() {
				    	scope.processing = false;
				    });
        };
      }
    };
  });