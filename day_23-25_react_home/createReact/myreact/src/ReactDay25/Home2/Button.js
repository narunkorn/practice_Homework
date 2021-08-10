import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => (
    <button className={`btn w-100 ${props.btnType}`}
        onClick={props.onClick}>
        <i className={`${props.btnIcon} fa-2x`}></i>
    </button>
)

export default Button

Button.defaultProps = {
    onClick: () => alert('I want Function'),
    btnType: ''
}

Button.propTypes = {
    onClick: PropTypes.func,
    btnType: PropTypes.string,
    btnIcon: PropTypes.string
}