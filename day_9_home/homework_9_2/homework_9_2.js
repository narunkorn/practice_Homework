'use strict'
const fs = require('fs');


let read1 = new Promise((resolve, reject) => {
    fs.readFile('robot/head.txt', 'utf8', (err, head) => {
        if (err) {
            reject(err);
        } else {
            resolve(head);
        }
    });
});

let read2 = new Promise((resolve, reject) => {
    fs.readFile('robot/body.txt', 'utf8', (err, body) => {
        if (err) {
            reject(err);
        } else {
            resolve(body);
        }
    });
});

let read3 = new Promise((resolve, reject) => {
    fs.readFile('robot/leg.txt', 'utf8', (err, leg) => {
        if (err) {
            reject(err);
        } else {
            resolve(leg);
        }
    });
});

let read4 = new Promise((resolve, reject) => {
    fs.readFile('robot/feet.txt', 'utf8', (err, feet) => {
        if (err) {
            reject(err);
        } else {
            resolve(feet);
        }
    });
});
const write = (data) => {
    return new Promise((resolve, reject) => {
        let robot = '';
        for (let item of data) {
            robot += item + '\r\n';
        }
        fs.writeFile('robot3.txt', robot, 'utf8', (err) => {
            if (err) {
                reject(err);
            } else {
                resolve('this is my Robot');
            }
        });
    });
}


Promise.all([read1, read2, read3, read4])
    .then((data) => {
        write(data)
    })
    .catch((error) => {
        console.log("Oh nooo", error);
    });

