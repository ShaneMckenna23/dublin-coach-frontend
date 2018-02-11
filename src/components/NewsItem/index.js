import React from 'react'
import { Card, Image, Container } from 'semantic-ui-react'

const NewsItem = ({ headline, publishDate, photo, photoDesc, extract}) => (
  <Container>
  <Card fluid>
    <Image alt={photoDesc} src={"https://cloud.squidex.io/api/assets/"+ photo} />
    <Card.Content>
      <Card.Header>
        {headline}
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          {publishDate}
        </span>
      </Card.Meta>
      <Card.Description>
        {extract}
      </Card.Description>
    </Card.Content>
  </Card>
  </Container>
)

export default NewsItem


