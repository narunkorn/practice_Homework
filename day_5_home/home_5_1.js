
$(document).ready(function () {
    // กำหนดให้ค่าตั้งต้นของ<p>ซ้อนไว้ก่อน
    $('p').hide()
    $('form').submit(function (event) {
        if (isEmail()) {
            alert('Email is ok')
        } else {
            $('p').show();
            // เวลากดปุ๋มแล้วหน้าจอไม่รีเฟรส
            event.preventDefault();
        }
    })
})
function isEmail() {
    // กำหนดตัวแปรมารับ value ที่อยู่ใน id input
    let email = $('#input').val()
    //กำหนดตัวแปรมารับ pattern ของการตรวจสอบอีเมล
    let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    // .test ไว้สำหรับตรวจสอบว่าค่าที่ส่งเข้าไปใช้อีเมลมั้ย
    if (regex.test(email)) {
        return true;
    } else {
        return false;
    }
}