import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import {Segment, Container, Grid, Header, List, Icon, Image} from 'semantic-ui-react'


const Wrapper = styled.section`
  padding: 5em 0em;
  background: #60ac1c;
`

const Footer = ()=> (
    <Wrapper>
      <Container>
        <Grid divided stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as={Link}to='/contact' >Contact us</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as={Link} to='/destinations' >Destinations</List.Item>
                <List.Item as='a'>Tax Saver Tickets</List.Item>
                <List.Item as='a'>Download our App</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>Social Links</Header>
              <div>
                <Icon name='facebook f' inverted size='large' />
                <Icon name='twitter' inverted size='large' />
                <Icon name='instagram' inverted size='large' />
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>

          </Grid.Row>
        </Grid>
      </Container>
    </Wrapper>
)

export default Footer
