'use strict';

var menuDirective = angular.module( 'menuDirective' );

menuDirective.controller( 'MenuDirectiveController', function( $rootScope, $scope )
{

	// This is a controller.

	$scope.menuItems = [ 
		{
			title: 'Architecture',
			url: 'architecture'
		},
		{
			title: 'Urban Design',
			url: 'urban-design'
		},
		{
			title: 'Tangents',
			url: 'tangents'
		},
		{
			title: 'Research',
			url: 'research'
		},
		{
			title: 'Media',
			url: 'media'
		},
		{
			title: 'News',
			url: 'news'
		}
	];

	$scope.stateName = 'page-one';

	console.log( 'menuDirective Controller active!' );

} );
