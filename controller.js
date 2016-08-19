var FestivalSearchApp = angular.module("FestivalSearchApp", []);
FestivalSearchApp.controller("FestivalSearchController", function($scope, $http) {

	var apiBaseUrl = "http://api.eventful.com/json/events/search?q="; //base url for queries -- this 
																	// is the only JSON info 'eventful' has

	var locationQueryBase = "&loaction="

	var apiKey = "&Gm8kg7jj9gd4Gmwh"


	$scope.searchEvents = function() {
		var searchUrl = apiBaseUrl + $scope.eventQuery + apiKey;

		$http({
			method: "GET",
			url: searchUrl

		}).then(function successFunction(eventData) {

			console.log(eventData);
			// $scope.eventArray = eventData.data.results; 
		}, function failureFunction(eventData) {
			console.log("fail");
		});
		console.log($scope.eventQuery);
	}
})