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
                  <Noteitem value="Drama"/>
                  <Noteitem value="Ficção Cientifica"/>
                  <Noteitem isNew placeholder="Novo Marcador"/>
                  <Noteitem value="Drama"/>
                  <Noteitem value="Ficção Cientifica"/>
                  <Noteitem isNew placeholder="Novo Marcador"/>
              
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