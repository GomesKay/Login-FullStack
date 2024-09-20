import { Mail, Lock, User } from "lucide-react"
import { Link } from "react-router-dom"

export function Cadastro() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-900 font-sans">
      <form
        action=""
        className="mobile:w-[400px] mobile:h-[450px] flex h-[550px] w-[600px] flex-col items-center rounded-lg bg-gray-800"
      >
        <h1 className="mobile:text-2xl pt-12 text-4xl text-white">
          Tela de Registro
        </h1>

        <div className="mobile:gap-10 mobile:pt-16 flex flex-col items-center gap-14 pt-20 text-white">
          <div className="flex gap-6">
            <User size={28} />
            <input
              type="text"
              placeholder="Usuário"
              className="mobile:w-[250px] w-[300px] border-b border-b-white bg-transparent px-2 outline-0 placeholder:text-gray-400"
            />
          </div>

          <div className="flex gap-6">
            <Mail size={28} />
            <input
              type="email"
              placeholder="E-mail"
              className="mobile:w-[250px] w-[300px] border-b border-b-white bg-transparent px-2 outline-0 placeholder:text-gray-400"
            />
          </div>

          <div className="flex gap-6">
            <Lock size={28} />
            <input
              type="password"
              placeholder="Senha"
              className="mobile:w-[250px] w-[300px] border-b border-b-white bg-transparent px-2 outline-0 placeholder:text-gray-400"
            />
          </div>

          <div className="flex flex-col items-center gap-4">
            <button
              type="submit"
              className="w-[200px] rounded-lg bg-green-500 py-2 font-bold text-white"
            >
              Cadastrar
            </button>

            <Link to="/" className="hover:underline">
              Voltar
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}
