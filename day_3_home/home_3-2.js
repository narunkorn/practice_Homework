
async function fetchdata() {
    let datas = await fetch("homework2_1.json");
    try {
        let employees = await datas.json();
        // console.log(employees)
        return employees;
    } catch {
        return null;
    }

}

function addFildYearSalary(row) {
    let newRow = {}
    newRow = { ...row, yearSalary: row.salary * 12 };
    return newRow
}

function addFildNextSalary(row) {
    let salary = row.salary
    let newRow = {}

    newRow = { ...row, nextsalary: calculateSalary(salary, 3) }
    // row["nextsalary"] = calculateSalary(salary, 3);ใช้ได้เหมือนกัน
    // row.nextsalary = calculateSalary(salary, 3);ใช้ได้เหมือนกัน
    return newRow
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
function addAdditionalFields(employee) {
    let newEmployees = [];

    // employee คือ เก่า
    for (let index in employee) {
        let myyear = addFildYearSalary(employee[index]);
        let mynext = addFildNextSalary(myyear);
        newEmployees.push(mynext);
    }

    return newEmployees

}

$(document).ready(async function () {

    let employee = await fetchdata();
    let header = "<tr>"
    let body = ""
    if (employee !== null) {
        for (let callum in employee[0]) {
            header = header + `<th>${callum}</th>`
        }
        header = header + "</tr>"

        for (let rows in employee) {
            body = body + "<tr>"
            let detail = ""
            for (let key in employee[rows]) {

                detail = detail + `<td>${employee[rows][key]}</td>`
            }
            body = body + detail + "</tr>"
        }
    }

    let newEmployees = addAdditionalFields(employee)

    // console.log(newEmployees)
    let newheader = "<tr>"
    let newbody = ""
    if (newEmployees !== null) {

        console.log('This is employee')
        console.log(employee)
        console.log('This is newEmployees')
        console.log(newEmployees)

        for (let callum in newEmployees[0]) {
            newheader = newheader + `<th>${callum}</th>`
        }
        newheader = newheader + "</tr>"

        for (let rows in newEmployees) {
            newbody = newbody + "<tr>"
            let detail = ""
            for (let key in newEmployees[rows]) {
                let showNextsalaryList = ""
                if (key == "nextsalary") {
                    let nextsalarylist = "<ol>"
                    for (list of newEmployees[rows][key]) {
                        nextsalarylist += `<li>${list}</li>`
                    }
                    nextsalarylist += "</ol>"
                    // console.log(list, 'ttt')
                    showNextsalaryList = nextsalarylist
                } else {
                    showNextsalaryList = newEmployees[rows][key];
                }
                detail = detail + `<td>${showNextsalaryList}</td>`
            }
            newbody = newbody + detail + "</tr>"
        }
    }

    $('#myemployees').append($(header));
    $('#myemployees').append($(body));
    $('#myNewemployees').append($(newheader));
    $('#myNewemployees').append($(newbody));

});



