'use strict';

angular.module('life.common')
  .directive('siteNav', function (users) {
    return {
      templateUrl: 'views/site-nav.html',
      restrict: 'E',
      link: function(scope, element, attrs) {
        scope.navItemGrps = 
          [[
            {
              name: 'tests',
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
              path: window.urls.website+'referrals',
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
              path: window.urls.ehr+'records',
              user: 'Patient',
            },{
              name: 'patients',
              label: 'Patients',
              icon: 'report',
              path: window.urls.ehr+'patients',
              user: 'Clinician',
            },{
              name: 'refer',
              label: 'Refer',
              icon: '123',
              path: window.urls.ehr+'refer',
              user: 'Clinician',
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