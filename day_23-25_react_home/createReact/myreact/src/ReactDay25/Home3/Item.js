const Item = (props) => {
    // console.log(props.itemForm, 'Item')
    return (
        <div style={{ backgroundColor: 'orange', color: 'back', width: '20%', height: '50px' }}>
            <div>  {props.itemForm.firstName}{props.itemForm.lastName}


            </div>

        </div>
    )
}
export default Item;