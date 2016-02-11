'use strict';

var slideshowDirective = angular.module( 'slideshowDirective', [  ] );

slideshowDirective.directive( 'slideshowDirective', function(  )
{
	return {

		restrict: 'E',
		controller: 'SlideshowDirectiveController',
		scope:
		{ 
			slides: '='
		},
		templateUrl: 'common-components/directives/slideshow-directive/slideshow-directive_template.html'
		
	};
} );