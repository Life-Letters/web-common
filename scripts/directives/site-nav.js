'use strict';

angular.module('life.common')
  .directive('siteNav', function ($log, $sce, $rootScope, users) {
    return {
      template: '<span ng-include="path"></span>',
      restrict: 'E',
      scope: true,
      link: function(scope, element, attrs) {
        if ( !window.urls || !window.urls.ehr || !window.urls.website ) {
          $log.error('missing window.urls');
          return;
        }

        var active = attrs.highlight || '';
        scope.isActive = function(item) {
          return item.name === active || item.page === active;
        };
        $rootScope.$on('nav:highlight', function(evt, name) {
          active = name;
        });

        scope.isNavOn = false;
        scope.showNav = function() { scope.isNavOn = true; };
        scope.hideNav = function() { scope.isNavOn = false; };

        $rootScope.$on('$locationChangeStart', function(evt, newUrl, oldUrl) {
          scope.hideNav();
        });

        scope.path = $sce.trustAsResourceUrl(
            (window.urls && window.urls.webCommon ? window.urls.webCommon : '')+'views/web-common/site-nav.html');

        scope.home = window.urls.website;
        scope.navItemGrps = 
          [[
            {
              name: 'home',
              page: 'pagesProducts',
              label: 'Home',
              logo: 'LifeLetters',
              path: window.urls.website,
            },{
              name: 'tests',
              page: 'pagesProducts',
              label: 'Tests',
              icon: 'test',
              path: window.urls.website+'tests',
            },{
              name: 'articles',
              label: 'Articles',
              icon: 'news',
              path: window.urls.website+'articles',
            },{
              name: 'referrals',
              label: 'Referral',
              icon: '123',
              path: window.urls.ehr+'referrals',
            },{
              name: 'help',
              label: 'Help',
              icon: 'question',
              path: window.urls.website+'help',
            }
          ],[
            {
              name: 'login',
              label: 'Login',
              icon: 'user',
              path: window.urls.ehr+'login',
              user: false,
            },{
              name: 'users',
              label: 'Me',
              icon: 'user',
              path: window.urls.ehr+'record',
              user: 'Patient',
            },{
              name: 'patients',
              label: 'Patients',
              icon: 'report',
              path: window.urls.ehr+'patients',
              user: 'Clinician',
            },{
              name: 'patients',
              label: 'Patients',
              icon: 'report',
              path: window.urls.ehr+'patients',
              user: 'Counsellor',
            },{
              name: 'refer',
              label: 'Refer',
              icon: '123',
              path: window.urls.ehr+'refer',
              user: 'Clinician',
            },{
              name: 'refer',
              label: 'Refer',
              icon: '123',
              path: window.urls.ehr+'refer',
              user: 'Counsellor',
            },{
              name: 'logout',
              label: 'Logout',
              icon: 'question',
              path: window.urls.ehr+'logout',
              user: true,
            }
          ]];
      },
    };
  });