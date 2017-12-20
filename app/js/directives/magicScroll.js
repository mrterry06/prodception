(function () {
	'use strict';
	angular.module('magicScroll', [])
	    .directive('magicScroll', directive);



	function directive($window) {

	    return {
	        restrict: 'A',
	        scope: true,
	        link: function(scope, element, attrs) {

	            angular.element($window).bind("scroll", function() {

	                $('.fade-me').each( function(i){

	                    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
	                    var bottom_of_window = $(window).scrollTop() + $(window).height();

	                    /* If the object is completely visible in the window, fade it it */
	                    if( bottom_of_window > bottom_of_object ){
	                    	console.log('It should be visible');

	                        $(this).animate({'opacity':'1'}, 100);

	                    }
	               });

	               // document.querySelectorAll('h3').forEach((ele)=>{
	               // 		let wrappedElement = angular.element(ele)[0];
	               // 		console.log(wrappedElement);
	               // 		console.log($window);
	               // 		console.log(wrappedElement.offsetTop, wrappedElement.clientHeight);
	               // 		console.log()
	               // 		console.log($window.top() + $window.height());	
	               // });
	           });
	        }
	    }
	}
})();