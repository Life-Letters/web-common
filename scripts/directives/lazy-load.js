'use strict';

/**
 * Waits for the relevant image to be ready before showing it. Works
 * with both image elements and background images.
 */
angular.module('life.common')
  .directive('lazyLoad', function () {
    return {
    	link: function postLink(scope, element, attrs) {
				var img = new Image();

				img.onload = function () {
					if ( attrs.lazyLoad ) {
						switch ( element.prop('tagName') ) {
							case 'IMG':
								element.attr('src', img.src);
								break;
							default:
								element.css('background-image', 'url(\''+img.src+'\')');
								break;
						}
					}
					element.addClass('lazy_loaded');
				};
				img.src = attrs.lazyLoad || attrs.src || element.css('background-image').replace(/^url\("|"\)$/g, '');
				// console.log(img.src);
			}
  	};
  });
