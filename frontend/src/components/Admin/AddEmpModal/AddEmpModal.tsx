import { useState } from "react"
import useAuth from "../../../hooks/useAuth"
import { ArrowPathIcon } from "@heroicons/react/24/solid"
import { useToast } from "../../../contexts/ToastifyContext"
import { useForm } from 'react-hook-form'
import { AddEmpInput, AddEmpSelect } from "./AddEmpInput.tsx"
import { addEmpModalType } from "../../../types/index.ts"

export default function AddEmpModal() {
  const { notifyError, notifySuccess } = useToast()
  const { addEmp } = useAuth()
  const [loading, setLoading] = useState(false)
  const { register, formState: { errors }, reset, handleSubmit } = useForm<addEmpModalType>()

  const addEmpSubmit = async(data: addEmpModalType) => {
    setLoading(true)
    const emp = await addEmp({ user: data.username, pass: data.password, role: data.role })
    setLoading(false)

    if(!emp) notifyError('Este usuario ya esxiste. Por favor, modifique los datos')
    else notifySuccess('Usurio registrado correctamente!')

    reset()
  }
  return (
    <form
      onSubmit={handleSubmit(addEmpSubmit)}
      className="page bg-[#F5F5F5] m-auto shadow-lg rounded-lg p-8 w-full max-w-lg mx-auto space-y-4"
    >
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-semibold text-orange-500">
          Añade un nuevo usuario
        </h2>
      </div>

      <div>
        <AddEmpInput id="username" placeholder="Nombre de usuario" minL={4} label="Nombre del nuevo usuario" register={register} errors={errors} />
      </div>

      <div>
        <AddEmpInput id="password" placeholder="Contraseña" minL={4} label="Contraseña del nuevo usuario" register={register} errors={errors} type="password" />
      </div>

      <div>
        <AddEmpSelect id="role" register={register} errors={errors} label="Rol del nuevo usuario" minL={1}
        dependecies={{
            validate: value => value !== "" || "Debes seleccionar un rol válido"
        }}/>
      </div>

      <button type="submit" className="w-full h-12 bg-orange-500 text-white flex items-center justify-center font-bold rounded-md hover:bg-orange-600 transition">
        {loading ? <ArrowPathIcon className="w-6 animate-spin" /> : 'Añadir Usuario'}
      </button>
    </form>
  )
}