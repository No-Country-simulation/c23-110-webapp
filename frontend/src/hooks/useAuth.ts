import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

type useAuthFuncProps = {
    user: string,
    pass: string,
    role?: string
}
type useAuthFuncUser = {
    apiRQ: string,
    info: object
}

export default function useAuth(){
    const { state, dispatch, loading, setLoading } = useContext(AppContext)

    // Validar request
    const authRQ = async ({ apiRQ, info }: useAuthFuncUser)=>{
        try {
            const rq = await fetch(apiRQ, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(info)
            })
            const dt = await rq.json()
            console.log(dt)
            return { dt, validate: true }
        }
        catch (err){
            console.log(err)
            return {validate: false}
        }
    }

    // Validar usuario
    const authUser = async({ user, pass }: useAuthFuncProps)=>{
        const dataUpdate = {username: user, passwors: pass}
        const auth = await authRQ({ apiRQ: 'https://cbec-2607-fea8-5864-4000-f0c3-2a2d-d199-6dbc.ngrok-free.app/api/login',
                                    info: dataUpdate})
        
        if (auth.validate) {
            dispatch({type: 'auth-login', payload: {user: user, id: auth.dt.id, role: auth.dt.rol}})
            return true
        }
        else return false
    }

    // Añadir empleado
    const addEmp = async({ user, pass, role }: useAuthFuncProps)=>{
        const dataUpdate = { nombre: user, 
                            contrasena: pass, 
                            rol: role }
        const auth = await authRQ({apiRQ: 'https://cbec-2607-fea8-5864-4000-f0c3-2a2d-d199-6dbc.ngrok-free.app/api/usuarios',
                                    info: dataUpdate})

        return auth.validate
    }
    
    // Retorno de valores
    return { authUser, addEmp, setLoading, dispatch, state, loading }
}