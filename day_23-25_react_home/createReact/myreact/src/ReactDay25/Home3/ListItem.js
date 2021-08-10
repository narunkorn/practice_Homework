import Item from "./Item";
const ListItem = (props) => {
    // console.log(props.forms, 'Listitem')
    return (
        <div>
            {props.forms.map((form) => {
                return (

                    <div>
                        <Item key={form.id} itemForm={form}

                        />
                        <br />

                        <button onClick={() => props.editForm(form.id)}>edit</button>
                        <button onClick={() => props.deleteForm(form.id)}>delete</button>

                    </div>

                )
            })}



        </div>
    )
}
export default ListItem;