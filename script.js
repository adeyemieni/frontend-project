let name = "Adeyemi";
let age = 20;
let isStudent = true;
console.log (name);
console.log (age);
console.log (isStudent);
age = 20;
console.log (age);
let message = "My name is " + name + " and i am " + age + " years old.";
console.log (message);
let a = 10;
let b = 5;
let score=80
console.log (a+b);
console.log (a-b);
console.log (a*b);
console.log (a/b);
console.log (a>b);
console.log (a<b);
console.log (a===b);
console.log (a!==b);
//testing if statement
if (age>18) {
    console.log ("You are an adult");
}
if (age>18) {
    console.log("You are an adult");
} else {
console.log("You are underage")    
}
if (score>=80) {
    console.log("Excellent");
}else if (score>=50) {
    console.log("Pass");
}else {
    console.log("Fail")
}
if (age>=18) {
    console.log("You can enter");
}else{
    console.log("Access denied");
}
let username="Adeyemi";
let password="1234";
if (username==="Adeyemi"&&password==="1234") {
    console.log("Login successful");
} else {
    console.log("Invalid credentials");
}
for (let i = 1; i<=5; i++) {
    console.log (i);
}
for (let i=1; i<=10; i++) {
    if (i%2===0) {
        console.log(i)
    }
}
let fruits=["Apple", "Banana", "Mango"];
for (let i = 0; i<fruits.length; i++) {
    console.log (fruits[i]);
}
let products=["Hair Cream", "Wig", "Shampoo"];
for (let i=0; i<products.length; i++) {
    console.log ("Product:", products[i]);
} 
let i=1;
while (i<=5) {
    console.log(i);
    i++;
}
let numbers=[2,4,6,8,10];
for (let i=0; i<numbers.length; i++) {
    console.log(numbers[i]*2);
}
function sayHello() {
    console.log("Hello");
}
sayHello();
sayHello();
sayHello();
//Function with parameter (below)
function greet(name) {
    console.log("Hello " + name);
}
greet("Adeyemi");
greet("Damian");
//name is a parameter (above)
function add(a, b) {
    return a+b;
}
let result=add(5, 3);
console.log(result);
function calculateTotal(price, quantity) {
    return price * quantity;
}
let total=calculateTotal(5000, 2);
console.log("Total price:", total);
//how to calculate carts totals (above)
//function + condition (below) 
function checkAge(age) {
    if (age>=18) {
        return "Adult";
    }else {
        return "Minor";
    }
}
console.log(checkAge(20));
const add=(a, b)=> {
    return a+b;
};
console.log(add(2, 3));
function isEven(number) {
    if
}