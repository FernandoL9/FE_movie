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
            <p>{data.discription}</p>
            <div className="tags">
              {
                // data.tags.map(tag => <Tags key={tag.id} title={tag.name}/>)
              }
            </div>
        </Content>
    </Container>
  )
}