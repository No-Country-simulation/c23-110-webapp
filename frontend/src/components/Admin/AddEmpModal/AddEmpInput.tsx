import { UseFormRegister, RegisterOptions, FieldErrors } from "react-hook-form"
import { addEmpModalType } from "../../../types"

type addEmpInputsProps = {
    minL: number,
    register: UseFormRegister<addEmpModalType>,
    errors: FieldErrors<addEmpModalType>,
    dependecies?: RegisterOptions<addEmpModalType, keyof addEmpModalType>
    id: keyof addEmpModalType,
    placeholder?: string,
    label: string,
    type?: string
}

export function AddEmpInput({ minL, register, errors, dependecies, id, placeholder, label, type }: addEmpInputsProps){
    return (
        <>
            <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-1">
                {label}
            </label>
            <input
                id="username"
                type={`${type ? type:'text'}`}
                minLength={4}
                placeholder={placeholder}
                className={`w-full h-12 px-4 outline-none border ${errors[id]?.message && 'border-red-500' } rounded-md focus:ring-2 outline-none focus:${errors[id]?.message ? 'ring-red-500':'ring-orange-500'} focus:border-transparent transition`}
                {...register(id, {
                    required: 'Este campo es requerido',
                    minLength: {
                        value: minL,
                        message: `El campo debe tener al menos ${minL}`
                    },
                    ...dependecies
                })}
            />
            {errors[id] && <small className="text-red-500">{errors[id]?.message}</small>}
        </>
    )
}

export function AddEmpSelect({ register, errors, id, label }: addEmpInputsProps){
    return (
        <>
            <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-1">
                {label}
            </label>
            <select
                id={id}
                className={`w-full h-12 outline-none px-4 border ${errors[id]?.message && 'border-red-500' } rounded-md focus:${errors[id]?.message ? 'ring-red-500':'ring-orange-500'} focus:border-transparent transition`}
                {...register(id, {
                    required: 'Este campo es requerido'
                })}
            >
                <option value="">-- Selecciona un rol</option>
                <option value="EMPLOYEE">Empleado</option>
                <option value="ADMIN">Admin</option>
            </select>
            {errors[id] && <small className="text-red-500">{errors[id]?.message}</small>}
        </>
    )
}