'use strict';

angular.module('myApp.home', ['ngRoute','firebase'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        });
    }])

    .controller('HomeCtrl', ['$scope',function($scope) {

        $scope.signIn = function(){
            var email = $scope.user.email;
            var password = $scope.user.password;
            firebase.auth().signInWithEmailAndPassword(email,password)
                .then(function(user) {
                    document.getElementById("success").innerHTML = "Authentication successful for " + user.email;
                }, function(error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    document.getElementById("error").innerHTML = "Authentification failure : " + errorCode + " : " + errorMessage;
                });
        }
    }]);