(
    function() {
        angular.module('checkOffApp', [])
            .controller('toBuyController', toBuyController)
            .controller('alreadyBoughtController', alreadyBoughtController)
            .service('buyBoughtServer', buyBoughtServer);

        toBuyController.$inject = ['buyBoughtServer'];

        function toBuyController(buyBoughtServer) {
            var toBuy = this;
            toBuy.item = [];
            toBuy.name = "";
            toBuy.quantity = "";
            // toBuy.moveItem = function(itemIndex) {
            //     buyBoughtServer.moveItem(itemIndex, toBuy.items);
            // }
            toBuy.item = buyBoughtServer.items;
            toBuy.moveItem1 = function(itemIndex) {
                buyBoughtServer.move1(itemIndex, toBuy.item)
            }
            toBuy.add = function() {
                buyBoughtServer.add(toBuy.name, toBuy.quantity);
            }


        };

        alreadyBoughtController.$inject = ['buyBoughtServer'];

        function alreadyBoughtController(buyBoughtServer) {
            var alreadyBought = this;
            alreadyBought.items = buyBoughtServer.item;
            alreadyBought.remove = function(itemIndex) {
                buyBoughtServer.delete(itemIndex, alreadyBought.items);
            }
        };

        function buyBoughtServer() {
            var buyBought = this;
            buyBought.items = [{
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
            buyBought.item = [];
            // buyBought.moveItem = function(itemIndex, arrayOfitems) {
            //     var items = {
            //         name: '',
            //         quantity: ''
            //     };
            //     items.name = arrayOfitems[itemIndex].name;
            //     items.quantity = arrayOfitems[itemIndex].quantity;
            //     arrayOfitems.splice(itemIndex, 1);
            //     buyBought.item.push(items);
            // };
            buyBought.delete = function(itemIndex, listItems) {
                var item = {
                    name: '',
                    quantity: ''

                };
                item.name = listItems[itemIndex].name;
                item.quantity = listItems[itemIndex].quantity;
                listItems.splice(itemIndex, 1);
                buyBought.items.push(item);


            };
            buyBought.move1 = function(itemIndex, arrayOfitems) {
                var item = {
                    name: '',
                    quantity: ''
                };
                item.name = arrayOfitems[itemIndex].name;
                item.quantity = arrayOfitems[itemIndex].quantity;
                arrayOfitems.splice(itemIndex, 1);
                buyBought.item.push(item);
            };
            buyBought.add = function(name, quantity) {
                var items = {
                    name: name,
                    quantity: quantity
                };
                buyBought.items.push(items)
            }

        }
    }
)();