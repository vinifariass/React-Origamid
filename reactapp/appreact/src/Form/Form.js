import React from 'react'
import Button from './Button'
import Input from './Input'

const Form = () => {
  return (
    <form>
      <Input id="email" label="Email"required/>
      <Input id="password" type="password" label="Password"/>
      <Button />
      
    </form>
  )
}

export default Form
