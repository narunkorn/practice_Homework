//ทดลองใช้ reduce function และ chaining

//Array.reduce
let myNumber = [20, 50, 80];
let newNumber = myNumber.reduce((sum, number) => {
    return sum + number
})
console.log(newNumber);//150



//Chaining
let numbers = [10, 20, 30, 40];

function sum(number) {
    return number + 10
}

function filter(number) {
    return number > 20
}

function reduce(sum, number) {
    return sum + number
}

const sumnumber = numbers
    .map(sum)//[20,30,40,50]//
    .filter(filter)//[30,40,50]
    .reduce(reduce);//120

const sumnumber = numbers.map((number) => {
    return number + 10;//[20,30,40,50]
}).filter((number) => {
    return number >= 40;// [40,50]
}).reduce((sum, number) => {
    return sum + number;//90
}, 0);



console.log(sumnumber);// การทำงานของ functionสุดท้าย ผลลัพธ์จะได้ 120






