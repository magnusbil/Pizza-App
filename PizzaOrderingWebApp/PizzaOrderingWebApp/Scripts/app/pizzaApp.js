var app = angular.module('PizzaApp', ['ngResource', 'ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.
    state('order', {
        url: '/',
        templateUrl: '/Scripts/app/OrderPage.html',
        controller: 'OrderController'
    }).
    state('orderComplete',
    {
        url: '/complete',
        templateUrl: '/Scripts/app/OrderComplete.html',
        controller: 'OrderCompleteController'
    });
});

app.service('orderService', function($resource) {
    return {
        getAllOrders: function () {
            return $resource('../api/Orders').query();
        },
        addOrder: function (order) {
            $resource('../api/Orders').save(order);
        }
    }
});

app.controller('OrderController', function ($scope, $state, orderService, $timeout) {
    var id = guid();
    today = new Date();
    $scope.currentOrder = {
        orderId: id,
        orderDate : null,
        phoneNumber: "",
        name: "",
        deliveryDate: null,
        pizzasOrdered: 1
    }
    
    $scope.completeOrder = function () {
        if ($scope.currentOrder.phoneNumber != "" && $scope.currentOrder.deliveryDate != null) {
            $scope.currentOrder.orderDate = new Date();
            $scope.currentOrder.deliveryDate.setHours($scope.currentOrder.deliveryDate.getHours() - 5)
            $scope.currentOrder.orderDate.setHours($scope.currentOrder.orderDate.getHours() - 5)
            orderService.addOrder($scope.currentOrder);
            $timeout(function () {
                $state.go('orderComplete');
            }, 500);
        }
    }

    function guid() {
        return Math.random().toString(16);
    }
});

app.controller('OrderCompleteController', function ($scope, orderService) {
    $scope.allOrders = [];
    orderService.getAllOrders().$promise.then(function (data) {
        $scope.allOrders = data;
        //had issues getting date's to display correctly so I'm converting them strings
        for (var i = 0; i < $scope.allOrders.length; i++) {
            var index = $scope.allOrders[i].OrderDate.indexOf('T');
            $scope.allOrders[i].OrderTime = $scope.allOrders[i].OrderDate.toString().substring(index+1, index+6);
            $scope.allOrders[i].OrderDate = $scope.allOrders[i].OrderDate.toString().substring(0, index);
        }
    });

    
});
