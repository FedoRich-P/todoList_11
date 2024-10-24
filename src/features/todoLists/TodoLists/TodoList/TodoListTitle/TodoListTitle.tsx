import {EditableSpan} from "../../../../../common/components/EditableSpan/EditableSpan";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {changeTodolistTitleAC, removeTodolistAC} from "../../../../../model/todolists-reducer";
import type {TodolistType} from "../../../../../app/App";
import {useAppDispatch} from "../../../../../common/hooks/useAppDispatch";
import style from './TodoListTitle.module.css'

type TodoListTitleType = {
    todoList: TodolistType;
}

export const TodoListTitle = ({todoList: {id, title}} : TodoListTitleType)=> {

    const dispatch = useAppDispatch();

    const removeTodolistHandler = () => {
        dispatch(removeTodolistAC(id))
    }
    const updateTodolistHandler = (title: string) => {
        dispatch(changeTodolistTitleAC({id, title}))
    }
    return (
        <div className={style.container}>
            <h3><EditableSpan value={title} onChange={updateTodolistHandler}/></h3>
            <IconButton onClick={removeTodolistHandler}>
                <DeleteIcon/>
            </IconButton>
        </div>
    )
}