const util = require('util');
const fs = require('fs')

const readFileAsync = util.promisify(fs.readFile);
function wait99(temp, callback) {
    setTimeout(function () {
        callback(null, temp + " : wait99");
    }, 1000);
}

const wait99Async = util.promisify(wait99);

async function testRead(filename) {
    let temp2;
    try {
        const temp = await readFileAsync(filename, 'utf8');
        temp2 = await wait99Async(temp);
        console.log(temp2); // file content1 : wait99
    } catch (exception) {
        console.error(exception);
    }
}
testRead('test.txt');

