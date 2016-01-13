'use strict';

var menuDirective = angular.module( 'menuDirective' );

menuDirective.controller( 'MenuDirectiveController', function( $rootScope, $scope, $state, $stateParams )
{

	$scope.menuItems = [
		{
			title: 'Architecture',
			url: 'architecture',
			sorting: [
				{
					title: 'Alphabetical',
					items: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
				},
				{
					title: 'Year',
					items: ['1970 - 1979', '1980 - 1989', '1990 - 1999', '2000 - 2009', '2010 - 2019']
				},
				{
					title: 'Type',
					items: ['Commercial', 'Office', 'Culture', 'Education & Health', 'Residential', 'Multi-Family', 'Private Residence', 'Government']
				}
			]
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

	$scope.stateParams = $stateParams;

	// Initialize as false
	$scope.displaySorting = false;

	$scope.toggleSort = function( input ) {
		$scope.displaySorting = input;
	}


	console.log( 'MenuDirectiveController active!' );

} );
