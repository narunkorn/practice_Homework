const input1 = [1, 2, 3];
const input2 = { a: 1, b: 2 };
const input3 = [1, 2, { a: 1, b: 2 }];
const input4 = [1, 2, { a: 1, b: { c: 3, d: 4 } }];
const input5 = [1, 2, [3]];
const input6 = [1, 2, [3, [4]]];
// const input6 = 1;
function cloneObj(obj) {
    if (typeof obj === "object") {
        if (Array.isArray(obj)) {
            let newArray = [];
            for (let index in obj) {
                if (Array.isArray(obj[index])) {
                    newArray[index] = [];
                    // [1,2,[]]

                    for (let index2 in obj[index]) {
                        newArray.push(obj[index][index2]);
                        // [1,2,[],3]
                        newArray[index].push(obj[index][index2]);
                        // [1,2,[3],3]
                    }

                } else {
                    newArray.push(obj[index]);
                }

            }
            return newArray;
        } else {

        }
    }
}



const newObj = cloneObj(input5);

console.log("newObj", newObj);
// newObj[2][1] = 555;
console.log("input1", input5);
console.log("newNewObj", newObj);



// const newObjInput1 = [];
// //array => newObjInput1.push(1)
// // [1]
// //newObjInput1.push(1)
// // [1, 1]
// const newObjInput2 = {};