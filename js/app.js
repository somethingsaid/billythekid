angular.module('myApp', ['ngAnimate'])
    .controller('myController', ['$scope', '$http', function($scope, $http) {
    	$scope.currentPage = null;
    	/* Show quick Menu */
    	$scope.showQuickMenu = function() {
    		$scope.quickMenu = true;
    		$scope.landing = false;
    		$scope.aboutMe = false;
    		$scope.myWork = false;
    		$scope.floatNav = false;
    	}

    	/* Close Menu and return to current page */
    	$scope.closeMenu = function() {
    		if ($scope.currentPage === 'about') {
    			$scope.showAboutMe();
    		}
    		else {
    			$scope.showMyWork();
    		}
    	}

    	/* Show Landing Page */
    	$scope.showLanding = function() {
			$scope.quickMenu = false;
			$scope.landing = true;
			$scope.aboutMe = false;
			$scope.myWork = false;
			$scope.floatNav = false;
		}

    	/* Show About Me Page */
    	$scope.showAboutMe = function() {
			$scope.quickMenu = false;
			$scope.landing = false;
			$scope.aboutMe = true;
			$scope.myWork = false;
			$scope.floatNav = true;
			$scope.currentPage = 'about';
		}

    	/* Show My Work Page */
    	$scope.showMyWork = function() {
			$scope.quickMenu = false;
			$scope.landing = false;
			$scope.aboutMe = false;
			$scope.myWork = true;
			$scope.floatNav = true;
			$scope.currentPage = 'work';
			$http.get('../data/data.json')
			.then(function(response) {
				$scope.projects = response.data.projects.projects;
			},
			function(response) {
				console.log('Error retrieving project details');
			});
		}

    }]);