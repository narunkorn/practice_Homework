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
    let header = "<tr>"
    for (let column in peopleSalary[0]) {
        header = header + "<th>" + column + "</th>"
    }
    header = header + "</tr>"

    let body = ""

    for (let row in peopleSalary) {
        body = body + "<tr>"
        let arr = []
        for (let detail in peopleSalary[row]) {

            let showdata = ""
            if (detail == "salaly") {
                let salary = peopleSalary[row][detail];
                arr = calSarary(salary, 3);
                peopleSalary[row][detail] = arr;
                let salaryList = "<ol>";
                for (list of peopleSalary[row][detail]) {
                    salaryList = salaryList + "<li>" + list + "</li>";
                }
                salaryList = salaryList + "</ol>";
                showdata = salaryList;

            } else {
                showdata = peopleSalary[row][detail];
            }

            body = body + "<td>" + showdata + "</td>"
        }

    }
    body = body + "</tr>"




    $('#myTest').append($(header));
    $('#myTest').append($(body));


});
function calSarary(salary, years) {
    let sumsalary = salary;
    let arr = [];
    for (i = 0; i < years; i++) {
        if (i == 0) {
            arr.push(salary);
        } else {
            let sum = sumsalary + (salary * 10 / 100);
            arr.push(sum)
        } sumsalary = sum
    }
    return arr

}







