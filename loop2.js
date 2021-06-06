function draw4(n) {
    let numbers = 0
    let num1 = ""
    let number2 = 0
    let num2 = ""
    for (i = 0; i < n; i++) {
        numbers = numbers + 1
        for (i = 0; i < n; i++) {
            num1 = num1 + numbers
        }
        console.log(num1)

    }
    for (i = 0; i < n; i++) {
        number2 = number2 + 2
        for (i = 0; i < n; i++) {
            num2 = num2 + number2
        }
        console.log(num2)
    }






}
draw4(2)


