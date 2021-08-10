import { useState } from "react";
import Form from "./Form";
import FormList from "./FormList";
import EditForm from "./EditForm";
const Test = () => {
    const mystateDefulte = {
        firstName: '',
        lastName: ''
    }
    // state input
    const [form, setForm] = useState(mystateDefulte);
    // function เปลี่ยนแปลงinput
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }
    //function เปลี่ยนแปลงinputตอนedit
    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditForm({ ...editform, [name]: value });
    }
    const [myform, setMyform] = useState([]);
    //add form
    const handleAddSubmit = (e) => {
        e.preventDefault();
        //setform โดยการรับค่าทั้งหมดของmyform กำหนดไอดีโดยการนำmyform มา .lengthแล้ว +1
        setMyform((prevMyform) => {
            const newform = { ...form };
            newform.id = myform.length + 1
            return [...prevMyform, newform]
        })
        //หลังจากsetร้อยแล้วให้กลับมาเป็นค่าว่าง
        setForm(mystateDefulte)
        console.log(myform)
    }
    const [editform, setEditForm] = useState(null);
    // setform ต้อน edit โดยทำการรับ myformทั้งหมด เข้ามาmap แล้วเขียนเงีื้อนไขว่า ถ้าform.id ไม่เท่ากับ editform.id ให้ return formเก่าออกไป
    // แต่ถ้าตรง ให้ return formที่แก้ไขออกไป
    const editSubmit = (e) => {
        e.preventDefault();
        setMyform((prevMyform) => {
            return prevMyform.map((form) => {
                if (form.id !== editform.id) {
                    return form
                } return editform
            })
        })
        setEditForm(null)
    }
    const handleDelete = (id) => {
        setMyform(myform.filter((form) => {
            return form.id !== id
        }));
    }
    return (
        <div style={{ margin: '2rem' }}>
            <Form formSubmit={handleAddSubmit}
                formChange={handleChange}
                stateForm={form}
            />
            <div >
                <FormList myformlist={myform}
                    myEditForm={setEditForm}
                    myDeleteForm={handleDelete}
                />
            </div>
            <div>
                <EditForm
                    editChange={handleEditChange}
                    editSubmit={editSubmit}
                    stateEdit={editform}
                />
            </div>
        </div>
    )
}
export default Test