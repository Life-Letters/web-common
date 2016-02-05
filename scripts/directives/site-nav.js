'use strict';

angular.module('life.common')
  .directive('siteNav', function (users) {
    return {
      template: [
        '<nav class="nav-desktop">',
          '<div class="nav_full" e2e-id="nav_full">',
            '<ul class="iconList" ng-repeat="itemGrp in navItemGrps">',
              '<li ng-repeat="item in itemGrp" show-user="{{ item.user }}">',
                '<a ng-href="{{ item.path }}" class="navIcon">',
                  '<i class="icon icon-off icon-hex-{{ item.icon }}-outline"></i>',
                  '<i class="icon icon-on icon-hex-{{ item.icon }}-solid"></i>',
                  '<label>{{ item.label }}</label>',
                '</a>',
              '</li>',
            '</ul>',
          '</div>',
        '</nav>',

        '<nav class="nav-mobile" toggleable>',
          '<div class="nav_toggle" e2e-id="nav_toggle" >',
            '<a href="javascript:void(0);" ng-click="toggle()">',
              '<i class="fa fa-bars"></i>',
              '<label>Menu</label>',
            '</a>',
          '</div>',

          '<div class="nav_menu" ng-class="{active: isOn()}" e2e-id="nav_menu" >',
            '<div class="container-fluid">',
              '<span ng-repeat="itemGrp in navItemGrps">',
                '<hr ng-if="!$first">',
                '<div class="row">',
                  '<div class="col-xs-3" ng-repeat="item in itemGrp" show-user="{{ item.user }}">',
                    '<a ng-href="{{ item.path }}" class="navIcon">',
                      '<i class="icon icon-off icon-hex-{{ item.icon }}-outline"></i>',
                      '<i class="icon icon-on icon-hex-{{ item.icon }}-solid"></i>',
                      '<label>{{ item.label }}</label>',
                    '</a>',
                  '</div>',
                '</div>',
              '</span>',
            '</div>',

            '<a href="javascript:void(0);" class="close" e2e-id="nav_close" ng-click="toggle()">',
              '<i class="fa fa-times"></i> Close',
            '</a>',
          '</div>',
        '</nav>'].join(' '),
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