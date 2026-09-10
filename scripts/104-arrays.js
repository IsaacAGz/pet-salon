console.log("hello world!");

// Define the array
let namesList = ["Fernanda", "Tato", "Walter", "Rocky"];

for (let i = 0; i < namesList.length; i++) {
    console.log(namesList[i]);
}

namesList[0] = "Maria Fernanda";

for (let i = 0; i < namesList.length; i++) {
    namesList[i] = "Person " + namesList[i]
    console.log(namesList[i]);
}

//========== Array Objects =============

let productArray = [
    {
        name: "Toto's Furry",
        category: "Hygene",
        price: 14.99,
        inStock: true
    },

    {
        name: "Big Bites",
        category: "Food",
        price: 9.99,
        inStock: false
    },

    {
        name: "Bark Lasso",
        category: "Utilities",
        price: 12.99,
        inStock: true
    }
]

for (let i = 0; i < productArray.length; i++) {
    console.log(productArray[i].name);
}

console.log(productArray[0].name);
console.log(productArray[0].category);


console.log("======================================");
console.log(`Hey, this is ${productArray[0].name} and I am a ${productArray[0].category} product`);

