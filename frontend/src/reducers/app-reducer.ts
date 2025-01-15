// Reducer para almacenar las funciones de la app

export type AppState = {
    auth: boolean,
    id: string,
    user: string,
    role: string
}
export type AppActions = 
    {type: 'auth-login', payload: {user: AppState['user'], id: AppState['id'], role: AppState['role']}}

export const initialValue: AppState =  {
    auth: false,
    id: '',
    user: '',
    role: ''
} 

export function appReducer(
    state: AppState = initialValue,
    action: AppActions
){
    // Agregar usuario previamnete validado en useAuth.ts
    if (action.type == 'auth-login'){
        return {...state, auth: true, id: action.payload.id, user: action.payload.user, role: action.payload.role}
    }
    return state
}