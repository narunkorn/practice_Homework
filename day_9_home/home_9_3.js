

$(document).ready(async function () {
    await drawTable();
    $("#myModal").modal('show');
    progress(0);
    await showAllImg();

});
const progress = (num) => {
    let width = 0;
    let progess = document.getElementById("mybar");
    width += 25;
    progess.style.width = width + num + "%";
    progess.innerHTML = width + num + "%";
    console.log(width += num);
    return width += num;

}
const img1 = () => {
    return new Promise((resolve, reject) => {

        resolve($('#showImg').append('<img id="image1" src="http://www.effigis.com/wp-content/uploads/2015/02/Iunctus_SPOT5_5m_8bit_RGB_DRA_torngat_mountains_national_park_8bits_1.jpg" />'),
            $('#image1')
                .load(function () {
                    console.log('1');
                    progress(25);

                }));
    })
}
const img2 = () => {
    return new Promise((resolve, reject) => {

        resolve($('#showImg').append('<img id="image2" src="http://www.effigis.com/wp-content/uploads/2015/02/Infoterra_Terrasar-X_1_75_m_Radar_2007DEC15_Toronto_EEC-RE_8bits_sub_r_12.jpg"/>'),
            $('#image2')
                .load(function () {
                    console.log('2');
                    progress(50);

                }));

    })
}
const img3 = () => {
    return new Promise((resolve, reject) => {

        resolve($('#showImg').append('<img id="image3" src="http://www.effigis.com/wp-content/uploads/2015/02/DigitalGlobe_WorldView1_50cm_8bit_BW_DRA_Bangkok_Thailand_2009JAN06_8bits_sub_r_1.jpg"/>'),
            $('#image3')
                .load(function () {
                    console.log('3');
                    progress(75);
                    setTimeout(() => {
                        $("#myModal").modal('hide');
                    }, 3000);

                }));
    })

}

const showAllImg = async () => {
    try {
        let show1 = await img1();
        let show2 = await img2();
        let show3 = await img3();
        return show1, show2, show3;
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
