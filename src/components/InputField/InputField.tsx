import React from 'react'
import './InputField.css'
const InputField = () => {
  return (
    <div>
      <form className='input'>
        <input type='text' placeholder='Enter your  tasks...' className='input_box'/>
        <button className='input_submit' type='submit'>Go</button>
      </form>
    </div>
  )
}

export default InputField
