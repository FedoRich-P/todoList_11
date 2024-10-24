import {FilterValuesType, type TodolistType} from "../../../../../app/App";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {changeTodolistFilterAC} from "../../../../../model/todolists-reducer";
import {useAppDispatch} from "../../../../../common/hooks/useAppDispatch";
import {filterButtonsContainerSx} from "./FilterTasksButtons.styles";

type FilterTasksButtonsPropsType = {
    todoLists: TodolistType;
}

export const FilterTasksButtons = ({todoLists: {id, filter}}: FilterTasksButtonsPropsType) => {

    const dispatch = useAppDispatch();

    const changeFilterTasksHandler = (filter: FilterValuesType) => {
        dispatch(changeTodolistFilterAC({id, filter}))
    }

    return (
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
    )
}
