//get
const getUser = async () => {
    try {
        let response = await fetch('url');
        let data = await response.json();
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}
//post
const mydata = {
    fetstName: 'ตัวแปลบางอย่าง',
    lastName: 'ตัวแปลบางอย่าง',
}
const postUser = async () => {
    //post จะประกอบไปด้วย url และobject option
    try {
        let responsePost = await fetch('url/user', {//ส่วนของออฟชั่นว่าจะให้ทำอะไรบ้าง
            method: post,
            header: { 'content-type': 'application/json' },
            //กำหนด body ให้กับรีเควส
            body: JSON.stringify(mydata) //แปลงเป็นobject ให้เป็น string ก่อนส่ง
        })
        let data = await responsePost.json();
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}

//post Form Data ใช้เวลาจะแนบไฟล์ไปด้วย
async function postForm() {
    const formData = new FormData()
    const pictureFile = document.getElementById('picture').files[0]
    formData.append('caption', 'Yo!')
    formData.append('picture', pictureFile)
    try {
        const response = await fetch('/picture', {
            method: 'post',
            body: formData
        })
        const data = await response.json()
        console.log(data)
    }
    catch (err) {
        console.log(err)
    }
}