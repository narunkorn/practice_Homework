import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const ButtonBar = (props) => (
    <div className="d-flex flex-row">
        <Button btnType='btn-success'
            btnIcon='fa fa-plus'
            onClick={props.clickPlus}
        />
        <Button btnType='btn-warning'
            btnIcon='fa fa-refresh'
            onClick={props.clickReset}

        />
        <Button btnType='btn-danger'
            btnIcon='fa fa-minus'
            onClick={props.clickDelete}

        />
    </div>
)

export default ButtonBar
