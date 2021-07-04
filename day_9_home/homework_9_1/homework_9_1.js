// const fs = require('fs');
function writeBody1() {
    return new Promise((resolve, reject) => {
        fs.writeFile('robot.txt', 'utf8', (err) => {
            if (err)
                reject(err);
            else
                resolve();
        });
    });
}
writeBody1()

// function readBody1() {
//     return new Promise((resolve, reject) => {
//         fs.readFile('robot.text', 'Head.txt', 'utf8', (err) => {
//             if (err)
//                 reject(err);
//             else
//                 resolve();
//         });
//     })
// }