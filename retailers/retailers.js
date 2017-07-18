'use strict';


app.controller('retailerCtrl', function ($scope, localStorageService, $state, $mdSidenav, $http) {

    $scope.users = [];
    $scope.loading = false;

    $scope.getusers = function () {
        console.log("getting users");
        $scope.loading = true;
        $scope.users = [];

        $http.get('https://quenchloyalty.com:8443/retailers/', {}, {})
            .success(function (data, status, headers, config) {
                $scope.loading = false;

                data.forEach((item) => {
                    $scope.users.push(item);
                    console.log(item);
                })
            })
            .error(function (data, status, header, config) {
                $scope.loading = false;
                console.log(data);
            });


    }

$scope.getusers();

});