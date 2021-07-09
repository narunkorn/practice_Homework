//ลองใช้ Spread Operator
//ลองใช้รวม array มากกว่า 2 array ขึ้นไป

let firstName = ['Narunkorn', 'jung', 'bbb'];
let lastName = ['Viboonkitarpakul'];
let nickName = ['new']
let myName = [...firstName, ...lastName, ...nickName];
// console.log(myName);//[ 'Narunkorn', 'Viboonkitarpakul', 'new' ]

let num1 = [2, 3, 4, 5, 6];
let num2 = [1, 3, 5, 7, 9];
let num3 = [4, 5];
let num4 = [...num1, ...num2, ...num3];
// console.log(num4);// [2, 3, 4, 5, 6, 1, 3, 5, 7, 9, 4, 5]


// การต่อstring ด้วย Multi-line string shorthand//
let m = `My name is ${firstName.join('---')} ${lastName[0]}.My friends call me ${nickName[0]}`;
console.log(m);//My name is Narunkorn Viboonkitarpakul.My friends call me new
