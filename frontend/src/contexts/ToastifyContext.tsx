import { createContext, useContext } from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

// Tipos de las notificaciones
type ToastContextProps = {
  notifySuccess: (message: string) => void
  notifyError: (message: string) => void
}

// Contexto para las notificaciones
export const ToastContext = createContext<ToastContextProps | undefined>(undefined)

// Hook para acceder facilmente a las notificaciones
export const useToast = (): ToastContextProps => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}

// Tipo de props para el provider
type ToastProviderProps = {
  children: React.ReactNode 
}

// Notificaciones Provider
export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const notifySuccess = (message: string) => toast.success(message)
  const notifyError = (message: string) => toast.error(message)

  return (
    <ToastContext.Provider value={{ notifySuccess, notifyError }}>
      {children}
      <ToastContainer 
        position="top-right" 
        autoClose={5000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover
        aria-label="Toast notifications"
      />
    </ToastContext.Provider>
  )
}
