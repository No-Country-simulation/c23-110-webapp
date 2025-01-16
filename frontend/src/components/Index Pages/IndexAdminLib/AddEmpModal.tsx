import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { useToast } from "../../../contexts/ToastifyContext";

export default function AddEmpModal() {
    const { notifyError, notifySuccess } = useToast()
  const { addEmp } = useAuth()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Lógica para añadir empleado
    const form = e.target as HTMLFormElement
    setLoading(true)
    const emp = await addEmp({ user: form.username.value, pass: form.password.value, role: form.value })
    setLoading(false)

    if(!emp) notifyError('Este usuario ya esxiste. Por favor, modifique los datos')
    else notifySuccess('Usurio registrado correctamente!')
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#F5F5F5] m-auto shadow-lg rounded-lg p-8 w-full max-w-lg mx-auto"
    >
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-semibold text-orange-500">
          Añade un nuevo usuario
        </h2>
      </div>

      <div className="mb-4">
        <label
          htmlFor="username"
          className="block text-sm font-semibold text-gray-700 mb-1"
        >
          Nombre del nuevo usuario
        </label>
        <input
          id="username"
          type="text"
          minLength={4}
          placeholder="Nombre de usuario"
          className="w-full h-12 px-4 border rounded-md focus:ring-2 outline-none focus:ring-orange-500 focus:border-transparent transition"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-semibold text-gray-700 mb-1"
        >
          Contraseña del nuevo usuario
        </label>
        <input
          id="password"
          type="password"
          minLength={4}
          placeholder="Contraseña"
          className="w-full h-12 px-4 border rounded-md outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="role"
          className="block text-sm font-semibold text-gray-700 mb-1"
        >
          Rol del nuevo usuario
        </label>
        <select
          id="role"
          className="w-full h-12 px-4 border outline-none rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
        >
          <option value="all">-- Selecciona un rol</option>
          <option value="EMPLOYEE">Empleado</option>
          <option value="ADMIN">Admin</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full h-12 bg-orange-500 text-white text-center font-bold rounded-md hover:bg-orange-600 transition"
      >
        {loading ?
        <ArrowPathIcon className="w-5 animate-spin" />
        :   
        'Añadir Usuario'}
      </button>
    </form>
  );
}

