'use strict';

/**
 * Computes an age given a date.
 */
angular.module('life.common')
  .filter('age', function (moment) {
    return function (input) {
      var b = moment(input);
			return moment().diff(b, 'years');
    };
  });
