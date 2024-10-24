
export const CHANGE_THEME = 'CHANGE_THEME'
// types
export type ThemeMode = 'dark' | 'light'
type InitialStateType = typeof initialState
// initialState
const initialState = {
    themeMode: 'light' as ThemeMode,
}

export const appReducer = (state = initialState, action: Action): InitialStateType => {
    switch (action.type) {
        case CHANGE_THEME : {
            return {
                ...state,
                themeMode: action.payload.themeMode
            }
        }
        default: {
            return state
        }
    }
}

export const changeThemeAC = (themeMode: ThemeMode) => {
    return {type: CHANGE_THEME, payload : {themeMode}} as const
}

export type ChangeThemeAction = ReturnType<typeof changeThemeAC>

type Action = ChangeThemeAction