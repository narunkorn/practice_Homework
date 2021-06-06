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
    let header = "<tr>";
    // draw Header Table
    for (let column in peopleSalary[0]) {
        header = header + `<th>${column}</th>`;
    }
    header = header + "</tr>";
    // ---------------- //
    // draw detail
    let datas = "";
    for (let row in peopleSalary) {
        datas = datas + "<tr>";
        let detail = "";
        for (let key in peopleSalary[row]) {
            detail = detail + `<td>${peopleSalary[row][key]}</td>`;
        }
        datas = datas + detail + "</tr>";
    }
    // ---------------- //
    $('#myEmpoyee').append($(header));
    $('#myEmpoyee').append($(datas));


});