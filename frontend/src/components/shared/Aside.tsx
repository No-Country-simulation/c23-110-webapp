import { useState, useEffect } from "react"
import { TrashIcon, MagnifyingGlassIcon, Bars3Icon, Cog8ToothIcon, ChatBubbleOvalLeftIcon, ArrowPathIcon } from "@heroicons/react/24/solid"
import ButtonGeneral, { ButtonOrder } from "./ButtonGeneral"
import useAuth from "../../hooks/useAuth"

export default function Aside() {
    const { state } = useAuth()
    
    const [loading, setLoading] = useState({
        orders: false
      })

    // Simulacion de carga
    useEffect(()=>{
        if (!state.auth && state.role!='employee') return
        setTimeout(()=>setLoading({...loading, orders: true}), 2000)
    } ,[])

  return (
    <aside className="bg-primary w-[275px] h-full overflow-y-auto flex flex-col p-4 max-[950px]:hidden">
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

          {/* ASIDE - OPCIONES */}
          <section>
            <ButtonGeneral text="Configuración." Icon={Cog8ToothIcon} stroke={false} />
            <ButtonGeneral text="Mensajes." Icon={ChatBubbleOvalLeftIcon} stroke={false} />
          </section>
        </nav>

        {/* ASIDE - FECHAS Y ÓRDENES */}
        {!loading.orders ? (
          <div className="mt-5 grid w-full place-items-center">
            <ArrowPathIcon className="animate-spin w-8 text-white" />
          </div>
        ) : (
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
        )}
      </aside>
  )
}
