import { Link } from 'react-router-dom'
import { Container, Profile } from './styles'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

export function Header() {
  const  {signOut, user} = useAuth();

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return (
    <Container>
      <h1>RocketMovies</h1>
      <input placeholder="Pesquisar por titulo" type="text"></input>
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