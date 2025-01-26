import useAuth from '../../hooks/useAuth.ts';
import { useEffect } from 'react';
import Aside from '../shared/Aside.tsx';
import Nav from '../shared/Nav.tsx';
import { Outlet, useNavigate } from 'react-router-dom';

export default function IndexPage() {
  const { state } = useAuth()
  const navigate = useNavigate()


  useEffect(()=>{
    if(state.auth) return
    else navigate('/login')
    return ()=>{}
  } ,[])

  return ( state.auth && 
    <main className="flex h-screen">
      {/* ASIDE - BARRA LATERAL */}
      <Aside />

      {/* CONTENIDO PRINCIPAL */}
      <section className="flex flex-col flex-grow">
        {/* NAV - ENCABEZADO */}
        <Nav />

        {/* MAIN - CONTENIDO */}
        <div className="page flex flex-col flex-grow justify-center items-center bg-gray-100 p-6 gap-7">
          <Outlet />
        </div>
      </section>
    </main>
  )
}
