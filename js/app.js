angular.module('myApp', ['ngAnimate'])
    .controller('myController', ['$scope', function($scope) {
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
			// $http.get('../data/data.json')
			//  .then(function(response) {
			//  	$scope.projects = response.data.projects.projects;
			//  },
			//  function(response) {
			//  	console.log('Error retrieving project details');
			//  });
		}

		/* Portfolio Data, can't get gh-pages to work with data/*.json 404 error*/
		$scope.projects = [
		    {
				"name": "Personal POI",
				"image": "images/personal_poi.png",
				"description": "Drop pins on locations of interest.  Built with MEAN.",
				"url": "http://github.com/somethingsaid/personal-poi"
			},
			{
				"name": "GeoFlicks",
				"image": "images/geoflicks.jpg",
				"description": "Search for photos by location.  Utilizes Google Maps, Google Geocode, and Flickr APIs.",
				"url": "http://somethingsaid.github.io/geoflicks"
			},
						{
				"name": "Hot or Cold",
				"image": "images/hot_or_cold.jpg",
				"description": "A simple number guessing game",
				"url": "http://somethingsaid.github.io/hot_or_cold"
			},
			{
				"name": "Waitstaff Calculator",
				"image": "images/waitstaff.jpg",
				"description": "First project with Angular directives",
				"url": "http://somethingsaid.github.io/waitstaff-calculator"
			},
			{
				"name": "JQuery Streetfighter",
				"image": "images/streetfighter.jpg",
				"description": "Animate Ryu with jQuery event listeners",
				"url": "http://somethingsaid.github.io/jquery-streetfighter/main.html"
			},
			{
				"name": "Flickr Searcher",
				"image": "images/flickr_searcher.jpg",
				"description": "Search for photos by tags.  Built with AngularJS.",
				"url": "http://somethingsaid.github.io/flickr-searcher"
			}
		]

    }]);