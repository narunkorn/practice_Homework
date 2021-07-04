let input1 = [1, 2, 3];
let input2 = { a: 1, b: 2 };
let input3 = [1, 2, { a: 1, b: 2 }];
let input4 = [1, 2, { a: 1, b: { c: 3, d: 4 } }];
let input5 = [1, 2, [1, 2], [7, 7], 7];
let input6 = [1, 2, [1, 2], [3, 4], 7];
let input7 = { a: 1, b: 2, c: { d: 4, e: 5 } };
let input8 = [1, 2, [1, 2], [7], 7];
let input9 = { a: 1, b: 2, c: { d: 1, e: { f: 3, g: 4 } } };
let input10 = { a: 1, b: 2, c: [7, 8] }

function clone(input) {
    let output = Array.isArray(input) ? [] : {};
    for (let key in input) {
        if (typeof input[key] === 'object') {
            output[key] = clone(input[key]);
        } else {
            output[key] = input[key];
        }
    } return output;
}
console.log("input", input3)
let newinput = clone(input3);
console.log("newinput", newinput);
newinput[2].b = 200;
console.log("_______________________________")
console.log("input", input3);
console.log("newinputedit", newinput);