import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem'
const List = (props) => {
    const text = 'So Wow'
    return (
        <div>
            <ListItem
                buttonColor={props.buttonTheme}
                Click={props.buttonOnClick}
                text={text} />

        </div>
    )

}
List.propTypes = {
    buttonTheme: PropTypes.string.isRequired,
    buttonOnClick: PropTypes.func.isRequired,

}
export default List;