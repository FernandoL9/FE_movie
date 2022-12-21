import { Container, Content} from "./styles";

import { Starsmall } from "../Starsmall";
import { Tags } from "../Tags";

export function Notes({data, ...rest}) {
  return (
       <Container {...rest}>
            <h1>{data.title}</h1>
        <Content>
            {
              data.star &&
              <footer>
                {
                  data.star.map(stars => <Starsmall key={stars.id}/>)
                }
              </footer>
            }
            <p>{data.details}</p>

            <div className="tags">
              <Tags title="Ficção Científica"/>
              <Tags title="Drama"/>
              <Tags title="Família"/>
            </div>
        </Content>
    </Container>
  )
}