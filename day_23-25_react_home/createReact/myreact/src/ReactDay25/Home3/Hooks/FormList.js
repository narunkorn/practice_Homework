const FormList = (props) => {
    return (
        <div>
            {props.myformlist.map((form) => {
                return (
                    <div key={form.id} style={{
                        backgroundColor: 'orange', paddingRight: '3em', marginTop: '1rem',
                        border: 'solid', width: '25%', height: '20%'
                    }}>
                        <div>firstName: {form.firstName}</div>
                        <div>lastName: {form.lastName}</div>
                        <div>
                            <button onClick={() => props.myEditForm(form)}>edit</button>
                            <button onClick={() => props.myDeleteForm(form.id)}>delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default FormList;