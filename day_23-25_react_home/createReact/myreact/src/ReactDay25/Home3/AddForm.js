import ListItem from './ListItem'

//จัดทำแบบฟอร์ม


const AddForm = (props) => {
    // console.log(props.addForms, 'addform')
    return (
        <div style={{ margin: '2rem' }}>
            <form onSubmit={props.Submit}>
                <div class="mb-3" style={{ width: '20%' }}>
                    <label for="exampleInputEmail1" class="form-label">FirstName</label>
                    <input type="text" name="firstName" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        onChange={props.Change}
                        value={props.addForms.firstname}
                        required />
                </div>
                <div class="mb-3" style={{ width: '20%' }}>
                    <label for="exampleInputPassword1" class="form-label">LastName</label>
                    <input type="text" name="lastName" class="form-control" id="exampleInputPassword1"
                        onChange={props.Change}
                        value={props.addForms.lasttname}
                        required />
                </div>


                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <br />
            <ListItem forms={props.addForms}
                editForm={props.edit}
                deleteForm={props.delete} />
        </div>

    )
}
export default AddForm;