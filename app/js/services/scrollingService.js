(function () {
	'use strict';

	angular.module('ScrollingService', [])
		.service('ScrollingService', scrollingService);
	scrollingService.$inject = ['$window'];
	function scrollingService ($window) {
		const service = this, defaultDuration = 700, defaultVerticalOffset = 100;

		let oldTimestamp, cosineParameter, scrollCount, step, isUpwardScroll, destination;

		service.scrollToTop = () => {
			resetConfigurationVariables();
			isUpwardScroll = true;
			step = (newTimestamp) => {
				scrollCount += Math.PI / ( (defaultDuration) / (newTimestamp - oldTimestamp) );

				if (scrollCount >= Math.PI) $window.scrollTo(0,0);
				if ($window.scrollY <= 5) return;

				beginScrolling(newTimestamp);
				
			}

			$window.requestAnimationFrame(step);
		};

		service.scrollToElement = (options) => {
			resetConfigurationVariables(options);

			step = (newTimestamp) => {
				scrollCount += Math.PI / ( (options.duration || defaultDuration) / (newTimestamp - oldTimestamp) );

				if (scrollCount >= Math.PI) {
					$window.scrollTo(0, destination);
					return;
				}
				if (isAtDestination()) {
					if (options.onScrollFinish) {
						options.onScrollFinish();
					}
					return;
				}

				beginScrolling(newTimestamp);
			}
		};

		function isAtDesitnation () {
			if (isUpwardScroll) {
				return $window.scrollY === 0 || $window.scrollY <= destination;
			}

			return $window.scrollY === $window.innerHeight || $window.scrollY >= destination;
		}

		function beginScrolling (newTimestamp) {
			let yDestination = Math.round( cosineParameter + cosineParameter * Math.cos(scrollCount));
			if (!isUpwardScroll) {
				yDestination = $window.scrollY + 30;
			}

			$window.scrollTo(0, yDestination);
			oldTimestamp = newTimestamp;
			$window.requestAnimationFrame(step);
		}

		function resetConfigurationVariables(options) {
			if (options) {
				destination = getElementOffset(options.element) - (options.verticalOffset || defaultVerticalOffset);
				isUpwardScroll = destination < $window.scrollY;
			}
			cosineParameter = $window.scrollY / 2;
			scrollCount = 0;
			oldTimestamp = performance.now();
		}

		function getElementOffset(element) {
			let documentElement = document.documentElement,
				box = element.getBoundingClientRect(),
				top = box.top + $window.pageYOffset - documentElement.clientTop;
			return top;
		}

	}	
})();