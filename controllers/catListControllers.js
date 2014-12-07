angular.module("catApp")
.constant("catListActiveClass", "btn-success")
.constant("pageListActiveClass", "btn-success")
.constant("catListPageCount", 3)
.controller("catListCtrl", function($scope, $filter,
  catListActiveClass, pageListActiveClass, catListPageCount){
  var selectedCategory = null;

  $scope.selectedPage = 1;
  $scope.pageSize = catListPageCount;

  $scope.selectCategory = function(newCategory){
    selectedCategory = newCategory;
    $scope.selectedPage = 1;
  }

  $scope.selectPage = function(newPage){
    $scope.selectedPage = newPage;
  }

  $scope.categoryFilterFn = function(cat){
    return selectedCategory == null || cat.breed == selectedCategory;
  }

  $scope.getCategoryClass = function(category){
    return selectedCategory == category ? catListActiveClass : "";
  }

  $scope.getPageClass = function(page){
    return $scope.selectedPage == page ? pageListActiveClass : "";
  }
});