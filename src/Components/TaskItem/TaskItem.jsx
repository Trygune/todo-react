import React from "react";
import './TaskItem.css'
import { IoClose } from "react-icons/io5";
const TaskItem = ({task,deletefunc,stat})=>{
  return(
          <li className={task.status ?"taskitem active":'taskitem'}>
            <input type='checkbox' checked={task.status} onChange={()=>{stat(task.id,!task.status)}}/>
            <h6>{task.title}</h6>
            <button onClick={()=>deletefunc(task.id)}><IoClose /></button>
          </li>
  )
}

export default TaskItem