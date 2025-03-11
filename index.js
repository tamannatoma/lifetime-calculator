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
/*
const person1 = {
    Name: "John",
    CurrentAge: 27,
    maxAge: 65,
    amountperWeek: 5

};
const person2 = {
    Name: "Don",
    CurrentAge: 28,
    maxAge: 65,
    amountperWeek: 6

};
const person3 = {
    Name: "BOn",
    CurrentAge: 29,
    maxAge: 65,
    amountperWeek: 7

};*/

//exercise 2
function totalAmount(Name, currentAge, maxAge, amountperWeek) {
    const leftAge = maxAge - currentAge;
    const leftWeek = leftAge * 365 / 7;
    const totalPotatos = leftWeek * amountperWeek;
    return console.log(`${Name} has ${currentAge} years and will eat ${totalPotatos} potatoes until age of ${maxAge}`);
}

totalAmount("tamanna", 30, 65, 5);

//exercise 3

function variableOne() {
    let firstOne;
    firstOne = console.log("Hello");
}
variableOne();


function variableTwo() {
    let secondOne;
    secondOne = console.log("World");
}
variableTwo();

function variableThree() {
    let thirdOne;
    thirdOne = console.log("Happy");
}
variableThree();

//array function remove space

const myNewfunction = (string) => {
    let res1;
    res1 = string.replaceAll(" ", "");
    return console.log(res1);
}
myNewfunction("8 j 8   mBliB8g  imjB8B8  jl  B");
