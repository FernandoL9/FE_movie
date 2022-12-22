import { Link } from 'react-router-dom'
import { Container, Profile } from './styles'
import { useAuth } from '../../hooks/auth'

export function Header() {
  const  {signOut} = useAuth();
  return (
    <Container>
      <h1>RocketMovies</h1>
      <input placeholder="Pesquisar por titulo" type="text"></input>
      <Profile to= "/Profile">
        <div>
          <strong>Rodrigo Gonçalves</strong>
          <Link href="/" onClick={signOut}>Sair</Link>
        </div>
        <img 
            src="https://github.com/rodrigorgtic.png"
            alt="Foto do usuário"
        />
      </Profile>
    </Container>
  )
}