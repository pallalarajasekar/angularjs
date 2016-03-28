/**
 * Created by pallali on 26/3/16.
 */
var app=angular.module("myapp",[]);
app.controller("mycontroller",['$scope',function ($scope) {

    $scope.customer={

        name : 'Pallala Rajasekar',
        address: 'Bangalore-600061'
    };
}])
        .directive('myDirective' ,function () {
            return{
                template: 'Name:{{customer.name}} Address:{{customer.address}}'
            };

    });
