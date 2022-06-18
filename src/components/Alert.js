import React from 'react'

export const Alert = (props) => {
  return (
    props.alert && (
      <div>
        <div
          className={`alert alert-warning ${props.alert.type} alert-dismissible fade show
          role="alert`}
        >
          <strong>{props.alert.type}</strong>: {props.alert.msg}
        </div>
      </div>
    )
  )
}
export default Alert
