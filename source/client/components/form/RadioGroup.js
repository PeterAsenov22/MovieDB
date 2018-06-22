import React from 'react'

const RadioGroup = (props) => (
  <div className={`form-group ${props.validationState}`}>
    <span className='help-block'>
      {props.message}
    </span>
    {props.children}
  </div>
)

export default RadioGroup
