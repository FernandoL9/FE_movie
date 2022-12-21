import { Container } from "./styles";

export function Button({title, loading=false, Action, ...rest }) {
  return (
    <Container 
    type="button"
    Action = {Action}
    disabled={loading}>
      {loading ? 'Carregando...' : title}
    </Container>
  )
}