'use strict';

/**
 * Converts between a string and Date object allowing the user to edit the date in an
 * input field and have it stored as a Date object in the model. Can optionally
 * pass a date format to ensure it interprets the date properly.
 *
 * Usage
 *
 * date-converter="DD/MM/YYYY"
 * 
 * Taken from: http://stackoverflow.com/questions/14474555/how-to-format-a-date-using-ng-model
 * 
 * @ngdoc directive
 * @name life.common.directive:storeAsDate
 * @description
 * # storeAsDate
 */
angular.module('life.common')
  .directive('storeAsDate', function (moment) {
	  return {
	    require:'^ngModel',
	    restrict:'A',
	    priority: 101, // must be greater than ui-mask (100)
	    link: function (scope, elm, attrs, ctrl) {
	      var dateFormat = attrs.storeAsDate || 'DD/MM/YYYY';

	      attrs.$observe('storeAsDate', function (newValue) {
	        if (dateFormat === newValue || !ctrl.$modelValue) {
	        	return;
	        }
	        dateFormat = newValue;
	        ctrl.$modelValue = new Date(ctrl.$setViewValue);
	      });

	      ctrl.$formatters.push(function (modelValue) {
	        if (!dateFormat || !modelValue) {
	        	return '';
	        }
	        var retVal = moment(modelValue).format(dateFormat);
	        return retVal;
	      });

	      ctrl.$parsers.push(function (viewValue) {
	        var date = moment(viewValue, dateFormat);
	        return (date && date.isValid()) ? date.toDate() : '';
	      });

	      ctrl.$validators.isValidDate = function(modelValue, viewValue) {
	        return moment(viewValue, dateFormat).isValid();
	      };
	    }
	  };
	});
