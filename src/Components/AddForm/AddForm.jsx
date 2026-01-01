import React from "react";
import './AddForm.css'

const AddForm=()=>(
    <div className="addform">
        <form>
          <input type='text' placeholder='What do you want to do?'/>
          <button type='submit'>
            Add
          </button>
        </form>
    </div>
)

export default AddForm

