import { ToastProvider } from "./contexts/ToastifyContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoginForm from "./components/pages/LoginForm.tsx"
import IndexPage from "./components/pages/IndexPage.tsx"
import AddEmpModal from "./components/Admin/AddEmpModal/AddEmpModal.tsx"
import PrivateRoute from "./scripts/PrivateRoute.tsx"
import Index from "./components/shared/Index.tsx"
import Statics from "./components/pages/Statics.tsx"

function App() {
  return (
    <ToastProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          {/*Rutas Protegidas*/}
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<IndexPage />} >
              <Route index element={<Index />} />
              <Route path="users" element={<AddEmpModal />} />
              <Route path="statics" element={<Statics />}/>
            </Route>
          </Route>
        </Routes>
      </Router>
    </ToastProvider>
  )
}

export default App