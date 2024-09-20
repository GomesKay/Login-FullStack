import { Link } from "react-router-dom"

export function Welcome() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6 bg-gray-900 font-sans text-white">
      <h1 className="mobile:text-3xl text-4xl">Bem-Vindo, User_Name</h1>
      <p>Seu e-mail: user@example.com</p>
      <Link
        to="/"
        className="w-[150px] rounded-lg border border-violet-600 py-2 text-center"
      >
        Home
      </Link>
    </div>
  )
}
