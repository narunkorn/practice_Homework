const input1 = [1, 2, 3];
const input2 = { a: 1, b: 2 };
const input3 = [1, 2, { a: 1, b: 2 }];
const input4 = [1, 2, { a: 1, b: { c: 3, d: 4 } }];

function cloneObj(obj) {
    if (typeof obj === "object") {
        if (Array.isArray(obj)) {
            let newArray = [];  //[1,2]
            //[1, 2, { a: 1, b: { c: 3, d: 4 } }]
            for (let index in obj) {
                //index 0,1,2
                //obj[index] 1,2,{a: 1, b: { c: 3, d: 4 }}
                if (Array.isArray(obj[index])) {
                    newArray[index] = [];
                    for (let index2 in obj[index]) {
                        if (Array.isArray(obj[index][index2])) {
                            newArray[index][index2] = [];
                            for (let index3 in obj[index][index2]) {
                                newArray[index][index2].push(obj[index][index2][index3]);
                            }
                        } else {
                            newArray[index].push(obj[index][index2]);
                        }
                    }
                } else if (typeof obj[index] === 'object') {
                    let newObj = {};//{a:1}
                    let keys = Object.keys(obj[index]);
                    //keys ["a","b"]
                    for (let key of keys) {
                        // key "a","b"
                        if (typeof obj[index][key] === 'object') {
                            let newObj2 = {};//{c:3,d:4}
                            let keys2 = Object.keys(obj[index][key]);
                            // keys2 ["c","d"]
                            for (let key2 of keys2) {
                                newObj2[key2] = obj[index][key][key2];//3,4
                            }
                            newObj[key] = newObj2;

                        } else {
                            newObj[key] = obj[index][key];//1,{ c: 3, d: 4}
                        }
                    }
                    newArray.push(newObj);
                }
                else {
                    newArray.push(obj[index]);
                }
            }
            return newArray;
        } else {
            let newObj = {}
            let keys = Object.keys(obj);
            console.log(keys)
            // keys  = ['a','b']
            for (let key of keys) {
                // key 'a' 'b'
                console.log('key', key)
                // key เป็น "a"
                newObj[key] = obj[key];// 1 ,2
                // newObj {a:1,b:2}
            }


            return newObj;
        }

    }
}
const newObj1 = cloneObj(input1);
const newObj2 = cloneObj(input2);
const newObj3 = cloneObj(input3);
const newObj4 = cloneObj(input4);
console.log("--- Before ---");
console.log("input1 : ", input1);
console.log("newObj1 : ", newObj1);
console.log("input2 : ", input2);
console.log("newObj2 : ", newObj2);
console.log("input3 : ", input3);
console.log("newObj3 : ", newObj3);
console.log("input4 : ", input4);
console.log("newObj4 : ", newObj4);
newObj1[2] = 555;
newObj2["b"] = 555;
newObj3[2]["b"] = 555;
newObj4[2]["b"]["d"] = 555;
console.log("--- After ---");
console.log("input1 : ", input1);
console.log("newObj1 : ", newObj1);
console.log("input2 : ", input2);
console.log("newObj2 : ", newObj2);
console.log("input3 : ", input3);
console.log("newObj3 : ", newObj3);
console.log("input4 : ", input4);
console.log("newObj4 : ", newObj4);