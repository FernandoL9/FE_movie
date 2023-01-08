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
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'


export function New() {
  const [title, setTitle] = useState("")
  const [discription, setDiscripton] = useState("")
  const [rating, setRating] = useState("")

  const [tags, setTags] = useState([])
  const [newTags, setNewTags] = useState("")

  const navigate = useNavigate()

  function handleAddTags() {
    setTags(prevState => [...prevState, newTags])
    setNewTags("")
  }

  function handleRemoveTags(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

 async function handleNewNotes() {

    if(!title){
      return alert("You have a Title to fill")
    }
    if(!rating){
      return alert("You have a Rating to fill")
    }
    if(!discription){
      return alert("You have a Description to fill")
    }
    if(newTags){
      return alert("You have a pending tag")
    }

    await api.post("/notes", {
      title,
      discription,
      rating,
      tags,
    })
    console.log({title,discription,tags})
    alert("Movie add success!")
    navigate("/")
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
              <Input 
                placeholder="Título"
                onChange={e => setTitle(e.target.value)}
              />
              <Input 
                placeholder="Sua nota (de 0 a 5)" 
                onChange={e => setRating(e.target.value)}/>
              </div>
              <Textarea 
                placeholder="Observações"
                onChange={e => setDiscripton(e.target.value)}/>

              <Section title="Marcadores">
                <div className="tags">
                  {
                    tags.map((tag, index) => (
                      <Noteitem
                        key={String(index)}
                        value={tag}
                        onClick={() => handleRemoveTags(tag)}
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
                <Button title="Salvar alterações" onClick={handleNewNotes}/>
              </Option>
            
            </Form>

          </main>
      </Content>
    </Container>
  )
}