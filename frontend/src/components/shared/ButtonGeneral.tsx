import { useState } from "react"
import { EllipsisHorizontalIcon, TrashIcon, InformationCircleIcon, PencilIcon } from "@heroicons/react/24/solid"
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

type ButtonGeneralProps = {
    text?: string,
    Icon?: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string,
      titleId?: string,
    } & React.RefAttributes<SVGSVGElement>>,
    stroke?: boolean,
    w?: string,
    func?: (arg?: string) => void;
  }
  

type ButtonOrderProps = {
  text: string,
}

type ButtonOptionNavProps = {
  text: string, 
  path: string,
  Icon: ButtonGeneralProps['Icon'], 
  color: string,
  setOpenMenu: (open: boolean)=>void
}

export default function ButtonGeneral({text, Icon, stroke = true, w = "7", func=()=>console.log('click')}: ButtonGeneralProps) {
    return (
      <button onClick={()=>func()} className="w-full hover:bg-[rgba(255,255,255,.3)] focus:bg-[rgba(255,255,255,.3)] active:scale-95  p-2 rounded-md transition-all duration-200 flex items-center gap-2 text-white font-semibold">
        {Icon && <Icon className={`w-${w} text-gray-100 ${stroke ? "stroke-current" : "stroke-none"}`} />}
        {text}
      </button>
    )
  }

export function ButtonOrder({ text }: ButtonOrderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { state } = useAuth()
  const toggleMenu = () => setMenuOpen((prev) => !prev)

  // Cerrar el menú al perder el foco
  const handleBlur = () => {
    setMenuOpen(false)
  }

  return (
    <button
      className="py-2 px-3 group flex justify-between gap-3 w-full items-center hover:bg-[rgba(255,255,255,.3)] text-white rounded-lg transition-all duration-200"
      onBlur={handleBlur}
    >
      <span className="flex-1">{text}</span>
      <span className="relative">
        {/* Icono de elipsis */}
        <EllipsisHorizontalIcon
          className="w-6 stroke-current transition-opacity duration-200 opacity-0 group-hover:opacity-100 group-focus:opacity-100"
          onClick={toggleMenu}
        />
        {/* Menú desplegable */}
        {menuOpen && (
          <div className="absolute right-0 top-8 w-36 bg-white rounded-lg shadow-lg z-10 transition-all duration-200 scale-100 opacity-100">
            <ul className="space-y-2 p-1 text-black text-sm">
              {
              state.role == 'admin' &&
              <>
                {/* Opción Info */}
                <li
                    className="flex items-center gap-2 hover:bg-gray-200 p-1 cursor-pointer rounded-md"
                    onClick={() => setMenuOpen(false)}
                  >
                    <InformationCircleIcon className="w-5 h-5 text-blue-500" />
                    Ver Info
                </li>
                {/* Opción Eliminar */}
                <li
                  className="flex items-center gap-2 hover:bg-gray-200 p-1 cursor-pointer rounded-md"
                  onClick={() => setMenuOpen(false)}
                >
                  <TrashIcon className="w-5 h-5 text-red-500" />
                  Eliminar
                </li>
                {/* Opción Modificar */}
                <li
                  className="flex items-center gap-2 hover:bg-gray-200 p-1 cursor-pointer rounded-md"
                  onClick={() => setMenuOpen(false)}
                >
                  <PencilIcon className="w-5 h-5 text-yellow-500" />
                  Modificar
                </li>
              </>
              }

              {
              state.role == 'employee' &&
                <li
                    className="flex items-center gap-2 hover:bg-gray-200 p-1 cursor-pointer rounded-md"
                    onClick={() => setMenuOpen(false)}
                  >
                    <InformationCircleIcon className="w-5 h-5 text-blue-500" />
                    Ver Info
                </li>
                
              }
            </ul>
          </div>
        )}
      </span>
    </button>
  )
}

export function ButtonOptionNav({ text, Icon, color, path, setOpenMenu }: ButtonOptionNavProps){
  const { setSection } = useAuth()

  return (
    <button onClick={()=>setOpenMenu(false)} className="py-1 px-2 w-full flex items-center gap-2 hover:bg-[#F5F5F5] transition-colors duration-100 rounded-lg">
      {Icon && <Icon onClick={()=>setSection(path)} className={`w-6 ${color}`} />}
      {text}
    </button>
  )
}