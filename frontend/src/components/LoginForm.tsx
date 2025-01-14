import { UserIcon, KeyIcon } from '@heroicons/react/24/solid'

export default function LoginForm() {
    return (
      <form className="z-10 relative p-6 ">
          <div className="w-full text-center mb-7 "><h1 className="font-poppins font-black text-white text-2xl">Bienvenido!</h1></div>
          <div className="bg-[rgba(0,0,0,.3)] p-10 grid gap-5 font-montserrat rounded-lg">

            <div className="font-black w-full text-center mb-5">
              <h2 className="text-primary text-2xl tracking-wide">Ingrese sus datos</h2>
            </div>
 
            <div className="grid gap-1.5 relative">
              <p className="tracking-[5px] italic text-[13px] text-[rgba(255,255,255,.4)] font-black">USUARIO</p>
              <input 
              type="text"                 
              className="h-12 px-11 rounded-md border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="Nombre de usuario" />
              <UserIcon className='absolute w-7 top-[36px] left-2 text-primary'></UserIcon>
            </div>

            <div className="grid gap-1.5 relative">
              <p className="tracking-[5px] italic text-[13px] text-[rgba(255,255,255,.4)] font-black">CONTRASEÑA</p>
              <input 
              type="password" 
              className="h-12 px-11 rounded-md border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder='Contraseña' />
              <KeyIcon className='absolute w-7 top-[36px] left-2 text-primary'></KeyIcon>
            </div>
             <button className="bg-primary p-2 font-bold text-white mt-3 rounded-lg tracking-wide" type="submit">INICIA SESIÓN</button>
          </div>
      </form>
    )
  }
  