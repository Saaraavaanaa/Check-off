(
    function() {
        angular.module('checkOffApp', [])
            .controller('toBuyController', toBuyController)
            .controller('alreadyBoughtController', alreadyBoughtController)
            .service('buyBoughtServer', buyBoughtServer);

        toBuyController.$inject = ['buyBoughtServer'];

        function toBuyController(buyBoughtServer) {
            var toBuy = this;
            toBuy.items = [{
                    name: 'litres of milk',
                    quantity: 3
                },
                {
                    name: 'kilos of apples',
                    quantity: 2
                },
                {
                    name: 'eggs',
                    quantity: 5
                },
                {
                    name: 'toilet rolls',
                    quantity: 4
                },
                {
                    name: 'kilos of bananas',
                    quantity: 3
                },
                {
                    name: 'litres of orange juice',
                    quantity: 4
                }
            ];
            toBuy.moveItem = function(itemIndex) {
                buyBoughtServer.moveItem(itemIndex, toBuy.items);
            }


        };

        alreadyBoughtController.$inject = ['buyBoughtServer'];

        function alreadyBoughtController(buyBoughtServer) {
            var alreadyBought = this;
            alreadyBought.items = buyBoughtServer.items;
        };

        function buyBoughtServer() {
            var buyBought = this;
            buyBought.items = [];
            buyBought.moveItem = function(itemIndex, arrayOfitems) {
                var item = {
                    name: '',
                    quantity: ''
                }
                item.name = arrayOfitems[itemIndex].name;
                item.quantity = arrayOfitems[itemIndex].quantity;
                arrayOfitems.splice(itemIndex, 1);
                buyBought.items.push(item);
            };

        };
    }
)();