const shuffle = ([...arr]) => {
    let m = arr.length;
    console.log(m, 'this is m')
    while (m) {
        const i = Math.floor(Math.random() * m--);
        // console.log(i, 'this is i')
        [arr[m], arr[i]] = [arr[i], arr[m]];
        // console.log('this is arr[m]', [arr[m], arr[i]] = [arr[i], arr[m]])
    }

    return arr;
};
const foo = ['red', 'blue', 'green', 'pink'];
shuffle(foo); // [2, 3, 1], foo = [1, 2, 3]
console.log(shuffle(foo))