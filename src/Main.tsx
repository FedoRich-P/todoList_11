import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import {AddItemForm} from "./AddItemForm";
import React from "react";
import {addTodolistAC} from "./model/todolists-reducer";
import {useAppDispatch} from "./app/hooks";
import {TodoLists} from "./TodoLists";

export const Main = () => {
    const dispatch = useAppDispatch();

    const addTodolist = (title: string) => {
        dispatch(addTodolistAC(title))
    }
    return (
        <Container fixed>
            <Grid container sx={{mb: '30px'}}>
                <AddItemForm addItem={addTodolist}/>
            </Grid>
            <Grid container spacing={4}>
                <TodoLists/>
            </Grid>
        </Container>
    )
}