const peopleSalary = [
    {
        "id": 1001,
        "first": "Luke",
        "lastname": "Skywalker",
        "company": "Wali Disney",
        "salary": 40000
    },
    {
        "id": 1002,
        "first": "Tony",
        "lastname": "Stark",
        "company": "Marvel",
        "salary": 1000000
    },
    {
        "id": 1003,
        "first": "Somchai",
        "lastname": "Jaidee",
        "company": "Love2work",
        "salary": 20000
    },
    {
        "id": 1004,
        "first": "Monkey D",
        "lastname": "Luffee",
        "company": "One Piece",
        "salary": 9000000
    },

]

$(document).ready(function () {
    debugger;


    let header = "<tr>"

    for (let column in peopleSalary[0]) {
        header = header + "<th>" + column + "</th>"
    }
    header = header + "</tr>"

    let body = ""
    for (let row in peopleSalary) {
        body = body + "<tr>"
        let datas = ""
        let arr_salary = []
        for (let key in peopleSalary[row]) {

            let showdata = ""

            if (key == "salary") {

                let salary = peopleSalary[row][key];//จำนวนเงินที่อยู่ใน key ซื่อง key เท่ากับ == salary ซึงเป็นค่าของมันเป็น number
                arr_salary = calSarary(salary, 3)
                console.log(arr_salary);
                peopleSalary[row][key] = arr_salary //แปลงค่าของในkey ให้เป็น[]
                let salaryList = "<ol>";
                // for of loop ตามจำนวน สมาชิกของ array []
                for (list of peopleSalary[row][key]) {
                    salaryList = salaryList + `<li>${list}</li>`;
                }
                salaryList = salaryList + "</ol>"
                showdata = salaryList
            } else {
                showdata = peopleSalary[row][key]
            }
            datas = datas + "<td>" + showdata + "</td>" // td คือ detail
        }
        body = body + datas + "</tr>"
    }

    $('#myTest').append($(header));//การเพิ่ม แท็ก html ที่เราสร้างเข้าไป element,DOM ที่เราอ้างถึง

    $('#myTest').append($(body));
});

function calSarary(salary, years) {
    let arr = [] //เก็บค่า
    let sumsalary = salary //ค่ารวมของรอบที่แล้ว
    for (i = 0; i < years; i++) {
        if (i == 0) {
            arr.push(salary) //เพิ่มของใส่เข้าไปใน []
        } else {
            let sum = sumsalary + (sumsalary * 10 / 100);
            arr.push(sum)
            sumsalary = sum
        }
    }
    return arr

}




