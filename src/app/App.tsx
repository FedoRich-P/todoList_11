import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';
import React from 'react';
import {useAppSelector} from './hooks';
import {getTheme} from "../common/theme/theme";
import {Header} from "../Header";
import {Main} from "../Main";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterValuesType = 'all' | 'active' | 'completed'

export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksStateType = {
    [key: string]: TaskType[]
}


export const App = () => {
    const themeMode = useAppSelector(state => state.app.themeMode)
    const theme = getTheme(themeMode);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Header/>
            <Main/>
        </ThemeProvider>
    );
}
