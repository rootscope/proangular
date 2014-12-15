angular.module("catAppAdmin")
.constant("catUrl", "http://localhost:5500/cats/")
.config(function($httpProvider) {
  $httpProvider.defaults.withCredentials = true;
})
.controller("catCtrl", function($scope, $resource, catUrl) {
  $scope.catsResource = $resource(catUrl + ":id", {
    id: "@id"
  });
  $scope.listCats = function() {
    $scope.cats = $scope.catsResource.query();
  }
  $scope.deleteCat = function(cat) {
    cat.$delete().then(function() {
      $scope.cats.splice($scope.cats.indexOf(cat), 1);
    });
  }
  $scope.createCat = function(cat) {
    new $scope.catsResource(cat).$save().then(function(newCat) {
      $scope.cats.push(newCat);
      $scope.editedCat = null;
    });
  }
  $scope.updateCat = function(cat) {
    cat.$save();
    $scope.editedCat = null;
  }
  $scope.startEdit = function(cat) {
    $scope.editedCat = cat;
  }
  $scope.cancelEdit = function() {
    $scope.editedCat = null;
  }
  $scope.listCats();
});
