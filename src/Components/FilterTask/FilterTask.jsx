import React, { useState } from "react";
import './FilterTask.css'

const FilterTask = ({taskcount,filterstatus})=>{
  const[filter,setfilter]=useState('all')
  
  const handlefilter=(filterstat)=>{
    setfilter(filterstat)
    filterstatus(filterstat)
  }

  return(
      <div className="filtertask">
          <div className="itemsleft">
            {taskcount} Items
          </div>
          <div className="filter">
            <ul className="filterbtn">
              <li>
                <button onClick={()=>handlefilter('all')} className={filter==='all'? 'active':''}>All</button>
              </li>
              <li>
                <button onClick={()=>handlefilter('actived')} className={filter==='actived'? 'active':''}>Active</button>
              </li>
              <li>
                <button onClick={()=>handlefilter('completed')} className={filter==='completed'? 'active':''}>Completed</button>
              </li>
            </ul>
          </div>
      </div>
  )
}

export default FilterTask