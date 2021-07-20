

$(document).ready(async function () {
    await drawTable();
    $("#myModal").modal('show');
    progress(25);
    await showAllImg();

});
const progress = (num) => {
    let progess = document.getElementById("mybar");
    progess.style.width = num + "%";
    progess.innerHTML = num + "%";
}
const img1 = () => {
    return new Promise((resolve, reject) => {

        $('#showImg').append('<img id="image1" src="http://www.effigis.com/wp-content/uploads/2015/02/Iunctus_SPOT5_5m_8bit_RGB_DRA_torngat_mountains_national_park_8bits_1.jpg" />')
        $('#image1')
            .load(function () {
                progress(50)
                console.log('1');
                resolve()
            });
    })
}
const img2 = () => {
    return new Promise((resolve, reject) => {

        $('#showImg').append('<img id="image2" src="http://www.effigis.com/wp-content/uploads/2015/02/Infoterra_Terrasar-X_1_75_m_Radar_2007DEC15_Toronto_EEC-RE_8bits_sub_r_12.jpg"/>')
        $('#image2')
            .load(function () {

                progress(75)
                console.log('2');
                resolve()
            });

    })
}

let img3 = () => new Promise((resolve, reject) => {
    $('#showImg').append('<img id="image3" src="http://www.effigis.com/wp-content/uploads/2015/02/DigitalGlobe_WorldView1_50cm_8bit_BW_DRA_Bangkok_Thailand_2009JAN06_8bits_sub_r_1.jpg"/>')
    $('#image3')
        .load(function () {
            progress(100)
            setTimeout(() => {
                $("#myModal").modal('hide');
            }, 3000)
            console.log('3');
            resolve()

        });
});



const showAllImg = async () => {
    try {
        await img1();
        await img2();
        await img3();
    } catch (err) {
        console.error('error');
    }
}

const fetchdata = async () => {
    let datas = await fetch("homework2_1.json");
    try {
        let employees = await datas.json();
        return employees;
    } catch {
        return null;
    }
}

const drawTable = async () => {
    let employee = await fetchdata();
    let header = "<tr>";
    let body = "";
    if (employee !== null) {
        for (let callum in employee[0]) {
            header = header + `<th>${callum}</th>`;
        }
        header = header + "</tr>";

        for (let rows in employee) {
            body = body + "<tr>";
            let detail = "";
            for (let key in employee[rows]) {

                detail = detail + `<td>${employee[rows][key]}</td>`;
            }
            body = body + detail + "</tr>";
        }
    }
    $('#myemployees').append($(header));
    $('#myemployees').append($(body));
}
