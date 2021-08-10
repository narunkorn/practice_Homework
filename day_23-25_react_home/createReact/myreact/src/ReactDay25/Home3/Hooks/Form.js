const Form = (props) => {
    return (
        <div>
            <form onSubmit={props.formSubmit}>
                <div class="mb-3" style={{ width: '20%' }}>
                    <label for="exampleInputEmail1" class="form-label">FirstName</label>
                    <input type="text" name="firstName" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        onChange={props.formChange}
                        value={props.stateForm.firstName}
                        required />
                </div>
                <div class="mb-3" style={{ width: '20%' }}>
                    <label for="exampleInputPassword1" class="form-label">LastName</label>
                    <input type="text" name="lastName" class="form-control" id="exampleInputPassword1"
                        onChange={props.formChange}
                        value={props.stateForm.lastName}
                        required />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <br />
            {props.children}
        </div>
    )
}
export default Form;