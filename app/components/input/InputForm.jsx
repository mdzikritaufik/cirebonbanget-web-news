'use client'

import Label from "./Label";
import Input from "./input";

function InputForm(props) {
  const {label, name, type, placeholder} = props;
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder}/>
    </div>
  )
}



export default InputForm