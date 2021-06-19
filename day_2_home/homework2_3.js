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
    // debugger;
    let header = "<tr>";
    for (let column in peopleSalary[0]) {
        header = header + `<th>${column}</th>`;
    }
    header = header + "</tr>";


    let datas = "";
    for (let row in peopleSalary) {
        datas = datas + "<tr>";
        let detail = "";
        let arr_salary = []
        for (let key in peopleSalary[row]) {

            let showdata = "";
            if (key == "salary") {
                let salary = peopleSalary[row][key];
                arr_salary = calculateSalary(salary, 3)
                peopleSalary[row][key] = arr_salary;
                let salaryList = "<ol>";
                for (list of peopleSalary[row][key]) {
                    salaryList += `<li>${list}</li>`;
                }
                salaryList += "</ol>"
                console.log(list, '333')
                showdata = salaryList;

            } else {
                showdata = peopleSalary[row][key];
            }
            detail = detail + `<td>${showdata}</td>`;
        }

        datas = datas + detail + "</tr>";
    }


    $('#mySalary').append($(header));
    $('#mySalary').append($(datas));


});

function calculateSalary(salary, year) {
    let arr_salary = [];
    let sumsalary = salary;
    for (i = 0; i < year; i++) {
        if (i == 0) {
            arr_salary.push(salary);
        } else {
            let sum = sumsalary + (sumsalary * 10 / 100);
            arr_salary.push(sum);
            sumsalary = sum;
        }
    }
    return arr_salary;
}