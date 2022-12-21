import {Container, Form, Background} from "./styles"

import { Link } from "react-router-dom"

import {FiMail, FiLock, FiUser, FiArrowLeft} from "react-icons/Fi"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function Signin() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir</span>

        <h2>Faça seu login</h2>

        <Input placeholder="Nome" icon={FiUser}/>
        <Input placeholder="E-mail" icon={FiMail}/>
        <Input placeholder="Senha" icon={FiLock}/>

        <Button title="Cadastrar"/>
        <div className="Option">
          <FiArrowLeft/>
          <Link to="/">Voltar para login</Link>
        </div>
      </Form>
      <Background/>
    </Container>
  )
}