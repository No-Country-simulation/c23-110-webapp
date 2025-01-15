import { createContext, useReducer, Dispatch, useState } from "react";
import { AppActions, AppState, initialValue, appReducer } from "../reducers/app-reducer";

type AppContextProps = {
    state: AppState,
    dispatch: Dispatch<AppActions>,
    loading: boolean,
    setLoading: (loading: boolean)=>void
}
type ContextProviderProps = {
    children: React.ReactNode
}

export const AppContext = createContext<AppContextProps>(null!)

export function AppProvider({ children }: ContextProviderProps){
    const [state, dispatch] = useReducer(appReducer, initialValue)
    const [loading, setLoading] = useState(false)

    return (
        <AppContext.Provider value={{
            state, dispatch, 
            loading, setLoading
        }}>
            {children}
        </AppContext.Provider>
    )
}