let buffer = "";
let size = 5;

for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= i; j++) {
        buffer += j;
    }
    buffer += "\n";
}

console.log(buffer);