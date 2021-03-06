angular.module("catApp")
.controller("cartSummaryCtrl", function($scope, cart) {
  $scope.cartData = cart.getCats();

  $scope.total = function() {
    var total = 0;
    for (var i = 0; i < $scope.cartData.length; i++) {
      total += ($scope.cartData[i].worth * $scope.cartData[i].count);
    }
    return total;
  }

  $scope.remove = function(id) {
    cart.removeCat(id);
  }
});
