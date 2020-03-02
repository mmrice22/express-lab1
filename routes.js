const express = require("express");
const cartRoute = express.Router();

const cart = [
  {
    id: 0,
    product: "avocado",
    price: 1.0,
    quanity: 1
  },
  {
    id: 1,
    product: "green pepper",
    price: 0.79,
    quanity: 2
  },
  {
    id: 2,
    product: "apple",
    price: 1,
    quanity: 5
  },
  {
    id: 3,
    product: "pita chips",
    price: 3.0,
    quanity: 1
  },
  {
    id: 4,
    product: "goat cheese",
    price: 6.0,
    quanity: 1
  }
];

// response JSON an array of cart items
cartRoute.get("/cart", (request, response) => {
  response.status(200);
  response.json(cart);
});

// get cart items by id
cartRoute.get("/cart/:id", (request, response) => {
  let id = parseInt(request.params.id);
  let foundItem = cart.find(cart => cart.id === id);
  if (foundItem) {
    response.status(200);
    response.json(foundItem);
  } else {
    response.status(404);
    response.send(`ID ${id} Not Found`);
  }
});

// add a cart item to the array
cartRoute.post("/cart", (request, response) => {
  let newItem = request.body;
  newItem.id = newId;
  newId++;
  cart.push(newItem);
  response.status(201);
  response.json(cart);
});

// update cart item put
cartRoute.put("/cart/:id", (request, response) => {
  let id = parseInt(request.params.id);
  let updatedItem = request.body;
  updatedItem.id = id;
  let index = cart.findIndex(item => item.id === id);
  if (index >= 0) {
    cart.splice(index, 1, updatedItem);
    response.status(200);
    response.json(cart);
  } else {
    response.status(404);
  }
});

// remove item from array using the given id
cartRoute.delete("/cart/:id", (request, response) => {
  let id = parseInt(request.params.id);
  let index = cart.findIndex(item => item.id === id);
  if (index >= 0) {
    cart.splice(index, 1);
    response.sendStatus(204);
  } else {
    response.status(404);
    response.send(`There is no item by id: ${id}`);
  }
});

module.exports = cartRoute;
