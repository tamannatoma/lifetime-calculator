//exercise 
function exercise() {
    let Name = "Rumon";
    let currentAge = 37;
    let maxAge = 65;
    let amountperWeek = 5;

    const leftAge = maxAge - currentAge;
    const leftWeek = leftAge * 365 / 7;
    const totalPotatos = leftWeek * amountperWeek;
    console.log(`${Name} has ${currentAge} years and will eat ${totalPotatos} potatoes until age of ${maxAge}`);
}
exercise();

//exercise 1

const user = {
    Name: "John",
    currentAge: 32,
    maxAge: 65,
    amountperWeek: 5

};
const leftAge = user.maxAge - user.currentAge;
const leftWeek = leftAge * 365 / 7;
const totalPotatos = leftWeek * user.amountperWeek;
console.log(`${user.Name} has ${user.currentAge} years and will eat ${totalPotatos} potatoes until age of ${user.maxAge}`);


const userOne = {
    Name: "John",
    currentAge: 32,
    maxAge: 65,
    amountperWeek: 5

};

const usertwo = {
    Name: "Don",
    CurrentAge: 28,
    maxAge: 65,
    amountperWeek: 6

};
const userThree = {
    Name: "BOn",
    CurrentAge: 29,
    maxAge: 65,
    amountperWeek: 7

};

//exercise 2
function totalAmount(Name, currentAge, maxAge, amountperWeek) {
    const leftAge = maxAge - currentAge;
    const leftWeek = leftAge * 365 / 7;
    const totalPotatos = leftWeek * amountperWeek;
    return console.log(`${Name} has ${currentAge} years and will eat ${totalPotatos} potatoes until age of ${maxAge}`);
}

totalAmount("tamanna", 30, 65, 5);

//exercise 3
const threeVariable = {
    message1: "My name is Tamanna",
    message2: "I am from Bangladesh",
    message3: "Now I live in Spain"

};

console.log(threeVariable.message1);
console.log(threeVariable.message2);
console.log(threeVariable.message3);

//array function remove space
let res1;
const myNewfunction = (string) => {

    res1 = string.replaceAll(" ", "");
    return res1;
}

myNewfunction("8 j 8   mBliB8g  imjB8B8  jl  B");
console.log(res1);

