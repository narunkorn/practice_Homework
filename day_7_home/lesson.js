
//Destructuring Assignment shorthang//
//แบบ Array//
let foo = ['one', 'tow', 'three'];
let [n1, n2, n3] = foo;
console.log(n1);//one//
console.log(n2);//tow//
console.log(n3);//three//

// แบบ Object//
let { c, b } = { c: 1, b: 2 };
console.log(c);//1//
console.log(b);//2//



// functionธรรมดา//
let sum = function (a, b) {
    return a + b;
};
//Arrow function
let sam2 = (a, b) => {
    return a + b;
}
//หรือ
let sam3 = (a, b) => a + b;



//spread operator//
let loo = [1, 2, 3]
let fee = [4, 5, 6];;
let result1 = [loo, fee];
let result2 = [...loo, ...fee];
console.log(result1);//[ [ 1, 2, 3 ], [ 4, 5, 6 ] ]//
console.log(result2);//[ 1, 2, 3, 4, 5, 6 ]//


//Array.map//
let array1 = [1, 4, 9, 16];
const map1 = array1.map(function (x) {
    return x * 2;
});
console.log(map1);//[2, 8, 18, 32]



//Array.filter//
let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => {
    return word.length > 6
});
console.log(result);//[ 'exuberant', 'destruction', 'present' ]


//Array.reduce//
const numbers = [10, 20, 30, 40]
const resultReducer = numbers.reduce((sum, number) => {
    return sum + number
}, 0)
console.log(resultReducer);//100



