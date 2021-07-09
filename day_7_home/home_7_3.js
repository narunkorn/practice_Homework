async function fetchdata() {
    let data = await fetch('homework1-4.json');
    try {
        let result = await data.json();
        return result;
    } catch {
        return null;
    }
}
$(document).ready(async function () {
    let myData = await fetchdata();

    let myNewData = myData.filter((item) => {
        return item.gender.toLowerCase() === 'male' && item.friends.length >= 2;
    }).map(({ name, gender, company, email, friends, balance }) => {
        return ({ name, gender, company, email, friends, balance });
    }).map((item) => {
        console.log('แต่ละรอบที่ส่งเข้ามา', item);
        let newBalance;
        // let newBalance; ได้เหมือนกันในกรณี javascript 
        if (item.balance) {
            newBalance = parseFloat(item.balance.replace(/[$,]/g, ''));
            console.log(' newBlance', newBalance);
            newBalance = newBalance - (newBalance * 10);
            console.log('*10', newBalance);
            newBalance = newBalance.toLocaleString();
            console.log(',,', newBalance);
            newBalance = '$' + newBalance;
            console.log('เพิ่ม$', newBalance);
        } else {
            newBalance = '$0.00';
        }
        //เปลี่ยนค่าใหม่ให้กับ  balance
        item.balance = newBalance;
        return item;

    })
    console.log(myNewData);
    // console.log(myData)

    let header = "<tr>";
    let body = "";

    for (let callum in myNewData[0]) {
        header = header + `<th>${callum}</th>`;
    }
    header = header + "</tr>";

    for (let rows in myNewData) {
        body = body + "<tr>";
        let detail = "";
        for (let key in myNewData[rows]) {
            if (key == 'friends') {
                let showHisFriends = "<ol>";
                for (let list of myNewData[rows][key]) {
                    showHisFriends += `<li>${list.name}</li>`;
                } detail = detail + `<td>${showHisFriends}</td>`;
                showHisFriends += "</ol>";
                // console.log(showHisFriends)
            } else {
                detail = detail + `<td>${myNewData[rows][key]}</td>`;
            }
        }
        body = body + detail + "</tr>";
    }

    $('#myNewData').append($(header));
    $('#myNewData').append($(body));

})







