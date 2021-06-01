import React from 'react'
import Button from './Button'

const Input = ({label,id, ...props}) => {
  return (
    <div style={{margin: '1rem 0'}}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props}/>
      <Button />
    </div>
    
      
    
  )
}

export default Input
