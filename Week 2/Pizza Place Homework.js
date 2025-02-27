//Variables numberOfToppings and pizzaPlace
const pizzaPlace = "Pizza Planet";
let numberOfToppings = 12;

console.log(typeof pizzaPlace);
console.log(typeof numberOfToppings);

console.log(
  `${pizzaPlace} offers ${numberOfToppings} toppings to choose from for your pizza!`
);

if (numberOfToppings >= 10) {
  console.log("A whole lot of pizza.");
} else {
  console.log("Quality, not quantity.");
}

for (let i = 1; i < numberOfToppings; i++) {
  console.log(i * 2);
}
