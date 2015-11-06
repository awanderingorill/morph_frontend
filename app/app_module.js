'use strict';

var angularSprout = angular.module( 'angularSprout',
[
	'menuDirective',

	'reverseFilter',

	'root'
] );

angularSprout.config( function( $urlRouterProvider, $locationProvider )
{
	$urlRouterProvider.otherwise( '/' );
	$locationProvider.html5Mode( true );
} );




angularSprout.run( [ '$rootScope', function( $rootScope )
{
	$rootScope.$on( '$stateChangeSuccess', function( event, toState, toParams, fromState, fromParams )
	{
		$rootScope.fromState = fromState;
		$rootScope.fromParams = fromParams;

		$rootScope.toState = toState;
		$rootScope.toParams = toParams;
	} );

} ] );
