// promise.all

let p1 = new Promise(function (resolve, reject) {
    resolve('one')
});
let p2 = new Promise(function (resolve, reject) {
    resolve('two')
});
let p3 = new Promise(function (resolve, reject) {
    resolve('three')
});

Promise.all([p1, p2, p3])
    .then(function (result) {
        console.log('All completed!:', result);    //All completed!: [ 'one', 'two', 'three' ]
    })
    .catch(function (error) {
        console.log("There is an error", error);
    });