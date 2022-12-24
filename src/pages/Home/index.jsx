import {Container, Content, Add} from './styles'
import { useState, useEffect} from 'react'
import { api } from '../../services/api'

import { FiPlus } from 'react-icons/Fi'

import {Link} from 'react-router-dom'

import {Header} from '../../components/Header'
import {Section} from '../../components/Section'
import {Button} from '../../components/Button'
import {Notes} from '../../components/Notes'


export function Home() {
  
  const { selectedTags, setSelectedTags } = useState([])
  const { search, setSearch } = useState("")
  const [notes, setNotes] = useState([])

  useEffect(() => {
    async function fetchNotes(){
      const response = await api.get(`/notes?title=${search}&tags=${selectedTags}`)
      setNotes(response.data)
    }
    fetchNotes()
  },[selectedTags, search])

  return (
    <Container>
      <Header/>
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
                    key={String(note.id)}
                    data={note}
                  />
                ))
              }

                {/* <Notes data={{
                  title: "Interstellar",
                  star: [
                    {id: "1", isActive:"false"},
                    {id: "1", isActive:"false"},
                    {id: "1", isActive:"false"},
                    {id: "1", isActive:"false"},
                    {id: "2", isActive:"true"},
                  ],
                  details: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se..."
                }}/> */}
            </div>
          </Section>   
        </main>
      </Content>
    </Container>
  )
}