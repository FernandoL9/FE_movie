import { Container } from "./styles";

export function Button({title, loading=false, Action, ...rest }) {
  return (
    <Container 
    type="button"
    Action = {Action}
    disabled={loading}
    {...rest}>
      {loading ? 'Carregando...' : title}
      
    </Container>
  )
}