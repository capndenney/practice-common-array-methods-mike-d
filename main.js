//Task 1
let orders = [
    ["Latte", "Tea", "Espresso"],
    ["Croissant", "Muffin", "Bagel"]
];

//Task 2
console.log(orders[0].length, orders[1].length);

//Task 3
console.log(`One popular combination is a ${orders[0][2]} and a ${orders[1][0]}`);
console.log(`Our last order today was a ${orders[0][2]} and a ${orders[1][2]}`);
console.log(`Our first order today was a ${orders[0][0]} and a ${orders[1][0]}`);

//Task 4
console.log("Task 4");
for (let i = 0; i < orders.length; i++){
    for (let j = 0; j < orders[i].length; j++) {
        console.log(orders[i][j]);
    }
}

//Task 5
console.log("Task 5");
for (let i = 0; i < orders[0].length; i++) {
    console.log(orders[0][i]);
}

//Task 6  The terminology for what you're looking for here was very confusing to me. 
orders[0].push("Flat White");
console.log(`There are ${orders[0].length} drink orders`);

let drinksIndex = 0;
let searchOrder = "Flat White"
if (orders[drinksIndex].includes(searchOrder) === false) {
    console.log(`${searchOrder} is not in the list`);
} else {
let orderFinder = orders[0].indexOf(searchOrder); 
console.log(orders[drinksIndex][orderFinder]);
}