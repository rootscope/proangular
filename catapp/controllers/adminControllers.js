angular.module("catAppAdmin")
.constant("authUrl", "http://localhost:5500/users/login")
.constant("ordersUrl", "http://localhost:5500/orders")
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
  $scope.setScreen = function(index){
    $scope.current = $scope.screens[index];
  };
  $scope.getScreen = function(){
    return $scope.current == "cats" ? "/views/adminCats.html" : "/views/adminOrders.html";
  };
})
.controller("ordersCtrl", function($scope, $http, ordersUrl){
  $http.get(ordersUrl,{
      withCredentials: true
    })
    .success(function(data){
      $scope.orders = data;
    })
    .error(function(error){
      $scope.error = error;
    });

  $scope.selectedOrder;
  $scope.selectOrder = function(order){
    $scope.selectedOrder = order;
  };

  $scope.calcTotal = function(order){
    var total = 0;
    for (var i = 0; i < order.cats.length; i++){
      total +=
        order.cats[i].count * order.cats[i].worth;
    }
    return total;
  }
});
