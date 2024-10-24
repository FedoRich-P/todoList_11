import * as React from 'react';
import List from "@mui/material/List";
import {ChangeEvent} from "react";
import ListItem from "@mui/material/ListItem";
import {getListItemSx} from "./Todolist.styles";
import Checkbox from "@mui/material/Checkbox";
import {EditableSpan} from "./EditableSpan";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {useAppDispatch, useAppSelector} from "./app/hooks";
import {changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./model/tasks-reducer";
import type {TodolistType} from "./app/App";
import {Task} from "./Task";

type TasksProps = {
    todoList: TodolistType;
};
export const Tasks = ({todoList: {id, filter, title}}: TasksProps) => {

    const tasks = useAppSelector(state => state.tasks)

    const dispatch = useAppDispatch();

    const removeTask = (taskId: string, todolistId: string) => {
        dispatch(removeTaskAC({taskId, todolistId}))
    }
    const changeTaskStatus = (taskId: string, isDone: boolean, todolistId: string) => {
        dispatch(changeTaskStatusAC({taskId, todolistId, isDone}))
    }

    const updateTask = (todolistId: string, taskId: string, title: string) => {
        dispatch(changeTaskTitleAC({taskId, title, todolistId}))
    }

    const allTodolistTasks = tasks[id]
    let tasksForTodolist = allTodolistTasks

    if (filter === 'active') {
        tasksForTodolist = allTodolistTasks.filter(task => !task.isDone)
    }

    if (filter === 'completed') {
        tasksForTodolist = allTodolistTasks.filter(task => task.isDone)
    }

    const tasksList = tasksForTodolist.map((task) => {
        return <Task key={task.id} task={task} todoList={{id, filter, title}}/>
    })

    return (
        <>
            {
                tasksForTodolist.length === 0
                    ? <p>Тасок нет</p>
                    : <List>
                        {tasksList}
                    </List>
            }
        </>
    );
};


// const removeTaskHandler = () => {
//     removeTask(task.id, id)
// }
//
// const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
//     const newStatusValue = e.currentTarget.checked
//     changeTaskStatus(task.id, newStatusValue, id)
// }
//
// const changeTaskTitleHandler = (title: string) => {
//     updateTask(id, task.id, title)
// }
// return <ListItem key={task.id} sx={getListItemSx(task.isDone)}>
//     <div>
//         <Checkbox checked={task.isDone} onChange={changeTaskStatusHandler}/>
//         <EditableSpan value={task.title} onChange={changeTaskTitleHandler}/>
//     </div>
//     <IconButton onClick={removeTaskHandler}>
//         <DeleteIcon/>
//     </IconButton>
// </ListItem>