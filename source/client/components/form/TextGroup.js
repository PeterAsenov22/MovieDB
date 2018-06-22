import React from 'react'

const TextGroup = (props) => (
  <div className={'form-group ' + props.validationState}>
    <label className='control-label'>
      { props.label }
    </label>
    <input
      type={props.type}
      name={props.name}
      className='form-control'
      value={props.value}
      onChange={props.onChange}
      autoFocus={props.autoFocus} />
    <span className='help-block'>
      { props.message }
    </span>
  </div>
)

export default TextGroup
