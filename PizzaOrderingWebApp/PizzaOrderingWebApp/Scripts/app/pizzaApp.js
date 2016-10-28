var app = angular.module('PizzaApp', ['ngResource', 'ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.
       when('/', {
           templateUrl: '/Scripts/app/OrderPage.html',
           controller: 'OrderController'
       }).
       when('/order-complete', {
           tempalteUrl: '/Scripts/app/OrderComplete.html',
           controller: 'OrderCompleteController'
       }).
       otherwise({
           redirectTo: '/'
       });
});

app.service('orderService', function($resource) {
    return {
        getAllOrders: function () {
            return $resource('api/Orders').get();
        },
        addOrder: function (order) {
            $resource('api/Orders').save(order);
        }
    }
});

app.controller('OrderController', function ($scope, orderService) {
    var id = guid();

    $scope.currentOrder = {
        orderId: id,
        phoneNumber: "",
        name: "",
        deliveryDate: null,
        pizzasOrdered: 1
    }
    
    $scope.completeOrder = function () {
        orderService.addOrder($scope.currentOrder);
        //$location.path('/order-complete');
        console.log($scope);
    }

    function guid() {
        return Math.random().toString(16);
    }
});

app.controller('OrderCompleteController', function ($scope, orderService) {
    $scope.allOrders = [];

    orderService.getAllOrders().$promise.then(function (data) {
      $scope.allOrders = data.content;
    });
});
