import React from "react";
import {AddForm,TaskList,FilterTask} from "../";

const TodoApp = ()=>(
    <div>
        <AddForm />
        <TaskList/>
        <FilterTask/>
    </div>
)

export default TodoApp