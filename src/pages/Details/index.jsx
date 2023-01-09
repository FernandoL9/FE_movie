import { Container, Content, Profile} from './styles'
import { useEffect, useState } from 'react';
import { api } from '../../services/api'

import {FiArrowLeft, FiStar, FiClock} from 'react-icons/Fi'
import { Link, useParams, useNavigate } from "react-router-dom";

import {Header} from '../../components/Header'
import {Tags} from '../../components/Tags'

import { useAuth } from '../../hooks/auth'
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

export function Details() {
  const {user} = useAuth();
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  const [data, setData] = useState()
  const params = useParams()  
  const navigate = useNavigate()

  
  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
      console.log(response)
    }
    fetchNote()
  }, [])

  function  handleBack(){
    navigate(-1)
  }

  async function handleRemove(){
    const confirm = window.confirm("Do you want to delete this note?")
    if(confirm){
      await api.delete(`/notes/${params.id}`)
      handleBack()
    }
  }
  

  return (
    <Container>
      <Header/>
      {
        data &&
        <main>
          <Content>
            <FiArrowLeft/>
            <Link onClick={handleBack}>Voltar</Link>
            <button onClick={handleRemove}> Excluir </button>
            <div className="movie">
              <h1>{data.title}</h1> 
              {/* pensar na função */}
                <FiStar/> 
                <FiStar/>
                <FiStar/>
                <FiStar/>
                <FiStar/>
            </div>
            <Profile>
            <img 
                  src={avatarURL}
                  alt={user.name}
            />
            <span>{user.name}</span>
       
            <span> <FiClock/>{data.created_at}</span>
            </Profile>
            {
              data.tags &&
              <div className="tags">
                {
                  data.tags.map(tag => (
                    <Tags title={tag.name}/>
                  ))
                }
              </div>
            }
            <p>
              {data.discription}
            </p>
          </Content>
        </main>
      }
    </Container>
  )
}