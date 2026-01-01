import React, { useState } from "react";
import './AddForm.css'
import { MdAdd } from "react-icons/md";

const AddForm=({addtaskfunc})=>{
  const [value,setvalue]=useState('')
  const handlechange=(event)=>{
    if (event) event.preventDefault()
    setvalue(event.target.value)
  }
  const handlesubmit=(event)=>{
    if (event) event.preventDefault()
    if (!value || value==='') {
      return
    }
    addtaskfunc(value)
  }

  return(
    <div className="addform">
        <form onSubmit={handlesubmit}>
          <input onChange={handlechange} type='text' placeholder='What do you want to do?'/>
          <button type='submit'>
            <MdAdd />
          </button>
        </form>
    </div>
  )
}

export default AddForm

