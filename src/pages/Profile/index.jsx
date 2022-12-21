import { Container, Form, Avatar} from "./styles";

import { Link } from "react-router-dom";

import {FiArrowLeft, FiCamera, FiUser, FiMail, FiLock} from "react-icons/Fi"

import {Input} from '../../components/Input'
import {Button} from '../../components/Button'

export function Profile (){
  return (
    <Container>
      <header>
        <FiArrowLeft/>
        <Link to="/">Voltar</Link>
      </header>

      <Form>
        <Avatar>
          <img 
            src="https://github.com/rodrigorgtic.png" 
            alt="Foto do Usuário" 
          />

          <label htmlFor="avatar">
            <FiCamera/>

            <input
            id="avatar" 
            type="file" />
          </label>
        </Avatar>

        <Input 
        Placeholder="Name"
        type="text"
        icon={FiUser}
        />
        <Input 
        Placeholder="E-mail"
        type="mail"
        icon={FiMail}
        />
        <Input 
        Placeholder="Senha"
        type="password"
        icon={FiLock}
        />
        <Input 
        Placeholder="Nova Senha"
        type="text"
        icon={FiLock}
        />

        <Button title="Salvar"/>
      </Form>
    </Container>
  )
}