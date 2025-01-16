import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function useAuth(){
    const { state, dispatch, loading, setLoading } = useContext(AppContext)

    // Validar usuario
    const authUser = async({ user, pass }: { user: string, pass: string })=>{
        try {
            const dataUpdate = { username: user, password: pass }

            const rq = await fetch('https://cbec-2607-fea8-5864-4000-f0c3-2a2d-d199-6dbc.ngrok-free.app/api/login', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(dataUpdate)
            })
            const dt = await rq.json()
            console.log(dt)
            dispatch({ type: 'auth-login', payload: {user: user, id: dt.id, role: dt.rol} })
            return true
        }
        catch (err){
            console.log(err)
            return false
        }
    }
    
    // Retorno de valores
    return { authUser, setLoading, dispatch, state, loading }
}