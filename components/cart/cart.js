angular.module("cart", [])
.factory("cart", function(){
  var cartData = [];

  return{
    addCat: function(id, name, worth){
      console.log("inside add cat");
      var addedToExistingCat = false;

      for(var i = 0; i < cartData.length; i++){
        if(cartData[i].id == id){
          cartData[i].count++;
          addedToExistingCat = true;
          break;
        }
      }
      if(!addedToExistingCat){
        cartData.push({count: 1, id: id, name: name, worth: worth});
      }
    },
    removeCat: function(id){
      for(var i = 0; i < cartData.length; i++){
        if(cartData[i].id == id){
          cartData.splice(i, 1);
          break;
        }
      }
    },
    getProducts: function(){
      return cartData;
    }
  }
})
.directive("cartSummary", function(cart){
  return{
    restrict: "E",
    templateUrl: "components/cart/cartSummary.html",
    controller: function($scope){
      var cartData = cart.getProducts();

      $scope.total = function(){
        var total = 0;
        for(var i = 0; i < cartData.length; i++){
          total += (cartData[i].worth * cartData[i].count);
        }
        console.log(total);
        return total;
      }

      $scope.catCount = function(){
        var total = 0;
        for(var i = 0; i < cartData.length; i++){
          total += cartData[i].count;
        }
        return total;
      }
    }
  }
});