import {useSelector} from 'react-redux'
import type {RootState} from "../../app/store";

export const useAppSelector = useSelector.withTypes<RootState>()

// const task = useSelector<RootState, TasksStateType>((state) => state.tasks)
// const tasks = useAppSelector((state) => state.tasks)