function draw4(n) {
    let numbers = 0
    let num1 = ""
    let number2 = 0
    let num2 = ""
    for (i = 0; i <= n; i++) {
        for (j = 0; j < i; j++) {
            numbers = numbers + 1
            for (j = 0; j < n; j++) {
                num1 = num1 + numbers

            }
            console.log(num1)

        }


    }
}
draw4(2)


