import { useState } from "react";
import {Container, Form, Background} from "./styles"
import { Link, useNavigate } from "react-router-dom"
import {FiMail, FiLock, FiUser, FiArrowLeft} from "react-icons/Fi"
import {api} from "../../services/api"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function Signin() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate();

  function handleSignin(){
    console.log(name, email, password)

    if(!name || !email || !password) {
      return alert("Please fill in all fields")
    }
    api.post("/users", {name, email, password})
    .then(() => {
      alert("User successfully added")
      navigate("/")
    })
    .catch(error => {
      if (error.response){
        alert(error.response.data.message)
      } else {
        alert("Don´t possibled added ")
      }
    })
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir</span>

        <h2>Faça seu login</h2>

        <Input placeholder="Nome" type ="text" icon={FiUser} onChange= {e => setName(e.target.value)}/>
        <Input placeholder="E-mail" type ="text" icon={FiMail} onChange= {e => setEmail(e.target.value)}/>
        <Input placeholder="Senha" type ="password" icon={FiLock} onChange= {e => setPassword(e.target.value)}/>

        <Button title="Cadastrar" onClick = {handleSignin}/>
        <div className="Option">
          <FiArrowLeft/>
          <Link to="/">Voltar para login</Link>
        </div>
      </Form>
      <Background/>
    </Container>
  )
}