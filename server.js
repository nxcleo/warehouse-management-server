const express = require('express');
const url = require('url');
const app = express();


class db {
    constructor()
    {
        this.items = []
        this.newItem("Nvidia GTX1080 8GB", 4, 799)
        this.newItem("Nvidia GTX1070 8GB", 7, 649)
    };

    get length()
    {
        return this.items.length;
    };

    get all()
    {
        return this.items
    };

    newItem(name, quantity, price)
    {
        this.items.push({
            id:  guid(),
            name: name,
            quantity: quantity,
            price: price
        });
    };

    deleteItem()

};
