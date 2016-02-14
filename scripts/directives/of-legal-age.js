'use strict';

/**
 * Validates whether someone is of legal age, i.e. over 18.
 */
angular.module('life.common')
  .directive('ofLegalAge', function (moment) {

    return {
      restrict: 'A',
      require: 'ngModel',
      link: function postLink(scope, element, attrs, ctrl) {
        ctrl.$validators.minimumAge = function(modelValue, viewValue) {
	        var b = moment(viewValue, attrs.minimumAge);
					return moment().diff(b, 'years') > 18;
	      };
      }
    };
  });