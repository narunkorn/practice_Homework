function draw4(n) {
    let numbers = 1
    let num1 = ""
    let number2 = 2
    let num2 = ""

    for (i = 0; i < n; i++) {
        num1 = num1 + numbers
        if (num1.length == 2) {
            console.log(num1)
            for (i = 0; i < n; i++) {
                num2 = num2 + number2
                if (num2.length == 2) {

                    console.log(num2)
                }
            }
        }

    }

    // console.log("เสร็จแล้วโว้ย")
    // console.log(num2)
}
draw4(4)


