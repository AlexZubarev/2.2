'use strict';

angular
    .module('myApp')
    .controller('MyAccountCtrl', ['$scope', function ($scope) {
        var vm = this;
        $scope.submit = function () {
            if($scope.myaccount.valid) {
                console.log($scope.myaccount);
            }
        }
    }]);
