import { useState } from "react";
import { UserIcon, KeyIcon } from "@heroicons/react/24/solid";
import LoadingSpinSVG from "../assets/LoadingSpinSVG";
import useAuth from "../hooks/useAuth";
import { useToast } from "../contexts/ToastifyContext";


export default function LoginForm() {
  // Implementacion de notificaciones con React Toastify!!
  const { notifyError } = useToast()
  const { authUser, setLoading, loading } = useAuth()
  const [formData, setFormData] = useState({
    user: '',
    pass: ''
  })
  
  // Accion al submit
  const handleSubmit = async(e: React.FormEvent)=>{
    e.preventDefault()
    setLoading(true)
    const authRes: boolean = await authUser({ user: formData.user, pass: formData.pass })
    if (!authRes) notifyError("Credenciales inválidas, por favor intenta nuevamente.")
    setLoading(false)

    // Codigo de prueba
    //setTimeout(()=>setLoading(false), 1000)
    //notifyError("Credenciales inválidas, por favor intenta nuevamente.")
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
  );
}
