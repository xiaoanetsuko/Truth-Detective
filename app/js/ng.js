
(function() {
    var app = angular.module("store", []);

    app.controller("StoreController", function() {
       this.product = gem;
    });

    var gem = [
        {
            name: "Dodecahedron",
            price: 2.95,
            description: ".....",
            canPurchase: false,
            soldOut: false,
        },
        {
            name: "Pentagonal Gem",
            price: 5.95,
            description: "hahahah",
            canPurchase: false,
            soldOut: false,
        }
    ];
}) ();
