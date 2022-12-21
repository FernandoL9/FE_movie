import {FiStar} from 'react-icons/Fi'

import { Container } from './styles'

export function Star({isActive= true, ...rest}) {
  return(
    <Container type ="button"
      isActive = {isActive}
      {...rest}>
      <FiStar/>
    </Container>
  )
}