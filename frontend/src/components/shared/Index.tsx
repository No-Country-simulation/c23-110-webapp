import { useMemo, useEffect } from "react"
import { ChartPieIcon, ClockIcon, PowerIcon, PlusIcon } from "@heroicons/react/24/solid"
import useAuth from "../../hooks/useAuth"

export default function Index() {
    const { state } = useAuth()

    const welcome = useMemo(()=>{
        const text = `Bienvenido ${state.user}! Empieza por aqui.`
        const textLength = text.length
        const averageCh = 0.9
        return { length: textLength*averageCh, text }
      },[])

    // Simulacion de carga
      useEffect(()=>{
        const textBlinking = document.querySelector('#welcome__page')!
        setTimeout(()=>textBlinking.classList.add('end'),2200)
      } ,[])
  return (
    <>
        {/*ANIMACION DE SALUDO */}
        <div className="page w-full flex justify-center items-center">
            <h1
                className="text-3xl font-semibold text-gray-800 font-montserrat max-[539px]:text-2xl"
                style={{
                width: `${welcome.length}ch`,
                animation: `typing 2s steps(${welcome.length}, end), 
                blink-caret .5s step-end infinite alternate`,
                }}
                id="welcome__page"
            >
                {welcome.text}
            </h1>
        </div>
        
        {/*BOTONES DE ACCIÓN*/}
        <div className="max-w-2xl w-full flex justify-around flex-wrap gap-8">
            {   
            state.role == 'admin' &&
            <>
                {/* Botón Estadísticas */}
                <button className="button-action p-4 flex items-center justify-center flex-col gap-3 rounded-xl border-4 border-dashed border-gray-300 bg-gray-200 bg-opacity-50 text-gray-700 font-bold transition-all duration-300 ease-in-out hover:border-blue-500 hover:bg-blue-100 hover:scale-105 active:scale-95 active:bg-blue-200 max-[436px]:w-36">
                    <ChartPieIcon className="w-20 h-20 max-[436px]:w-16 max-[436px]:h-16 text-contrast mx-auto" />
                    <span className="text-lg text-center max-[436px]:text-sm">ESTADÍSTICAS</span>
                </button>
            </>
            }

            {
            state.role == 'employee' &&
            <>
                {/* Botón Añadir Orden */}
                <button className="button-action p-3 flex items-center justify-center flex-col gap-3 rounded-xl border-4 border-dashed border-gray-300 bg-gray-200 bg-opacity-50 text-gray-700 font-bold transition-all duration-300 ease-in-out hover:border-blue-500 hover:bg-blue-100 hover:scale-105 active:scale-95 active:bg-blue-200 max-[436px]:w-36">
                    <PlusIcon className="w-20 h-20 max-[436px]:w-16 max-[436px]:h-16 text-contrast mx-auto stroke-current" />
                    <span className="text-lg text-center max-[436px]:text-sm">AÑADIR ORDEN</span>
                </button>
            </>
            }

            {/* Botón Ver Historial */}
            <button className="button-action p-3 flex items-center justify-center flex-col gap-3 rounded-xl border-4 border-dashed border-gray-300 bg-gray-200 bg-opacity-50 text-gray-700 font-bold transition-all duration-300 ease-in-out hover:border-green-500 hover:bg-green-100 hover:scale-105 active:scale-95 active:bg-green-200 max-[436px]:w-36">
                <ClockIcon className="w-20 h-20 max-[436px]:w-16 max-[436px]:h-16 text-green-500 mx-auto" />
                <span className="text-lg text-center max-[436px]:text-sm">VER HISTORIAL</span>
            </button>

            {/* Botón Cerrar Sesión */}
            <button className="button-action p-3 flex items-center justify-center flex-col gap-3 rounded-xl border-4 border-dashed border-gray-300 bg-gray-200 bg-opacity-50 text-gray-700 font-bold transition-all duration-300 ease-in-out hover:border-red-500 hover:bg-red-100 hover:scale-105 active:scale-95 active:bg-red-200 max-[436px]:w-36">
                <PowerIcon className="w-20 h-20 max-[436px]:w-16 max-[436px]:h-16 text-red-500 mx-auto stroke-current" />
                <span className="text-lg text-center max-[436px]:text-sm">CERRAR SESIÓN</span>
            </button>
        </div>
    </>
  )
}
