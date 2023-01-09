import { Container, Form, Avatar} from "./styles";
import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { api } from "../../services/api";

import {FiArrowLeft, FiCamera, FiUser, FiMail, FiLock} from "react-icons/Fi"

import {Input} from '../../components/Input'
import {Button} from '../../components/Button'

export function Profile (){

  const {user, updateProfile} =  useAuth()
  const navigate = useNavigate()

  const [name, setName] = useState(user.name) 
  const [email, setEmail] = useState(user.email) 
  const [passwordOld, setPasswordOld] = useState() 
  const [passwordNew, setPasswordNew] = useState() 

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  const [avatar, setAvatar] = useState(avatarURL)
  const [avatarFile, setAvatarFile] = useState(null)

  
  async function handleUpdate() {
    const updated= {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }

    const userUpdated = Object.assign(user, updated)
    console.log(userUpdated)

    await updateProfile({ user: userUpdated, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  function handleBack(){
    navigate(-1)
  }

  return (
    <Container>
      <header>
        <FiArrowLeft/>
        <button 
          onClick={handleBack}>Voltar</button>
      </header>

      <Form>
        <Avatar>
          <img 
            src={avatar}
            alt="Foto do Usuário" 
          />

          <label htmlFor="avatar">
            <FiCamera/>
            <input
            id="avatar" 
            type="file" 
            onChange={handleChangeAvatar}/>
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