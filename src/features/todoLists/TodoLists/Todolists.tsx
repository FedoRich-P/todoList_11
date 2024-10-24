import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import {Todolist} from "./TodoList/Todolist";
import React from "react";

import {addTaskAC} from "../../../model/tasks-reducer";
import {useAppSelector} from "../../../common/hooks/useAppSelector";
import {useAppDispatch} from "../../../common/hooks/useAppDispatch";

export const Todolists = () => {
    const todoLists = useAppSelector(state => state.todoLists)
    const dispatch = useAppDispatch();

    const addTask = (title: string, todolistId: string) => {
        dispatch(addTaskAC({todolistId, title}))
    }

    return (
        <>
            {todoLists.map((todoList) => {
                return (
                    <Grid key={todoList.id}>
                        <Paper sx={{p: '0 20px 20px 20px'}}>
                            <Todolist
                                todoLists={todoList}
                                addTask={addTask}
                            />
                        </Paper>
                    </Grid>
                )
            })}
        </>
    )
}