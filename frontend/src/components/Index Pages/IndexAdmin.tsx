import { Bars3Icon, MagnifyingGlassIcon, TrashIcon, Cog8ToothIcon, ChartPieIcon, ClockIcon, PowerIcon, ArrowPathIcon, UserPlusIcon } from '@heroicons/react/24/solid';
import ButtonGeneral, { ButtonOrder } from './Elements/ButtonGeneral.tsx';
import useAuth from '../../hooks/useAuth.ts';
import { useEffect, useMemo, useState } from 'react';

export default function IndexAdmin() {
  const { state } = useAuth()
  const [loading, setLoading] = useState({
    orders: false
  })

  // Contador de letras del titulo
  const welcome = useMemo(()=>{
    const text = `Bienvenido ${state.user}! Empieza por aqui.`
    const textLength = text.length
    const averageCh = 0.9
    return { length: textLength*averageCh, text }
  },[])

  // Simulacion de carga
  useEffect(()=>{
    setTimeout(()=>setLoading({...loading, orders: true}), 2000)
    const textBlinking = document.querySelector('#welcome__page')!
    setTimeout(()=>textBlinking.classList.add('end'),2200)
  } ,[])

  return (
    <>
      <main className="flex">
        {/* ASIDE. BARRA LATERAL */}
        <aside className="bg-primary w-[275px] h-screen overflow-y-auto flex flex-col p-4">
          <nav className="flex flex-col">
            <section className="flex justify-between items-center mb-4">
              <div>
                <ButtonGeneral Icon={Bars3Icon} w="7" />
              </div>
              <div className="flex">
                <ButtonGeneral Icon={MagnifyingGlassIcon} />
                <ButtonGeneral Icon={TrashIcon} stroke={false} />
              </div>
            </section>

            {/* ASIDE. OPCIONES */}
            <section className="space-y-3">
              <ButtonGeneral text="Añadir usuario." Icon={UserPlusIcon} stroke={false} />
              <ButtonGeneral text="Configuración." Icon={Cog8ToothIcon} stroke={false} />
            </section>
          </nav>

          {/* ASIDE. FECHAS ORDENES */}
          {!loading.orders ?
          <div className='mt-5 grid w-full place-items-center'>
            <ArrowPathIcon className='animate-spin w-8 text-white' />
          </div>
          :
          <article className="mt-6 space-y-4">
            <section className="aside__order--section space-y-2">
              <div className="py-2 px-1 border-b border-gray-300">
                <p className="font-bold text-white">Hoy</p>
              </div>
              <div className="space-y-2">
                <ButtonOrder text="Ejemplo Orden." />
                <ButtonOrder text="Ejemplo Orden." />
                <ButtonOrder text="Ejemplo Orden." />
              </div>
            </section>

            <section className="aside__order--section space-y-2">
              <div className="py-2 px-1 border-b border-gray-300">
                <p className="font-bold text-white">Ayer</p>
              </div>
              <div className="space-y-2">
                <ButtonOrder text="Ejemplo Orden." />
                <ButtonOrder text="Ejemplo Orden." />
                <ButtonOrder text="Ejemplo Orden." />
              </div>
            </section>
          </article>
          }
        </aside>

        {/* MAIN */}
        <section className="flex flex-grow flex-col justify-center items-center gap-7">
          <div className="w-full flex justify-center items-center">
            <h1 className="text-3xl font-semibold text-gray-800 font-montserrat" style={{
              width: `${welcome.length}ch` ,
              animation: `typing 2s steps(${welcome.length}, end), 
                          blink-caret .5s step-end infinite alternate`
            }} id='welcome__page'>
              {welcome.text}
            </h1>
          </div>
          <div className="max-w-2xl w-full flex justify-around">
            {/* Botón Añadir Orden */}
            <button className="button-action flex flex-col gap-3 p-6 rounded-xl border-4 border-dashed border-gray-300 bg-gray-200 bg-opacity-50 text-gray-700 font-bold transition-all duration-300 ease-in-out hover:border-blue-500 hover:bg-blue-100 hover:scale-105 active:scale-95 active:bg-blue-200">
              <ChartPieIcon className="w-20 h-20 text-contrast mx-auto" />
              <span className="text-lg text-center">ESTADÍSTICAS</span>
            </button>

            {/* Botón Ver Historial */}
            <button className="button-action flex flex-col gap-3 p-6 rounded-xl border-4 border-dashed border-gray-300 bg-gray-200 bg-opacity-50 text-gray-700 font-bold transition-all duration-300 ease-in-out hover:border-green-500 hover:bg-green-100 hover:scale-105 active:scale-95 active:bg-green-200">
              <ClockIcon className="w-20 h-20 text-green-500 mx-auto" />
              <span className="text-lg text-center">VER HISTORIAL</span>
            </button>

            {/* Botón Cerrar Sesión */}
            <button className="button-action flex flex-col gap-3 p-6 rounded-xl border-4 border-dashed border-gray-300 bg-gray-200 bg-opacity-50 text-gray-700 font-bold transition-all duration-300 ease-in-out hover:border-red-500 hover:bg-red-100 hover:scale-105 active:scale-95 active:bg-red-200">
              <PowerIcon className="w-20 h-20 text-red-500 mx-auto stroke-current" />
              <span className="text-lg text-center">CERRAR SESIÓN</span>
            </button>
          </div>
        </section>  
      </main>
    </>
  )
}
