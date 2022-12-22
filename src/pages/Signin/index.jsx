import { useState } from "react"
import {Container, Form, Background} from "./styles"
import {FiMail, FiLock} from "react-icons/Fi"
import { Link } from "react-router-dom"
import {useAuth} from "../../hooks/auth"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function SignIn() {
  const [email, Setemail] = useState("")
  const [password, Setpassword] = useState("") 

  const { signIn } = useAuth()

  function handleSignIn(){
    signIn({email, password})
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir</span>

        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" type ="text" icon={FiMail} onChange={e => Setemail(e.target.value)}/>
        <Input placeholder="Senha" type ="password" icon={FiLock} onChange={e => Setpassword(e.target.value)}/>

        <Button title="Entrar" onClick={handleSignIn}/>

        <Link to="/SignUp">Criar conta</Link>
     </Form>
      <Background/>
    </Container>
  )
}