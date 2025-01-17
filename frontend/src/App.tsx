import { ToastProvider } from "./contexts/ToastifyContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoginForm from "./components/pages/LoginForm.tsx"
import IndexPage from "./components/pages/IndexPage.tsx"
import AddEmpModal from "./components/Admin/AddEmpModal.tsx"

function App() {
  return (
    <ToastProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<IndexPage />} />
          <Route path="/users" element={<AddEmpModal />} />
        </Routes>
      </Router>
    </ToastProvider>
  )
}

export default App
