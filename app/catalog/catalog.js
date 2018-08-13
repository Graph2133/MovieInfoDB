'use strict';

angular.module("movieDB.catalog",['ui.bootstrap'])
	.controller('catalogCtrl', ['$scope', 'movieAPIservice', function ($scope, movieAPIservice) {

		$scope.currentPage = 1;
		$scope.pageSize = 12;
		$scope.pageTitle = "Most Watched this Week";
		$scope.totalLength=0;

		movieAPIservice.getMovies().success(function(data){
			$scope.totalLength=data.length;
			$scope.movieList=data;
		});

		movieAPIservice.getGenres().success(function(data){
			$scope.genreList=data;
		});

	}])