let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newarr = arr.filter((number) => {
    let num = number % 2;
    return !num;
}).map((number) => {
    return number * 1000;
});
console.log(newarr);//[ 2000, 4000, 6000, 8000, 10000 ]//
