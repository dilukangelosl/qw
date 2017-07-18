'use strict';


app.controller('View1Ctrl', function($scope,localStorageService,$state,$mdSidenav){
  var loginkey = localStorageService.get("login");

  if(!loginkey){
        $state.go("login");
  }

  $scope.logout = function(){
      localStorageService.remove("login");
      $state.go("login");
  }

  $scope.toggle = function(){
      console.log("close")
      $mdSidenav('left')
          .toggle()
  }
});