angular.module("catApp")
.controller("catListCtrl", function($scope, $filter){
  var selectedCategory = null;
  
  $scope.selectCategory = function(newCategory){
    selectedCategory = newCategory;
  }

  $scope.categoryFilterFn = function(cat){
    return selectedCategory == null || cat.breed == selectedCategory;
  }
});