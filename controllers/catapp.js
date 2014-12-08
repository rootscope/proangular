angular.module("catApp", ["customFilters", "cart"])

.constant("dataUrl", "http://localhost:5500/cats")

.config(function($routeProvider) {
  $routeProvider.when("/checkout", {
    templateUrl: "/views/checkoutSummary.html"
  });
  $routeProvider.when("/cats", {
    templateUrl: "/views/catList.html"
  });
  $routeProvider.otherwise({
    templateUrl: "/views/catList.html"
  });
});

.controller("catAppCtrl", function($scope, $http, dataUrl) {
  $scope.data = {};

  $http.get(dataUrl).success(function(data){
    $scope.data.cats = data;
  })
  .error(function(error){
    $scope.data.error = error;
  });

});
