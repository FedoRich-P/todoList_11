import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import {Todolist} from "./Todolist";
import React from "react";
import {useAppDispatch, useAppSelector} from "./app/hooks";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./model/tasks-reducer";
import type {FilterValuesType} from "./app/App";
import {changeTodolistFilterAC, changeTodolistTitleAC, removeTodolistAC} from "./model/todolists-reducer";

export const TodoLists = () => {
    const todoLists = useAppSelector(state => state.todoLists)

    const dispatch = useAppDispatch();

    const addTask = (title: string, todolistId: string) => {
        dispatch(addTaskAC({todolistId, title}))
    }
    const changeFilter = (filter: FilterValuesType, id: string) => {
        dispatch(changeTodolistFilterAC({filter, id}))
    }

    return (
        <>
            {todoLists.map(({id, title, filter}) => {
                return (
                    <Grid key={id}>
                        <Paper sx={{p: '0 20px 20px 20px'}}>
                            <Todolist
                                todoLists={{id, title, filter}}
                                changeFilter={changeFilter}
                                addTask={addTask}
                            />
                        </Paper>
                    </Grid>
                )
            })}
        </>
    )
}

// const allTodolistTasks = tasks[id]
// let tasksForTodolist = allTodolistTasks
//
// if (filter === 'active') {
//     tasksForTodolist = allTodolistTasks.filter(task => !task.isDone)
// }
//
// if (filter === 'completed') {
//     tasksForTodolist = allTodolistTasks.filter(task => task.isDone)
// }