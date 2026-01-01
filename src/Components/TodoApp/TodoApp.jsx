import React from "react";
import './TodoApp.css';
import {AddForm,TaskList,FilterTask} from "../";

const TodoApp = ()=>(
    <div className="todo-app">
        <AddForm />
        <TaskList/>
        <FilterTask/>
    </div>
)

export default TodoApp