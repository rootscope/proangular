angular.module("catApp", ["customFilters"]);

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

    /*
    $scope.data = {
      cats: [{
        name: "cat #1",
        desc: "a standard cat",
        breed: "persian",
        worth: 100
      },{
        name: "cat #2",
        desc: "a standard cat",
        breed: "shorthair",
        worth: 110
      },{
        name: "cat #3",
        desc: "a standard cat",
        breed: "saimese",
        worth: 210
      },{
        name: "cat #4",
        desc: "a standard cat",
        breed: "persian",
        worth: 290
      },{
        name: "cat #5",
        desc: "a standard cat",
        breed: "maine coon",
        worth: 202
      }]
    };
    */

  });
