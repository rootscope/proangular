angular.module("catApp", ["customFilters", "cart"]);

angular.module("catApp")
.constant("dataUrl", "http://localhost:5500/cats")
.controller("catAppCtrl", function($scope, $http, dataUrl) {

  $scope.data = {};

  $http.get(dataUrl).success(function(data){
    $scope.data.cats = data;
  })
  .error(function(error){
    $scope.data.error = error;
  });

});
