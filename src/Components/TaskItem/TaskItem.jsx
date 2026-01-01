import React from "react";
import './TaskItem.css'
import { IoClose } from "react-icons/io5";
const TaskItem = ()=>(
          <li className="taskitem active">
            <input type='checkbox'/>
            <h6>Sample</h6>
            <button><IoClose /></button>
          </li>
)

export default TaskItem