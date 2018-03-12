import React from 'react'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Dimmer, Loader, Segment } from 'semantic-ui-react'

import NewsItem from '../NewsItem'

const NewsItemContainer = ({ data: { getArticles, loading, error} }) => {
  if(error){
    return(
      <Segment>
          Failed To Load Resource
      </Segment>
    );
  }
  if(loading){
    return(
      <Segment>
        <Dimmer active>
          <Loader size='big'>Loading</Loader>
        </Dimmer>
      </Segment>
    );
  }
  else{
    return (
      <div>
        {getArticles.map(({headline, publishDate, photo, photoDesc, extract}) => (
              <NewsItem
                headline={headline}
                publishDate={publishDate}
                photo={photo}
                photoDesc={photoDesc}
                extract={extract} />
            ))}
      </div>
    );
  }
}

export default graphql(gql`
  query ArticleQuery {
    getArticles {
      headline
      extract
      publishDate
      photo
      photoDesc
    }
  }
`)(NewsItemContainer);
