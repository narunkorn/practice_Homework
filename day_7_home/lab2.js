//ทดลองใช้ map function
let students = ["Bob", "New", "Naroto", "ObOne"];
let studenOfSchool = students.map((student) => {
    return `Mr ${student}`
})
console.log(studenOfSchool)//[ 'Mr Bob', 'Mr New', 'Mr Naroto', 'Mr ObOne' ]

let numbers = [7, 8, 9, 4, 5, 6];
// let newNumber = numbers.map((number) => {
//     return number + 5;
// })
// let newNumber = numbers.map((number) => {
//     let result = number + 5;
//     return result;
// })

// let newNumber = numbers.map((number) => number + 5)//เขียนแบบสั้น
let newNumber = numbers.map(number => number + 5);//เขียนแบบสั้นมากกกกกกกกกกกกกกกก



console.log(newNumber);//[ 12, 13, 14, 9, 10, 11 ];

//ลอง map arr ที่มีสมาชิกเป็น object

