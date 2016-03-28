/**
 * Created by pallali on 26/3/16.
 */

/*
var app=angular.module("myform" ,[]);
app.controller("ExampleController" ,['$scope', function ($scope) {
    $scope.master={};
    $scope.update=function (user) {

        $scope.master=angular.copy(user);
    };
    $scope.reset=function (form) {

        if(form)
        {
            form.$setPristine();
            form.$setTouched();
        }
        $scope.user=angular.copy($scope.master);
    }
    $scope.reset();
}])*/

(function(angular) {
    'use strict';
    angular.module('myform', [])
        .controller('ExampleController', ['$scope', function($scope) {
            $scope.master = {};

            $scope.update = function(user) {
                $scope.master = angular.copy(user);
            };

            $scope.reset = function(form) {
                if (form) {
                    form.$setPristine();
                    form.$setUntouched();
                }
                $scope.user = angular.copy($scope.master);
            };

            $scope.reset();
        }]);
})(window.angular);
