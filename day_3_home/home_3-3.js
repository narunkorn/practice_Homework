function clone(arr) {
    let newArr = new Object()
    for (let key in arr) {
        if (typeof (arr[key]) == 'object' && typeof (arr[key]) == 'array') {
            newArr[key] = clone(arr[key])
        } else {
            newArr[key] = arr[key]
        }
    }
    return newArr
}
let input1 = [1, 2, 3]
let input2 = { a: 1, b: 2 }
let input3 = [1, 2, { a: 1, b: 2 }]
let input4 = [1, 2, { a: 1, b: { c: 3, d: 4 } }]

let a = clone(input4)
a[2] = 8
// newinput[0] = 8
console.log(input4, 'input1')
console.log(a, "newinput")













// $(document).ready(function () {

//     let test = 'dkdkdkd'


//     $('#myresult').append($(test));
// })




