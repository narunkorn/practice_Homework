'use strict'
const fs = require('fs');


const readFile1 = () => {
    return new Promise(function (resolve, reject) {
        fs.readFile('robot/head.txt', 'utf8', (err, head) => {
            if (err) {
                reject(err);
            } else {
                resolve(head);
            }
        });
    });
}

const readFile2 = () => {
    return new Promise(function (resolve, reject) {
        fs.readFile('robot/body.txt', 'utf8', (err, body) => {
            if (err) {
                reject(err);
            } else {
                resolve(body);
            }
        });
    });
}
const readFile3 = () => {
    return new Promise(function (resolve, reject) {
        fs.readFile('robot/leg.txt', 'utf8', (err, leg) => {
            if (err) {
                reject(err);
            } else {
                resolve(leg);
            }
        });
    });
}
const readFile4 = () => {
    return new Promise(function (resolve, reject) {
        fs.readFile('robot/feet.txt', 'utf8', (err, feet) => {
            if (err) {
                reject(err);
            } else {
                resolve(feet);
            }
        });
    });
}
const writeFile = (head, body, leg, feet) => {
    return new Promise(function (resolve, reject) {
        let robot = head + '\r\n' + body + '\r\n' + leg + '\r\n' + feet + '\r\n';
        fs.writeFile('robot8.txt', robot, 'utf8', (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}
const drawRobot = async () => {
    try {
        let head = await readFile1();
        let body = await readFile2();
        let leg = await readFile3();
        let feet = await readFile4();
        await writeFile(head, body, leg, feet);
        console.log('yesssss!!!')
    } catch (err) {
        console.error(err)
    }
}
drawRobot();




