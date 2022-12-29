import { api } from '../../services/api'
import { Link } from 'react-router-dom'
import { useState, useEffect} from 'react'
import { Container, Profile } from './styles'
import { useAuth } from '../../hooks/auth'
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

export function Header() {
  const [search, setSearch] = useState("")
  const [tagSelected, setTagsSelected] = useState([])
  const [notes, setNotes] = useState([])
  const  {signOut, user} = useAuth();

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  // useEffect(() => {
  //   async function fetchNotes(){
  //     const response = await api.get(`/notes?title=${search}&tags=${tagSelected}`)
  //     setNotes(response.data)
  //   }
  //   fetchNotes()
  // }, [tagSelected,search])

  return (
    <Container>
      <h1>RocketMovies</h1>
      <input
      placeholder="Pesquisar por titulo" 
      onChange={e => setSearch(e.target.value)}
      type="text">
      </input>
      <Profile to= "/Profile">
        <div>
          <strong>{user.name}</strong>
          <Link href="/" onClick={signOut}>Sair</Link>
        </div>
        <img 
            src={avatarURL}
            alt={user.name}
        />
      </Profile>
    </Container>
  )
}