angular.module("catAppAdmin")
.constant("authUrl", "http://localhost:5500/users/login")
.controller("authCtrl", function($scope, $http, $location, authUrl){
  $scope.authenticate = function(user, pass){
    $http.post(authUrl,{
      username: user,
      password: pass
    }, {
      withCredentials: true
    }).success(function(data){
      console.log("success");
      $location.path("/main");
    }).error(function(error){
      console.log("error");
      $scope.authenticationError = error;
    });
  }
})
.controller("mainCtrl", function($scope){
  $scope.screens = ["cats", "orders"];
  $scope.current = $scope.screens[0];
  $scope.setScreen = function(index) {
    $scope.current = $scope.screens[index];
  };
  $scope.getScreen = function(){
    return $scope.current == "cats" ? "/views/adminCats.html" : "/views/adminOrders.html";
  };
});
