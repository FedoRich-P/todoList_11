import {type TodolistType} from "../../../../app/App";
import {AddItemForm} from "../../../../common/components/AddItemForm/AddItemForm";
import {TodoListTitle} from "./TodoListTitle/TodoListTitle";
import {Tasks} from "./Tasks/Tasks";
import {FilterTasksButtons} from "./FilterTasksButtons/FilterTasksButtons";


type TodolistPropsType = {
    todoLists: TodolistType;
    addTask: (title: string, todolistId: string) => void
}

export const Todolist = ({todoLists: {id, title, filter}, addTask}: TodolistPropsType) => {
    const addTaskCallback = (title: string) => {
        addTask(title, id)
    }

    return (
        <div>
            <TodoListTitle todoList={{id, title, filter}}/>
            <AddItemForm addItem={addTaskCallback}/>
            <Tasks todoList={{id, title, filter}}/>
            <FilterTasksButtons todoLists={{id, title, filter}}/>
        </div>
    )
}
