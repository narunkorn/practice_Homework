$(document).ready(function () {
    $('#btn1').hide();

});

function upload(e, imgName) {

    const file = e.target.files[0];
    // console.log(e.target.files[0])
    // console.log(e.target.id)
    if (file) {
        $(`#${imgName}`).attr('src', URL.createObjectURL(file));
        $(`#${e.target.id}`).attr('style', "display:none");
        $('#btn1').show();
    } else {
        $(`#${e.target.id}`).attr('style', "display:block");
    }
}

function showBigImg(srcUrl) {
    $('#bigImg').attr('src', srcUrl);
}

function deleteData() {

    $('#showImg1').attr('src', '');
    $("#input1").show();
    $('#btn1').hide();
    // $('#showImg1').remove();
}









