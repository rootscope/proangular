angular.module("catApp")
.constant("catListActiveClass", "btn-primary")
.controller("catListCtrl", function($scope, $filter, catListActiveClass){
  var selectedCategory = null;

  $scope.selectCategory = function(newCategory){
    selectedCategory = newCategory;
  }

  $scope.categoryFilterFn = function(cat){
    return selectedCategory == null || cat.breed == selectedCategory;
  }

  $scope.getCategoryClass = function(category){
    return selectedCategory == category ? catListActiveClass : "";
  }
});