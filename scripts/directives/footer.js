'use strict';

/**
 */
angular.module('life.common')
  .directive('footer', function ($sce) {
    return {
      template: '<span ng-include="path"></span>',
      restrict: 'E',
      scope: true,
      link: function(scope) {
      	scope.path = $sce.trustAsResourceUrl(
      			(window.urls && window.urls.webCommon ? window.urls.webCommon : '')+'views/web-common/footer.html');
      }
    };
  });
