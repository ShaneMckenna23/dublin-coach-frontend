import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import {Segment, Container, Grid, Header, List, Icon, Image} from 'semantic-ui-react'


const Footer = ()=> (
    <Segment inverted vertical style={{ padding: '5em 0em', background:'#60ac1c' }}>
      <Container>
        <Grid divided inverted stackable>
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
                <Icon name='facebook f' size='large' />
                <Icon name='twitter' size='large' />
                <Icon name='instagram' size='large' />
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>

          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
)

export default Footer
