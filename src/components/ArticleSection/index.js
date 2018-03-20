import React, {Component} from 'react'
import {Segment,Container} from 'semantic-ui-react'
import NewsItem from '../NewsItem'
import styled from 'styled-components'

const Title = styled.h1`
  color: black;
`;
//TODO: Take prop count, use on news and homepage
class ArticleSection extends Component{
    render(){
        return(
            <Container>
                <Segment>
                    <Title>Latest Updates & Upcoming Events</Title>
                    <NewsItem headline="Example Title" publishDate="02-03-1996" photo="/logo.png" photoDesc="Logo" extract="123" text="liisgd osoudha iuahsd habsd uhwe lahsbd iuasd knabd poouasdk kbasuhda slkkhbasd"/>
                </Segment>
            </Container>
        )
    }
}

export default ArticleSection