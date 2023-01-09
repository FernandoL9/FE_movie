import {Container, Content, Add} from './styles'
import { useState, useEffect} from 'react'
import { api } from '../../services/api'

import { FiPlus } from 'react-icons/Fi'

import {useNavigate} from 'react-router-dom'

import {Header} from '../../components/Header'
import {Section} from '../../components/Section'
import {Button} from '../../components/Button'
import {Notes} from '../../components/Notes'

export function Home() {
  const [search, setSearch] = useState("")
  const [tagSelected, setTagsSelected] = useState([])
  const [notes, setNotes] = useState([])

  const nagivate = new useNavigate()

  function handleDetails(id){
    nagivate(`/details/${id}`)
    console.log(nagivate)
  }
  useEffect(() => {
    async function fetchNotes(){
      const response = await api.get(`/notes?title=${search}&tags=${tagSelected}`)
      setNotes(response.data)
      console.log(response.data)
    }
    fetchNotes()
  }, [tagSelected,search])

  
  return (
    <Container>
      <Header 
      />
      <Content>
        <main>
          <div className="brand">
            <h1>Meus Filmes</h1>
            <Add to ="/new">
              <FiPlus/> Adicionar filme
            </Add>
          </div>
          <Section>       
                  <div className="info">
                    {
                      notes.map(note => (
                        <Notes
                        key= {String(note.id)}
                        data={note}
                        onClick={() => handleDetails(note.id)}>
                        </Notes>
                      )) 
                      
                    }   
                  </div>
          </Section>   
        </main>
      </Content>
    </Container>
  )
}