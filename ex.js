var exApp = angular.module("exApp", []);
exApp.controller("dayCtrl", function($scope) {
  var days = ["sun","mon","tue","wed","thu","fri","sat"];
  $scope.day = days[new Date().getDay()];
  $scope.tomorrow = days[(new Date().getDay() + 1) % 7];
  $scope.wtf = "wtf";
});