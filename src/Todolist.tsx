import {FilterValuesType, type TodolistType} from "./app/App";
import {AddItemForm} from "./AddItemForm";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {filterButtonsContainerSx} from "./Todolist.styles";
import {TodoListTitle} from "./TodoListTitle";
import {Tasks} from "./Tasks";


type PropsType = {
todoLists: TodolistType;
	changeFilter: (filter: FilterValuesType, id: string) => void
	addTask: (title: string, todolistId: string) => void
}

export const Todolist = (props: PropsType) => {
	const {
		todoLists: {id, title, filter},
		changeFilter,
		addTask,
	} = props

	const changeFilterTasksHandler = (filter: FilterValuesType) => {
		changeFilter(filter, id)
	}

	const addTaskCallback = (title: string) => {
		addTask(title, id)
	}

	return (
		<div>
			<TodoListTitle todoList={{id, title, filter}}/>
			<AddItemForm addItem={addTaskCallback}/>
			<Tasks todoList={{id, title, filter}}/>
			<Box sx={filterButtonsContainerSx}>
				<Button
					variant={filter === 'all' ? 'outlined' : 'text'}
					color={'inherit'}
					onClick={() => changeFilterTasksHandler('all')}>
					All
				</Button>
				<Button
					variant={filter === 'active' ? 'outlined' : 'text'}
					color={'primary'}
					onClick={() => changeFilterTasksHandler('active')}>
					Active
				</Button>
				<Button
					variant={filter === 'completed' ? 'outlined' : 'text'}
					color={'secondary'}
					onClick={() => changeFilterTasksHandler('completed')}>
					Completed
				</Button>
			</Box>
		</div>
	)
}
