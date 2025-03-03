/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
let name = "pizzaPlanet";
const pizzaToppings = ["Pepperoni", "Mushrooms", "Onions", "Sausage"];

function greet(name, pizzaToppings) {
  let greeting = `Welcome to ${name}, our toppings are`;
  for (let topping of pizzaToppings) {
    greeting += ` ${topping},`;
  }
  console.log(greeting);
}
greet(name, pizzaToppings);

function getPizzaOrder(size, crust, ...toppings) {
  let order = `One ${size} ${crust} with `;
  for (let topping of toppings) {
    order += `${topping}, `;
  }
  console.log(order);
  return [size, crust, toppings];
}
let argumentSize = "14 inch";
let argumentCrust = "thin crust";
getPizzaOrder(argumentSize, argumentCrust, "Pepperoni", "Mushrooms", "Onions");

function preparePizza(size, crust, toppings) {
  console.log("cooking pizza");
  const pizza = {
    size: size,
    crust: crust,
    toppings: toppings
  }
  return pizza;
}
let pizza = preparePizza(argumentSize, argumentCrust, ["Pepperoni", "Mushrooms", "Onions"]);

function servePizza(pizzaObject) {
  let message = `Order up! Here's your ${pizzaObject.size} ${pizzaObject.crust} with `;
  for (let topping of pizzaObject.toppings) {
    message += `${topping}, `;
  }
  console.log(`${message} Enjoy!`);
  return pizzaObject;
}
servePizza(pizza);
