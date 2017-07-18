'use strict';

// Declare app level module which depends on views, and components
var app =angular.module('myApp', [
  'ui.router',
  'myApp.version',
  'ngMaterial',
  'LocalStorageModule'
]);

app.config(function($stateProvider,$urlRouterProvider,$locationProvider,localStorageServiceProvider) {
  var homeState = {
    name: 'home',
    url: '/home',
    templateUrl: 'view1/view1.html',
    controller:'View1Ctrl'
  }

  var userState = {
    name: 'home.users',
    url: '/users',
    templateUrl: 'users/users.html',
    controller:'userCtrl'
  }

  var retailerState = {
    name: 'home.retailers',
    url: '/retailers',
    templateUrl: 'retailers/retailers.html',
    controller:'retailerCtrl'
  }

   var login = {
    name: 'login',
    url: '/backendlogin',
    templateUrl: 'view2/view2.html',
    controller:'View2Ctrl'
  }

localStorageServiceProvider
    .setPrefix('quenchadmin');

     localStorageServiceProvider
    .setStorageType('sessionStorage');



    /// Comment out the line below to run the app
    // without HTML5 mode (will use hashes in routes)
//    $locationProvider.html5Mode(true);
  $stateProvider.state(homeState);
  $stateProvider.state(login);
   $stateProvider.state(userState);
    $stateProvider.state(retailerState);
 $urlRouterProvider.otherwise('/home');
});

