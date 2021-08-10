const Lab1_25 = (props) => {
    return (
        <div>
            {props.names.map((name) => {
                return <div>My Name: {name}</div>
            })}
            <div>My Age : {props.age}</div>
            <div>My firstName : {props.firstName}</div>

        </div>
    )
}


Lab1_25.defaultProps = {
    names: ['New', 'ObOne', 'Looks'],
    age: 30,
    firstName: 'Narunkorn'
}



export default Lab1_25;