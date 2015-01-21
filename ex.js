angular.module("exApp", [])
.controller("dayCtrl", function($scope){
  var days = ["sun","mon","tue","wed","thu","fri","sat"];
  $scope.day = days[new Date().getDay()];
  $scope.wtf = "wtf";
})
.controller("tomorrowCtrl", function($scope){
  var days = ["sun","mon","tue","wed","thu","fri","sat"];
  $scope.tomorrow = days[(new Date().getDay() + 1) % 7];
})
.directive("highlight", function($filter){
  var dayFilter = $filter("dayName");

  return function(scope, element, attrs){
    if(scope.day == attrs["highlight"]){
      element.css("color", "red");
    }
  }
})
.filter("dayName", function(){
  var days = ["sun","mon","tue","wed","thu","fri","sat"];
  return function(input){
    return angular.isNumber(input) ? dayNames[input] : input;
  };
})
.service("days", function(){

});