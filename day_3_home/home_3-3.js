const input1 = [1, 2, 3];
const input2 = { a: 1, b: 2 };
const input3 = [1, 2, { a: 1, b: 2 }];
const input4 = [1, 2, { a: 1, b: { c: 3, d: 4 } }];

function cloneObj(obj) {
    if (typeof obj === 'object') {
        if (Array.isArray(obj)) {
            let newArr = [];
            for (let index in obj) {
                if (Array.isArray(obj[index])) {
                } else if (typeof obj[index] === 'object') {
                    let newObj = {};
                    let keys = Object.keys(obj[index]);
                    for (let key of keys) {
                        if (typeof obj[index][key] === 'object') {
                            let newObj2 = {}
                            let keys2 = Object.keys(obj[index][key])
                            for (let key2 of keys2) {
                                newObj2[key2] = obj[index][key][key2]
                            } newObj[key] = newObj2
                        } else {
                            newObj[key] = obj[index][key]
                        }
                    } newArr.push(newObj)
                } else {
                    newArr.push(obj[index]);
                }
            } return newArr;
        } else {
            let newObj = {};
            let keys = Object.keys(obj);
            for (key of keys) {
                newObj[key] = obj[key]
            } return newObj;
        }
    }
}
const newObj = cloneObj(input3);
console.log("input1", input3);
console.log("newObj", newObj);
console.log('-------------------------------')
newObj[2]['b'] = 555;
console.log("input1", input3);
console.log("newObj", newObj);




