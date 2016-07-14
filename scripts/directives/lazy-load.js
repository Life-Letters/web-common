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
        var retryTimeout = 5000;
        var interval = null;
        var spinner = angular.element('<div class="loading"></div>');

        // Put a spinner
        element.after(spinner);

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
          // Clear the looping interval to retry
          clearInterval(interval);
          // Remove Spinner
          element.next().remove();
				};

				img.src = attrs.lazyLoad || attrs.src || element.css('background-image').replace(/^url\("|"\)$/g, '');

        // Try again after some seconds
        img.onerror = function(){
          // Only do this once
          if(!interval){
            interval = setInterval(function (){
                // Try again
                img.src += '?' + +new Date;
                element.attr('src', img.src);
            }, retryTimeout);
          }
        };

			}
  	};
  });
