async function fetchData() {
    let data = await fetch('https://jsonplaceholder.typicode.com/users/');
    try {
        let response = await data.json();
        return response;
    } catch {
        return null
    }

}
fetchData()
$(document).ready(async function () {
    let datas = await fetchData();
    let header = "<tr>";
    let body = "";
    if (datas !== null) {
        for (let callum in datas[0]) {
            header = header + `<th>${callum}</th>`;
        }
        header = header + `<th>Detail</th>`;
        header = header + "</tr>";
        for (let rows in datas) {
            body = body + "<tr>";
            let detail = "";
            for (let key in datas[rows]) {
                if (typeof datas[rows][key] === 'object' && !Array.isArray(datas[rows][key])) {
                    let keys = Object.keys(datas[rows][key]);
                    let address = "";
                    for (let key2 of keys) {
                        if (key2 !== "geo") {
                            address = address + datas[rows][key][key2] + " | ";
                        }
                    }
                    detail = detail + `<td>${address}</td>`;

                } else {
                    detail = detail + `<td>${datas[rows][key]}</td>`;
                }
            }
            detail = detail + `<td><button onclick=\"myFunctionView(${datas[rows].id})\" data-bs-toggle=\"modal\" data-bs-target=\"#exampleModal\">view</button></td>`
            body = body + detail + "</tr>";

        }

    }

    $('#data').append($(header));
    $('#data').append($(body));

    // $('button').click(function () {
    //     $.get('https://jsonplaceholder.typicode.com/users/1').then(function (res) {
    //         $('.center').show();
    //         $('#show1').append('name:' + "   ", res.name);
    //         $('#show2').append('username:' + "   ", res.username);
    //         $('#show3').append('phone:' + "   ", res.phone);

    //     });
    // });

})

async function myFunctionView(id) {
    let data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    try {
        let result = await data.json();
        let detail = 'ID:' + "   " + result.id + "<br>" + 'name:' + "   " + result.name + "<br>" + 'username:' + "   " + result.username + "<br>" + 'phone:' + "   " + result.phone + "<br>"
        $('#show').html(detail);

    } catch {
        console.log("error")
    }

}


