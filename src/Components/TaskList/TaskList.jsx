import React from "react";
import './TaskList.css'
import {TaskItem} from "../";

const TaskList = ()=>(
      <div className="tasklist">
        <ul>
          <TaskItem/>
        </ul>
      </div>
)

export default TaskList