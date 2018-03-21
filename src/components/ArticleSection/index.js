import React, {Component} from 'react'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import {Segment,Container,Loader} from 'semantic-ui-react'
import Article from '../Article'
import styled from 'styled-components'

const Title = styled.h1`
  color: black;
`;

const Wrapper = styled.section`
  height: 20vh;
  padding-top: 8em;
`;

const ArticleLoader = <Wrapper><Loader active inline='centered' /></Wrapper>;

class ArticleSection extends Component{
    render(){
      const {count} = this.props.count

      if(this.props.data.error && !this.props.data.getArticles){
        return(
          <div>Opps! Something went wrong.</div>
        )
      }else{
        return(
          <Container>
                  <Title>Latest Updates & Upcoming Events</Title>
                  <section>
                    {this.props.data.getArticles ? this.props.data.getArticles.map(({headline, publishDate, photo, photoDesc, extract, text, link}) => (
                          <Article
                            headline={headline}
                            publishDate={publishDate}
                            photo={photo}
                            photoDesc={photoDesc}
                            extract={extract}
                            text={text}
                            link={link}/>
                        )): ArticleLoader }
                  </section>
          </Container>
      )
      }
    }
}

export default graphql(gql`
query ArticleQuery($count: Int!) {
  getArticles(count: $count) {
    headline
    extract
    text
    link
    publishDate
    photo
    photoDesc
  }
}
`, {
  options: { fetchPolicy: 'cache-and-network' },
})(ArticleSection)
