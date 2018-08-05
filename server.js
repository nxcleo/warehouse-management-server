const express = require('express');
const url = require('url');
const path = require('path');
const app = express();


class db {
    constructor()
    {
        this.items = [];
        this.addItem("Nvidia GTX1080 8GB", 4, 799);
        this.addItem("Nvidia GTX1070 8GB", 7, 649);
    };

    get length()
    {
        return this.items.length;
    };

    get all()
    {
        return this.items
    };

    addItem(name, quantity, price)
    {
        let newItem = {
            id: Math.round(Math.random()*10000),
            name: name,
            quantity: quantity,
            price: price,
            cost: price * quantity
        };
        this.items.push(newItem);
        return newItem;
    };

    deleteItem(id)
    {
        for(let i = 0; i < this.length; i++)
        {
            if(this.items[i].id == id)
            {
                this.items.splice(i,1);
                return true;
            }
        }
        return false;
    };

    totalValue()
    {
        let sum = 0;
        for(let i=0; i<this.length; i++)
        {
            sum += this.items[i].quantity * this.items[i].price;
        }
        return sum;
    };

};

const database = new db();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/listallitems', function (req, res) {
    res.json(database.all);
});

app.get('/delete/:itemid', function (req, res) {
    res.json(database.deleteItem(req.params.itemid));
    console.log("Item " + req.params.itemid + " was removed");
});

app.get('/additem/:name/:quan/:price', function (req, res) {
    let newItem = database.addItem(req.params.name, req.params.quan, req.params.price);
    res.json(newItem);
    console.log("Item " + newItem.id + " was added");
});

app.get('/totalvalue', function (req, res) {
    res.json({totalvalue: database.totalValue()});
});



app.listen(8080);





