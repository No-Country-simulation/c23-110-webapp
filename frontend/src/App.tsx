import { useEffect } from "react"
import IndexUser from "./components/Index User/IndexUser"
import LoginForm from "./components/LoginForm"
import { ToastProvider } from "./contexts/ToastifyContext"
import useAuth from "./hooks/useAuth"

function App() {
  const { state } = useAuth()

  useEffect(()=>console.log(state.auth), [state])

  return (
    <ToastProvider>
      {state.auth ?
      <IndexUser />
      :
      <main className="w-screen h-screen">
        <section className="bg-login bg-top bg-z bg-no-repeat w-full h-full flex justify-center items-center px-3">
          <div className="absolute inset-0 bg-black bg-opacity-50 blur-3xl px-10"></div>
          <LoginForm />
        </section>
      </main>
      }
      
     

      
    </ToastProvider>
  )
}

export default App
