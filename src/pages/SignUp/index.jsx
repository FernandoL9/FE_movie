import {Container, Form, Background} from "./styles"

import {FiMail, FiLock} from "react-icons/Fi"

import { Link } from "react-router-dom"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir</span>

        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" type ="text" icon={FiMail}/>
        <Input placeholder="Senha" type ="password" icon={FiLock}/>

        <Button title="Entrar"/>

        <Link to="/Signin">Criar conta</Link>
     </Form>
      <Background/>
    </Container>
  )
}