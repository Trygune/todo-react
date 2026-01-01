import React from "react";
import './TaskList.css'
import {TaskItem} from "../";

const TaskList = ({tasks,deletetaskfunc,status})=>(
      <div className="tasklist">
        <ul>
          {tasks.map(thistask => <TaskItem deletefunc={deletetaskfunc} task={thistask} key={`key-${thistask.id}`} stat={status}/>)}
        </ul>
      </div>
)

export default TaskList