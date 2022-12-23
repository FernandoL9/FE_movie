import { Container, Form, Avatar} from "./styles";
import { Link } from "react-router-dom";

import { useState } from "react";
import { useAuth } from "../../hooks/auth";

import {FiArrowLeft, FiCamera, FiUser, FiMail, FiLock} from "react-icons/Fi"

import {Input} from '../../components/Input'
import {Button} from '../../components/Button'

export function Profile (){

  const {user, updateProfile} =  useAuth()

  const [name, setName] = useState(user.name) 
  const [email, setEmail] = useState(user.email) 
  const [passwordOld, setPasswordOld] = useState() 
  const [passwordNew, setPasswordNew] = useState() 

  async function handleUpdate() {
    const user= {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }
    await updateProfile({ user })
  }


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
        placeholder="Name"
        type="text"
        icon={FiUser}
        value={name}
        onChange={e => setName(e.target.value)}
        />
        <Input 
        placeholder="E-mail"
        type="mail"
        icon={FiMail}
        value={email}
        onChange={e => setEmail(e.target.value)}
        />
        <Input 
        placeholder="Senha"
        type="password"
        icon={FiLock}
        onChange={e => setPasswordOld(e.target.value)}
        />
        <Input 
        placeholder="Nova Senha"
        type="text"
        icon={FiLock}
        onChange={e => setPasswordNew(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate}/>
      </Form>
    </Container>
  )
}