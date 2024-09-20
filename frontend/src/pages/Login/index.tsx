import { Mail, Lock, Github } from "lucide-react"
import { Link } from "react-router-dom"

export function Login() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-900 font-sans">
      <form
        action=""
        className="mobile:w-[400px] mobile:h-[450px] flex h-[550px] w-[600px] flex-col items-center rounded-lg bg-gray-800"
      >
        <h1 className="mobile:text-2xl pt-12 text-4xl text-white">
          Tela de Login
        </h1>

        <div className="mobile:gap-10 flex flex-col items-center gap-14 pt-20 text-white">
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

          <button
            type="submit"
            className="w-[200px] rounded-lg bg-green-500 py-2 font-bold text-white"
          >
            Entrar
          </button>

          <div className="mobile:justify-around flex w-full justify-between text-white">
            <Link to="/cadastro" className="hover:underline">
              Cadastrar-se
            </Link>
            <span>|</span>
            <Github size={28} />
          </div>
        </div>
      </form>
    </div>
  )
}
