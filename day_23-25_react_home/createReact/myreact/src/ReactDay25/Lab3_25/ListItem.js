import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
const ListItem = (props) => {
    return (
        <div>
            <Button
                color={props.buttonColor}
                onClick={props.Click}
                text={props.text}
            >
                กดเลย!!!
            </Button>
        </div>
    )

}

ListItem.propTypes = {
    buttonColor: PropTypes.string.isRequired,
    Click: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}

export default ListItem;
