import bcrypt from "bcryptjs"
import express from "express"
import { prisma } from "./lib/prisma"

const app = express()

app.use(express.json())

// Rota para registrar novos usuários
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body

  // Verifica se todos os campos foram preenchidos
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Preencha todos os campos" })
  }

  // Verifica se o email já está cadastrado
  const existingUser = await prisma.user.findUnique({
    where: { email },
  })

  if (existingUser) {
    return res.status(400).json({ message: "Email já cadastrado" })
  }

  // Hashear a senha antes de salvar
  const hashedPassword = await bcrypt.hash(password, 8)

  // Criação do Usuário
  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })

    res.status(201).json({
      message: "Usuário criado com sucesso",
      user: { id: newUser.id, name: newUser.name, email: newUser.email },
    })
  } catch (error) {
    res.status(500).json({ message: "Erro ao registrar o usuário" })
  }
})

// Rota para retornar informações do usuário
app.get("/welcome", async (req, res) => {
  try {
    const allUsers = await prisma.user.findMany()

    // Verifica se existe algum usuário cadastrado
    if (allUsers.length === 0) {
      return res.status(400).json({ message: "Nenhum usuário encontrado" })
    }

    // Retorna a lista de usuários
    return res.status(200).json(allUsers)
  } catch (error) {
    return res.status(500).json({ message: "Erro ao buscar usuários" })
  }
})

app.listen(3333, () => {
  console.log("HTTP Server Running!")
})
