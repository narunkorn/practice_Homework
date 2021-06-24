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
                    let newobj = {};
                    let keys = Object.keys(obj[index]);
                    for (key of keys) {
                        if (typeof obj[index][key] === 'object') {
                            let newobj2 = {};
                            let keys2 = Object.keys(obj[index][key]);
                            for (key2 of keys2) {
                                newobj2[key2] = obj[index][key][key2];
                            }
                            newobj[key] = newobj2;
                        } else {
                            newobj[key] = obj[index][key];
                        }
                    }
                    newArr.push(newobj);
                } else {
                    newArr.push(obj[index]);
                }
            }
            return newArr;
        } else {
            if (typeof obj === 'object') {
                let newObj = {}
                let keys = Object.keys(obj)
                for (key of keys) {
                    newObj[key] = obj[key]
                }
                return newObj;
            }
            newArr.push(obj);
        }
    }
}



const newObj = cloneObj(input4);
console.log("input1", input4);
console.log("newObj", newObj);
console.log('-------------------------------')
newObj[2].b.c = 555;
console.log("input1", input4);
console.log("newObj", newObj);




