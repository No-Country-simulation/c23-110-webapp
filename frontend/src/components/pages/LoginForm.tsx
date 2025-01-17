import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserIcon, KeyIcon } from "@heroicons/react/24/solid";
import LoadingSpinSVG from "../../assets/LoadingSpinSVG";
import useAuth from "../../hooks/useAuth";
import { useToast } from "../../contexts/ToastifyContext";


export default function LoginForm() {
  // Implementacion de notificaciones con React Toastify!!
  const { notifyError } = useToast()
  const { authUser, setLoading, loading, state } = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    user: '',
    pass: ''
  })

  // Redirección a la página correspondiente
  useEffect(()=>{
    if (state.auth && state.role=='admin') navigate('/admin') 
    if (state.auth && state.role=='employee') navigate('/employee')
    return ()=>{}
  } ,[state.auth])
  
  // Accion al submit
  const handleSubmit = async(e: React.FormEvent)=>{
    e.preventDefault()
    setLoading(true)
    const authRes = await authUser({ user: formData.user, pass: formData.pass })
    if (!authRes) notifyError("Credenciales inválidas, por favor intenta nuevamente.")
    setLoading(false)
  }

  // Validaciones de entrada
  const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>)=> {
    const v = e.target.value
    if (v.trim().length==0 && formData.user.trim().length==0) return
    else return setFormData({...formData, user: v})
  }
    
  const handleChangePass = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const v = e.target.value
    if (v.trim().length==0 && formData.pass.trim().length==0) return
    else return setFormData({...formData, pass: v})
  }


  return (
    <main className="w-screen h-screen">
      <section className="bg-login bg-top bg-z bg-no-repeat w-full h-full flex justify-center items-center px-3">
        <div className="absolute inset-0 bg-black bg-opacity-50 blur-3xl px-10"></div>
          <form onSubmit={handleSubmit} className="relative w-full max-w-md bg-[rgba(0,0,0,0.3)] p-8 rounded-lg shadow-lg">
          <div className="text-center mb-7">
            <h1 className="font-poppins font-black text-white text-3xl">¡Bienvenido!</h1>
          </div>

            <div className="space-y-6">
            {/* User */}
              <div className="relative">
                <label
                  htmlFor="username"
                  className="block text-sm font-semibold tracking-wider text-gray-300 mb-1"
                >
                  Usuario
                </label>
              <input
                type="text"
                id="username"
                name="user"
                className="w-full h-12 px-12 outline-none rounded-md border-2 border-gray-600 bg-gray-800/50 text-white placeholder-gray-400 focus:border-[#FF5733] transition-all duration-400"
                placeholder="Ingrese su usuario"
                onChange={handleChangeUser}
                value={formData.user}
                />
                <UserIcon className="absolute w-6 h-6 top-9 left-4 text-primary" />
            </div>

            {/* Pass */}
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-semibold tracking-wider text-gray-300 mb-1"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="pass"
                className="w-full h-12 px-12 rounded-md outline-none border-2 border-gray-600 bg-gray-800/50 text-white placeholder-gray-400 focus:border-primary transition-all duration-400"
                placeholder="Ingrese su contraseña"
                onChange={handleChangePass}
                value={formData.pass}
              />
              <KeyIcon className="absolute w-6 h-6 top-9 left-4 text-primary" />
            </div>

            {/* Login */}
            <button
              type="submit"
              className="w-full py-3 bg-primary text-white font-bold text-lg rounded-lg shadow-lg hover:bg-primary-light active:scale-95 transition-all duration-200 grid place-items-center"
            >
              {loading ? <LoadingSpinSVG />:'Inicia Sesión'}
            </button>
          </div>
        </form>
      </section>
    </main>
    
  )
}