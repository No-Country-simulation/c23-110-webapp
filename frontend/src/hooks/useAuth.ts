import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function useAuth(){
    const { state, dispatch, loading, setLoading } = useContext(AppContext)

    // Validar usuario
    const authUser = async({ user, pass }: { user: string, pass: string })=>{
        const dataUpdate = {
            user: user,
            pass: pass
        }

        const dataOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataUpdate)
            
        }

        const rq = await fetch('url/api/users', dataOptions)
        const dt = await rq.json()

        if (dt.auth) {
            dispatch({type: 'auth-login', payload: {id: dt.id, user: user, role: dt.role}})
            return true
        }
        else return false
    }
    
    // Retorno de valores
    return { authUser, setLoading, dispatch, state, loading }
}