
$(document).ready(function () {
    $('#input').keyup(function () {
        let input = $('#input').val();
        let input2 = input.replaceAll(',', '');
        let resulte = input2 == 0 ? '' : Number(input2).toLocaleString();

        $('#input').val(resulte);

        console.log('input', input);
        console.log('input2', input2);
        console.log('resulte', resulte);


        $('#input').css('background', 'pink')
        $('#input').css('color', 'blue')

    })
    $('#input').keydown(function () {
        $('#input').css('background', 'blue')
        $('#input').css('color', 'pink')
    })

})














// function insInput() {
//     let inputs = '1111'
//     for (let i = 0; i < inputs.length; i++) {
//         if (inputs >= 3) {
//             inputs = inputs + ','
//         } else {
//             console.log('oo')
//         }
//     }
//     console.log(inputs, 'input')
// }
// insInput()

