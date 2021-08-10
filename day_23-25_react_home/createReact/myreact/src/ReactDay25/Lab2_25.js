import PropTypes from 'prop-types'

const Lab2_25 = (props) => {
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


Lab2_25.defaultProps = {
    names: ['New', 'ObOne', 'Looks'],
    age: 25,
    firstName: 'Narunkorn'
}
Lab2_25.propTypes = {
    names: PropTypes.string,
    age: PropTypes.number,
    firstName: PropTypes.string
}



export default Lab2_25;