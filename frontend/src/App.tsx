import LoginForm from "./components/LoginForm"

function App() {
  return (
    <>
      <main className="w-screen h-screen">
        <section className="bg-login bg-top bg-cover bg-no-repeat w-full h-full flex justify-center items-center px-2">
          <div className="absolute inset-0 bg-black bg-opacity-50 blur-3xl"></div>
          <LoginForm />
        </section>
      </main>
    </>
  )
}

export default App
