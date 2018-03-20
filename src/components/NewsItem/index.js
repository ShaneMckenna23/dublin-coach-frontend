import React from 'react'
import { Image, Container, Segment, Grid, Header} from 'semantic-ui-react'

const NewsItem = ({ headline, publishDate, photo, photoDesc, extract,text}) => (
  <Container>
    <Segment style={{ padding: '2em 0em' }} vertical>
        <Grid container stackable verticalAlign='top'>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h3' style={{ fontSize: '2em' }}>{headline}</Header>
              <p style={{ fontSize: '1.33em' }}>
                {text}
              </p>
            </Grid.Column>
            <Grid.Column floated='right' width={6}>
              <Image
                bordered
                rounded
                size='large'
                src={photo}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
  </Container>
)

export default NewsItem


