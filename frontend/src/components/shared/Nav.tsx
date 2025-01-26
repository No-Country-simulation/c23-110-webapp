import { useState } from "react"
import useAuth from "../../hooks/useAuth"
import { ButtonOptionNav } from "./ButtonGeneral"
import { HomeIcon, ChartPieIcon, BanknotesIcon, UserIcon, CubeIcon, PlusCircleIcon, ClockIcon, ChevronDownIcon } from "@heroicons/react/24/solid"

export default function Nav() {
    const [openMenu, setOpenMenu] = useState(false)
    const { state, asideOpen } = useAuth()

  return (
    <nav className="w-full px-5 py-4 flex justify-between items-center bg-primary  top-0 z-10 max-[950px]:w-full max-[950px]:left-0">
        <div className='relative select-none flex items-center'>
            <button onClick={()=>setOpenMenu(!openMenu)} className=" ml-2 text-[28px] font-bold text-white flex items-center gap-2 relative transition-all duration-200"
                style={{marginLeft: asideOpen ? '0px':'52px'}}>
                <span>ParkGes</span>
                <ChevronDownIcon className="w-6 mt-[2px] stroke-current text-white transition-transform duration-100" style={{transform: `${openMenu ? 'rotate(180deg)':'rotate(0deg)'}`}} />
            </button>
            <div className='list absolute top-5 w-max p-2 bg-white flex flex-col gap-2 rounded-lg transition-all duration-150'
                style={{
                    opacity: `${openMenu ? '1' : '0'}`,
                    transform: `${openMenu ? 'translateY(30px)' : 'translateY(5px)'}`,
                    visibility: `${openMenu ? 'visible' : 'hidden'}`,
                  }}>
                {
                state.role == 'admin' &&
                <> 
                    <ButtonOptionNav text="Volver a inicio" Icon={HomeIcon} color="text-gray-500" path="/" setOpenMenu={setOpenMenu}></ButtonOptionNav>
                    <ButtonOptionNav text="Estadísticas" Icon={ChartPieIcon} color="text-indigo-500" path="statics" setOpenMenu={setOpenMenu}></ButtonOptionNav>
                    <ButtonOptionNav text="Ordenes de Venta" Icon={BanknotesIcon} color="text-emerald-500" path="sales" setOpenMenu={setOpenMenu}></ButtonOptionNav>
                    <ButtonOptionNav text="Gestión de Usuarios" Icon={UserIcon} color="text-purple-500" path="users" setOpenMenu={setOpenMenu}></ButtonOptionNav>
                    <ButtonOptionNav text="Gestión de Juegos" Icon={CubeIcon} color="text-yellow-500" path="games" setOpenMenu={setOpenMenu}></ButtonOptionNav>
                    <ButtonOptionNav text="Historial" Icon={ClockIcon} color="text-green-500" path="history" setOpenMenu={setOpenMenu}/>
                </>
                }

                {
                state.role == 'employee' && 
                <>
                    <ButtonOptionNav text="Volver a inicio" Icon={HomeIcon} color="text-gray-500" path="/" setOpenMenu={setOpenMenu}></ButtonOptionNav>
                    <ButtonOptionNav text="Añadir Venta" Icon={PlusCircleIcon} color="text-emerald-500" path="new" setOpenMenu={setOpenMenu}></ButtonOptionNav>
                    <ButtonOptionNav text="Historial" Icon={ClockIcon} color="text-green-500" path="history" setOpenMenu={setOpenMenu} />
                </>
                }
            </div>
        </div>
    </nav>
  )
}
