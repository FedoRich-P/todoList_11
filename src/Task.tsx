import * as React from 'react';
import ListItem from "@mui/material/ListItem";
import {getListItemSx} from "./Todolist.styles";
import Checkbox from "@mui/material/Checkbox";
import {EditableSpan} from "./EditableSpan";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {useAppDispatch, useAppSelector} from "./app/hooks";
import {changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./model/tasks-reducer";
import type {TaskType, TodolistType} from "./app/App";
import {ChangeEvent} from "react";

type TaskProps = {
    task: TaskType;
    todoList: TodolistType;
};
export const Task = ({task: {id: taskId, title, isDone}, todoList: {id: todoListId}}: TaskProps) => {

    const dispatch = useAppDispatch();

    const removeTaskHandler = () => {
        dispatch(removeTaskAC({taskId, todolistId: todoListId}))
    }

    const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newStatusValue = e.currentTarget.checked
        dispatch(changeTaskStatusAC({taskId, todolistId: todoListId, isDone: newStatusValue}))
    }

    const changeTaskTitleHandler = (title: string) => {
        dispatch(changeTaskTitleAC({taskId, title, todolistId: todoListId}))
    }

    return (
        <ListItem sx={getListItemSx(isDone)}>
            <div>
                <Checkbox checked={isDone} onChange={changeTaskStatusHandler}/>
                <EditableSpan value={title} onChange={changeTaskTitleHandler}/>
            </div>
            <IconButton onClick={removeTaskHandler}>
                <DeleteIcon/>
            </IconButton>
        </ListItem>
    )
};