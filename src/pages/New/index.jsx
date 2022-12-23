import { useState, prevState } from 'react'

import { Container, Content, Form, Option} from './styles'
import {FiArrowLeft} from 'react-icons/Fi'

import {Link} from 'react-router-dom'

import {Input} from '../../components/Input'
import {Header} from '../../components/Header'
import {Section} from '../../components/Section'
import {Textarea} from '../../components/Textarea'
import {Noteitem} from '../../components/Noteitem'
import {Button} from '../../components/Button'


export function New() {

  const [tags, setTags] = useState([])
  const [newTags, setNewTags] = useState("")

  function handleAddTags() {
    setTags(prevState => [...prevState, newTags])
    setNewTags("")
  }

  return (
    <Container>
      <Header/>
        <Content>
          <main>
            <FiArrowLeft/>
            <Link to="/">Voltar</Link>
            <div className="movie">
              <h1>Novo filme</h1> 
            </div>

            <Form>
              <div>
              <Input placeholder="Título"/>
              <Input placeholder="Sua nota (de 0 a 5)"/>
              </div>
              <Textarea placeholder="Observações"/>

              <Section title="Marcadores">
                <div className="tags">
                  {
                    tags.map((tag, index) => (
                      <Noteitem
                        key={String(index)}
                        value={tag}
                      />
                    ))
                  }
                  {/* fazer alterção no tamanho da caixa */}
                  <Noteitem  
                    isNew
                    placeholder="Novo Marcador"
                    onChange={e => setNewTags(e.target.value)}
                    value={newTags}
                    onClick={handleAddTags}
                  />
              
                </div>
              </Section>
              <Option>
                <Button title="Excluir" Action="true"/>
                <Button title="Salvar alterações"/>
              </Option>
            
            </Form>

          </main>
      </Content>
    </Container>
  )
}