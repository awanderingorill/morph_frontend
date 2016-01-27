'use strict';

var sectionState = angular.module( 'sectionState' );

sectionState.controller( 'SectionStateController', function( $rootScope, $scope, $state, $stateParams, Project )
{
	console.log( 'SectionStateController active!' );

	$scope.stateName = 'section-state';

	// if (stateParams.section = architecture){
	// 	$scope.projects = Project.query(architecture)
	// }

	// Fetch all projects
	$scope.projects = Project.query();

	// Set the active project
	// $scope.toggleActive = function( project )
	// {
	// 	$scope.activeProject = project;
	// };

	// $scope.activeChildNav = $state.current.activeChildNav;

	$scope.stateParams = $stateParams;

	$scope.sortingType = $stateParams.sortingType;

	$rootScope.$on( '$stateChangeSuccess', function(  )
	{
		$scope.activeChildNav = $state.current.activeChildNav;
	} );

} );