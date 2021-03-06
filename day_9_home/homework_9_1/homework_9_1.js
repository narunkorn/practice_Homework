'use strict'
const fs = require('fs');


const readFile1 = () => {
    return new Promise(function (resolve, reject) {
        fs.readFile('robot/head.txt', 'utf8', (err, head) => {
            if (err) {
                reject(err);
                console.log('i am error', err);
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
const writeFile = (robot) => {
    return new Promise(function (resolve, reject) {
        fs.writeFile('robot.txt', robot, 'utf8', (err) => {
            if (err) {
                reject(err);
            } else {
                resolve('ok kaaaa');
            }
        });
    });
}

let robot = '';
readFile1().then((head) => {
    robot += head + '\r\n';
    return readFile2();
}).then((body) => {
    robot += body + '\r\n';
    return readFile3();
}).then((leg) => {
    robot += leg + '\r\n';
    return readFile4();
}).then((feet) => {
    robot += feet + '\r\n';
    return writeFile(robot);
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.error(error)
});



