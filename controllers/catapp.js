angular.module("catApp", ["customFilters"]);

angular.module("catApp")
  .controller("catAppCtrl", function($scope) {
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
        breed: "maine coon",
        worth: 202
      }]
    };
  });
