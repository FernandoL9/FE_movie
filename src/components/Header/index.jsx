import { Link } from 'react-router-dom'
import { Container, Profile } from './styles'

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <input placeholder="Pesquisar por titulo" type="text"></input>
      <Profile to= "/Profile">
        <div>
          <strong>Rodrigo Gonçalves</strong>
          <Link href="/">Sair</Link>
        </div>
        <img 
            src="https://github.com/rodrigorgtic.png"
            alt="Foto do usuário"
        />
      </Profile>
    </Container>
  )
}