import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {

    return (
        <div>
            <p>{props.text}</p>
            <button style={{ backgroundColor: props.color }}
                onClick={props.onClick}
            >
                {props.children}
            </button>
        </div>
    )

}

Button.propTypes = {
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}
export default Button;