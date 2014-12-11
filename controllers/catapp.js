angular.module("catApp", ["customFilters", "cart", "ngRoute"])
.constant("dataUrl", "http://localhost:5500/cats")
.constant("orderUrl", "http://localhost:5500/orders")
.config(function($routeProvider){
  $routeProvider.when("/complete", {
    templateUrl: "/views/ty.html"
  });
  $routeProvider.when("/placeorder", {
    templateUrl: "/views/placeOrder.html"
  });
  $routeProvider.when("/checkout", {
    templateUrl: "/views/checkoutSummary.html"
  });
  $routeProvider.when("/cats", {
    templateUrl: "/views/catList.html"
  });
  $routeProvider.otherwise({
    templateUrl: "/views/catList.html"
  });
})

.controller("catAppCtrl", function($scope, $http, $location, dataUrl, orderUrl, cart) {
  $scope.data = {};

  $http.get(dataUrl).success(function(data){
    $scope.data.cats = data;
  })
  .error(function(error){
    $scope.data.error = error;
  });

  $scope.sendOrder = function(shippingDetails){
    var order = angular.copy(shippingDetails);
    order.cats = cart.getCats();
    $http.post(orderUrl, order).success(function(data){
      $scope.data.orderId = data.id;
      cart.getCats().length = 0;
    })
    .error(function(error){
      $scope.data.orderError = error;
    })
    .finally(function(){
      $location.path("/complete");
    });
  }

});
