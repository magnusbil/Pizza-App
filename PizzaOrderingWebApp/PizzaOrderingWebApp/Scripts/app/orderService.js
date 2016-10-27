app.factory('orderService', function ($resource) {
    return {
        getAllOrders: function () {
            return $resource('api/orders').get();
        },
        addOrder: function (order) {
            $resource('api/order').save(order);
        }
    }
});