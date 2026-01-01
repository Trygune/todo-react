import React, { useEffect, useState } from "react";
import './TodoApp.css';
import {AddForm,TaskList,FilterTask} from "../";
import { v4 as uuidv4 } from 'uuid';

const TodoApp = ()=>{
    
    const[task,settask]=useState([])
    const[filteredtask,setfilteredtask]=useState([])
    const[filter,setfilter]=useState('all')
    const[refresh,setrefresh]=useState(false)

    useEffect(()=>{
        settask([
            {
                id: uuidv4(),
                title: 'task 1',
                status: true
            },
            {
                id: uuidv4(),
                title: 'task 2',
                status: false
            },
            {
                id: uuidv4(),
                title: 'task 3',
                status: false
            },
        ])
    },[])

    useEffect(()=>{
        if (filter==='all') {
            setfilteredtask(task)
        }
        if (filter==='completed') {
            const newfilteredtaskdone=task.filter(item=>item.status)
            setfilteredtask(newfilteredtaskdone)
        }
        if (filter==='actived') {
            const newfilteredtask=task.filter(item=>!item.status)
            setfilteredtask(newfilteredtask)
        }
    },[filter,task,refresh])
    
    const addtask=(tasktitle)=>{
        settask([...task,
            {
                id:uuidv4(),
                title:tasktitle,
                status:false
            }
        ])
    }

    const deletetask=(tasktid)=>{
        let newtask = task
        delete newtask[newtask.findIndex(item=>item.id===tasktid)]
        newtask = newtask.filter(item=>item)
        settask(newtask)
    }

    const donetask=(tasktid,taskstat)=>{
        let newtask = task
        const tskindex=newtask.findIndex(item=>item.id===tasktid)
        newtask[tskindex].status=taskstat
        settask(newtask)
        setrefresh(!refresh)
    }

    return(
        <div className="todo-app">
            <AddForm addtaskfunc={addtask}/>
            <TaskList tasks={filteredtask} deletetaskfunc={deletetask} status={donetask}/>
            <FilterTask taskcount={filteredtask.length} filterstatus={setfilter}/>
        </div>
    )
}

export default TodoApp