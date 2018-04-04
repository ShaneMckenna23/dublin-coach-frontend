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
  height: 60vh;
  padding-top: 17em;
`;

const ArticleLoader = <Wrapper><Loader active inline='centered' /></Wrapper>;

class ArticleSection extends Component{

    sliceArticles = (articles) =>{
      const {count} = this.props
      console.log(count)
      console.log(articles)
      let articlesToRender = []
      for(let i=0; i<count; i++){
        const {headline, publishDate, photo, photoDesc, extract, text, link} = articles[i]
        articlesToRender.push(<Article
          headline={headline}
          publishDate={publishDate}
          photo={photo}
          photoDesc={photoDesc}
          extract={extract}
          text={text}
          link={link}/>)
      }
      console.log(articlesToRender)
      return articlesToRender
    }

    render(){
      const {count} = this.props.count

      let articles = ArticleLoader

      if(this.props.data.getArticles){
        articles = this.sliceArticles(this.props.data.getArticles)
      }

      if(this.props.data.error && !this.props.data.getArticles){
        return(
          <Container>
            <Title>Latest Updates & Upcoming Events</Title>
            <div>Opps! Something went wrong.</div>
            <Wrapper/>
          </Container>
        )
      }else{
        return(
          <Container>
                  <Title>Latest Updates & Upcoming Events</Title>
                  <section>
                    {articles}
                  </section>
          </Container>
      )
      }
    }
}

export default graphql(gql`
  getArticles(count: 4) {
    headline
    extract
    text
    link
    publishDate
    photo
    photoDesc
  }
`, {
  options: { fetchPolicy: 'cache-and-network' },
})(ArticleSection)
