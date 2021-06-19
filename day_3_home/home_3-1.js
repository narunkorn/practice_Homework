
async function fetchdata() {
    let datas = await fetch("homework2_1.json");
    try {
        let employees = await datas.json();
        return employees;
        console.log(employees, "this is my employees");
    } catch {
        return null;
        console.log("error");
    }

}

function addYearSalary(row) {
    row.yearsalary = row.salary * 12;
    console.log(row);
}

function addNextSalary(row) {
    let salary = row.salary
    row.nextsalary = calculateSalary(salary, 3);
    console.log(row, 'this is new employyee');
}
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


$(document).ready(async function () {

    let employeeData = await fetchdata();
    let employees = JSON.parse(JSON.stringify(employeeData));
    let header = "<tr>"
    let body = ""
    if (employees !== null) {
        for (let index in employees) {
            addYearSalary(employees[index]);
            addNextSalary(employees[index]);
        }
        console.log('This is employeeData')
        console.log(employeeData)
        console.log('This is employees')
        console.log(employees)

        for (let callum in employees[0]) {
            header = header + `<th>${callum}</th>`
        }
        header = header + "</tr>"

        for (let rows in employees) {
            body = body + "<tr>"
            let detail = ""
            for (let key in employees[rows]) {
                let showNextsalaryList = ""
                if (key == "nextsalary") {
                    let nextsalarylist = "<ol>"
                    for (list of employees[rows][key]) {
                        nextsalarylist += `<li>${list}</li>`
                    }
                    nextsalarylist += "</ol>"
                    console.log(list, 'ttt')
                    showNextsalaryList = nextsalarylist
                } else {
                    showNextsalaryList = employees[rows][key];
                }
                detail = detail + `<td>${showNextsalaryList}</td>`
            }
            body = body + detail + "</tr>"
        }
    }
    $('#myemployees').append($(header));
    $('#myemployees').append($(body));

});
