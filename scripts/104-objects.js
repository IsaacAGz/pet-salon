// Primitive / Basic

let name = "Isaac";
let lastName = "Angulo";
let age = 28;
let isStudent = true;

let name1 = "Fernanda"
let lastName1 = "Murillo";
let age1 = 25;
let isStudent1 = false;

// Non-Primitive / Advance

//OBJECT LITERAL -> key-value pairs
let student = {
    name: "Isaac",
    lastName: "Angulo",
    age: 28,
    isStudent: true
};

let student1 = {
    name: "Fernanda",
    lastName: "Murillo",
    age: 25,
    isStudent: false
};

// Acces to the values -> .
//ObjectName.property

console.log(student.name);

console.log(student.age);

console.log(student.lastName);

console.log(student.isStudent);

// INTERPOLATION
console.log(`Hello, my name is ${student.name} ${student.lastName}, and I am ${student.age} years old`);

let p = document.getElementById("intro");
p.innerHTML = `Hello, my name is ${student.name} 
    ${student.lastName}, and I am ${student.age} years old`;

let dogShampoo = {
    name: "Toto's Furry",
    category: "Hygene",
    price: 14.99,
    inStock: true
};

let dogBone = {
    name: "Big Bites",
    category: "Food",
    price: 9.99,
    inStock: false
};

let dogLeash = {
    name: "Bark Lasso",
    category: "Utilities",
    price: 12.99,
    inStock: true
};

document.getElementById("shampoo").innerHTML = `Product: ${dogShampoo.name} is back in stock, special offer $${dogShampoo.price}.`;
document.getElementById("bone").innerHTML = `Product: ${dogBone.name} is back sold out, please check again later.`;
document.getElementById("leash").innerHTML = `${dogLeash.name} now on sale, special offer $${dogLeash.price}.`;