var exApp = angular.module("exApp", []);
exApp.constant("lol", function(){
  var s = "";
  for(var i = 0; i < 10; i++){
    if(i % 3 == 0){
      s += "f";
    }
    else if(i % 2 == 0){
      s += "t";
    }
    else{
      s += "w";
    }
  }
  return s;
});

exApp.controller("dayCtrl", function($scope, lol) {
  $scope.lol = lol;
  $scope.wtf = "wtf";
});