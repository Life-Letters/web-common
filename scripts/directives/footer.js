'use strict';

/**
 */
angular.module('life.common')
  .directive('footer', function () {
    return {
      templateUrl: 'views/web-common/footer.html',
      restrict: 'E',
    };
  });
