import { useState } from "react"
import useAuth from "../../hooks/useAuth"
import { ButtonOptionNav } from "./ButtonGeneral"
import { HomeIcon, ChartPieIcon, BanknotesIcon, UserIcon, CubeIcon, PlusCircleIcon, ClockIcon } from "@heroicons/react/24/solid"

export default function Nav() {
    const [openMenu, setOpenMenu] = useState(false)
    const { state } = useAuth()
    
  return (
    <nav className="w-full px-5 py-5 flex justify-between items-center bg-primary fixed top-0 left-[275px] z-50 max-[950px]:w-full max-[950px]:left-0">
        <div className='relative select-none'>
            <button onClick={()=>setOpenMenu(!openMenu)} className="text-2xl font-bold text-white">ParkGest</button>
            <div className='absolute mt-[-10px] w-max p-2 bg-white flex flex-col gap-2 rounded-lg transition-all duration-150'
                style={{opacity: `${openMenu ? '1':'0'}`,
                        transform: `${openMenu ? 'translateY(20px)':'translateY(5px)'} `}}>
                {
                state.role == 'admin' &&
                <>
                    <ButtonOptionNav text="Volver a inicio" Icon={HomeIcon} color="text-gray-500" path="/index" setOpenMenu={setOpenMenu}></ButtonOptionNav>
                    <ButtonOptionNav text="Estadísticas" Icon={ChartPieIcon} color="text-indigo-500" path="/statics" setOpenMenu={setOpenMenu}></ButtonOptionNav>
                    <ButtonOptionNav text="Ordenes de Venta" Icon={BanknotesIcon} color="text-emerald-500" path="/sales" setOpenMenu={setOpenMenu}></ButtonOptionNav>
                    <ButtonOptionNav text="Gestion de Usuarios" Icon={UserIcon} color="text-purple-500" path="/users" setOpenMenu={setOpenMenu}></ButtonOptionNav>
                    <ButtonOptionNav text="Gestion de Juegos" Icon={CubeIcon} color="text-yellow-500" path="/games" setOpenMenu={setOpenMenu}></ButtonOptionNav>
                    <ButtonOptionNav text="Historial" Icon={ClockIcon} color="text-green-500" path="/history" setOpenMenu={setOpenMenu}/>
                </>
                }

                {
                state.role == 'employee' && 
                <>
                    <ButtonOptionNav text="Volver a inicio" Icon={HomeIcon} color="text-gray-500" path="/index" setOpenMenu={setOpenMenu}></ButtonOptionNav>
                    <ButtonOptionNav text="Añadir Venta" Icon={PlusCircleIcon} color="text-emerald-500" path="/new" setOpenMenu={setOpenMenu}></ButtonOptionNav>
                    <ButtonOptionNav text="Historial" Icon={ClockIcon} color="text-green-500" path="/history" setOpenMenu={setOpenMenu} />
                </>
                }
            </div>
        </div>
    </nav>
  )
}
