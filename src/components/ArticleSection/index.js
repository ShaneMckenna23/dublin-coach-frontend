import React, {Component} from 'react'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import {Segment,Container} from 'semantic-ui-react'
import Article from '../Article'
import styled from 'styled-components'

const Title = styled.h1`
  color: black;
`;

class ArticleSection extends Component{
    render(){
      const {count} = this.props.count
      return(
          <Container>
                  <Title>Latest Updates & Upcoming Events</Title>
                  <section>
                    {this.props.data.loading ? null: this.props.data.getArticles.map(({headline, publishDate, photo, photoDesc, extract, text}) => (
                          <Article
                            headline={headline}
                            publishDate={publishDate}
                            photo={photo}
                            photoDesc={photoDesc}
                            extract={extract}
                            text={text}/>
                        ))}
                  </section>
          </Container>
      )
    }
}



export default graphql(gql`
  query ArticleQuery($count: Int!) {
    getArticles(count: $count) {
      headline
      extract
      text
      publishDate
      photo
      photoDesc
    }
  }
`)(ArticleSection);
