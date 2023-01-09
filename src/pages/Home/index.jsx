import {Container, Content, Add} from './styles'
import { useState, useEffect} from 'react'
import { api } from '../../services/api'

import { FiPlus } from 'react-icons/Fi'

import {useNavigate} from 'react-router-dom'

import {Header} from '../../components/Header'
import {Section} from '../../components/Section'
import {Button} from '../../components/Button'
import {Notes} from '../../components/Notes'

import { api } from '../../services/api'

export function Home() {
<<<<<<< HEAD
  
  const { selectedTags, setSelectedTags } = useState([])
  const { search, setSearch } = useState("")
=======
  const [search, setSearch] = useState("")
  const [tagSelected, setTagsSelected] = useState([])
>>>>>>> 3b483b36f468861ebd6c436657c1d3c5ad5575ec
  const [notes, setNotes] = useState([])

  const nagivate = new useNavigate()

  function handleDetails(id){
    nagivate(`/details/${id}`)
    console.log(nagivate)
  }
  useEffect(() => {
    async function fetchNotes(){
<<<<<<< HEAD
      const response = await api.get(`/notes?title=${search}&tags=${selectedTags}`)
      setNotes(response.data)
    }
    fetchNotes()
  },[selectedTags, search])

=======
      const response = await api.get(`/notes?title=${search}&tags=${tagSelected}`)
      setNotes(response.data)
      console.log(response.data)
    }
    fetchNotes()
  }, [tagSelected,search])

  
>>>>>>> 3b483b36f468861ebd6c436657c1d3c5ad5575ec
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 3b483b36f468861ebd6c436657c1d3c5ad5575ec
          </Section>   
        </main>
      </Content>
    </Container>
  )
}