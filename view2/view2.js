'use strict';

'use strict';


app.controller('View2Ctrl', function ($scope, $http, $state, localStorageService) {
  var loginkey = localStorageService.get("login");

  if (loginkey) {

    $state.go("home");
  }


  $scope.loginloader = false;

  $scope.login = function (email, pass) {

    $scope.loginloader = true;


    var data = {
      username: email,
      password: pass
    };

    var config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    $http.post('https://quenchloyalty.com:8443/admin/login', data, config)
      .success(function (data, status, headers, config) {

        if (data.length != 0) {
          $scope.loginloader = false;
          var status = localStorageService.set("login", data[0]);
          console.log(status);
          $state.go('home');
        }
        else {
          $scope.loginloader = false;
          alert("Login Failed, Please Contact Admin");
        }
      })
      .error(function (data, status, header, config) {
        $scope.loginloader = false;
        console.log(data);
      });
  };





});