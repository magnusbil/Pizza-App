var app = angular.module('PizzaApp', []);

app.controller('OrderController', function ($scope) {
    $scope.allOrders = [];
    $scope.isOrderInProgress = true;
    $scope.completeOrder = function () {
        //create order from form data
        //call orderService.addOrder
        //add order to allOrders
        //set isOrderInProgress to false
    }
});

app.factory('orderService', function ($resource) {
    return {
        getAllOrders: function () {
            return $resource('api/orders').get();
        },
        addOrder: function (order) {
            $resource('api/order').save(order);
        }
    }
})