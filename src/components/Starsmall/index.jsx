import {FiStar} from 'react-icons/Fi'

import { Container } from './styles'

export function Starsmall({isActive= true, ...rest}) {
  return(
    <Container type ="button"
      isActive = {isActive}
      {...rest}>
      <FiStar/>
    </Container>
  )
}