import {Container, Content, Add} from './styles'
import { useState, useEffect} from 'react'

import { FiPlus } from 'react-icons/Fi'

import {Link} from 'react-router-dom'

import {Header} from '../../components/Header'
import {Section} from '../../components/Section'
import {Button} from '../../components/Button'
import {Notes} from '../../components/Notes'


export function Home() {
  const [tags, setTags] = useState([])

  useEffect(() => {
    async function fetchtags(){
      const response = await api.get("/tags")
      setTags(response.data)
    }
  },[])
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
                <Notes data={{
                  title: "Interstellar",
                  star: [
                    {id: "1", isActive:"false"},
                    {id: "1", isActive:"false"},
                    {id: "1", isActive:"false"},
                    {id: "1", isActive:"false"},
                    {id: "2", isActive:"true"},
                  ],
                  details: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se..."
                }}/>
            </div>
            <div className="info">
                <Notes data={{
                  title: "Interstellar",
                  star: [
                    {id: "1", isActive:"false"},
                    {id: "1", isActive:"false"},
                    {id: "1", isActive:"false"},
                    {id: "1", isActive:"false"},
                    {id: "2", isActive:"true"},
                  ],
                  details: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se..."
                }}/>
            </div>
          </Section>   
        </main>
      </Content>
    </Container>
  )
}