import React from 'react'

const Submit = (props) => (
  <input
    type='submit'
    className={`btn ${props.type}`} value={props.value} />
)

export default Submit
