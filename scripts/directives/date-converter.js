'use strict';

/**
 * Converts between a string and Date object, allowing the user to edit the date in an
 * input field and have it stored as a Date object in the model.
 * 
 * Taken from: http://stackoverflow.com/questions/14474555/how-to-format-a-date-using-ng-model
 * 
 * @ngdoc directive
 * @name life.common.directive:dateConverter
 * @description
 * # dateConverter
 */
angular.module('life.common')
  .directive('dateConverter', function (moment) {

	  return {
	    require:'^ngModel',
	    restrict:'A',
	    priority: 101, // must be greater than ui-mask (100)
	    link: function (scope, elm, attrs, ctrl) {
	      var dateFormat = attrs.dateConverter;

	      attrs.$observe('dateConverter', function (newValue) {
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
	        return (date && date.isValid() && date.year() > 1950) ? date.toDate() : '';
	      });
	    }
	  };
	});
