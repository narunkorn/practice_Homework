const EditForm = (props) => {
    //สร้าง element editform โดยใช้ชือว่า editlist โดยกำหนดค่าเริ่มต้นให้เป็น null ก่อน
    let editlist = null;
    //ทำการเช็ค ว่าถ้ามีการกด edit เปลี่ยนจาก null เป็น formใหม่ที่จะกรอก
    if (!!props.stateEdit) {
        editlist = (
            <div style={{ margin: '2rem' }}>
                <form onSubmit={props.editSubmit}>
                    <div class="mb-3" style={{ width: '20%' }}>
                        <label for="exampleInputEmail1" class="form-label">FirstName</label>
                        <input type="text" name="firstName" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            onChange={props.editChange}
                            value={props.stateEdit.firstName}
                            required />
                    </div>
                    <div class="mb-3" style={{ width: '20%' }}>
                        <label for="exampleInputPassword1" class="form-label">LastName</label>
                        <input type="text" name="lastName" class="form-control" id="exampleInputPassword1"
                            onChange={props.editChange}
                            value={props.stateEdit.lastName}
                            required />
                    </div>
                    <button type="submit" class="btn btn-primary">Ok จร้าาาา</button>
                </form>
            </div>
        )
    }
    return (
        <div>
            {editlist}

        </div>
    )

}
export default EditForm;