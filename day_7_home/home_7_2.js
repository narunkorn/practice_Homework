async function fetchdata() {
    let data = await fetch('homework2_1.json');
    try {
        let result = await data.json();
        return result;
    } catch {
        return null;
    }

}

$(document).ready(async function () {
    let peopleSalary = await fetchdata();

    //หาพนักงานที่มีเงินเดือนน้อยกว่า 100000
    let = peopleLowSalary = peopleSalary.filter((item) => {

        return item.salary < 100000;
    }).map((item) => {
        return item.salary * 2;
    });


    console.log('peopleLowSalary', peopleLowSalary);

    //หาพนักงานที่มีเงินเดืนอมากกว่า 100000 และผลรวมของจำนวนเงิน
    let sumPeopleSalary = peopleSalary.filter((item) => {
        return item.salary > 100000;
    }).reduce((sum, item) => {
        return sum + item.salary;
    }, 0);
    console.log('sumPeopleSalary', sumPeopleSalary);

    //หาผลรวมของพนักงานที่ได้เงินน้อยกว่า 100000
    let sumPeopleLowSalary = peopleLowSalary.reduce((sum, item) => {
        return sum + item;
    });
    console.log('sumPeopleLowSalary', sumPeopleLowSalary);

    //ผลรวมของพนักงานทั้งหมด
    // โดยเอาเงินเดือนของพนักงานที่ได้มากว่า 100000 +กับเงินเดือนของพนักนักงานที่ได้น้อยกว่า 100000 ที่บวกเพิ่มแล้ว
    let sumSalary = sumPeopleSalary + sumPeopleLowSalary;
    sumSalary = Number(sumSalary).toLocaleString()

    $('#td1').append(`${peopleLowSalary.join(',')}`);
    $('#td2').append(sumSalary);


})




// let numberBalance = myNewData.map((item) => {
        //     let delete$ = item.balance.replace('$', '')
        //     let delete2 = delete$.replace(',', '')
        //     let numBalance = delete2.replace('.', '')
        //     return Number(numBalance);
        // }).map((num) => {
        //     console.log(num)
        //     return num / 10;
        // })


        // console.log(numberBalance);