/// <reference path="angular.min.js" />
angular
    .module("myApp", ['ngMaterial', 'ngRoute', 'angular.filter','ngMap'])
    .controller("mainController", ["$scope", "$http", function ($scope, $http) {
        $scope.active = true;
        $scope.tab = 1;
        $scope.albId = 0;
        $scope.curID = 0;
        $http.get("http://jsonplaceholder.typicode.com/users")
        .then(function (response) {
            $scope.users = response.data;
        });

        $http.get("http://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
            $scope.posts = response.data;
        });

        $http.get("http://jsonplaceholder.typicode.com/comments")
        .then(function (response) {
            $scope.comments = response.data;
        });

        $http.get("http://jsonplaceholder.typicode.com/photos")
        .then(function (response) {
            $scope.photos = response.data;
        });

        $scope.setTab = function (id) {
            $scope.tab = id;
            console.log($scope.tab);
        };

        $scope.idGet = function (albId) {
            $scope.albId = albId;
            console.log($scope.albId);
        };

        $scope.collapseAll = function (data) {
            for (var i in $scope.accordianData) {
                if ($scope.accordianData[i] != data) {
                    $scope.accordianData[i].expanded = false;
                }
            }
            data.expanded = !data.expanded;
        };

    }])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/album', {
                templateUrl: '/album.html',
                controller:'mainController'
            });
    });
    