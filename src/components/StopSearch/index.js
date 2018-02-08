import React from 'react'
import Downshift from 'downshift'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

function ApolloAutocomplete() {
  return (
    <Downshift onChange={item => alert(item)}>
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        inputValue,
        selectedItem,
        highlightedIndex,
        isOpen,
      }) =>
        <div>
          <label {...getLabelProps()}>Enter a stop</label>
          <br />
          <input {...getInputProps()} />
          {isOpen
            ? <div>
                <ApolloAutocompleteMenuWithData
                  {...{
                    inputValue,
                    selectedItem,
                    highlightedIndex,
                    getItemProps,
                  }}
                />
              </div>
            : null}
        </div>}
    </Downshift>
  )
}

function ApolloAutocompleteMenu({
  data: {stops, loading},
  selectedItem,
  highlightedIndex,
  getItemProps,
}) {
  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <div>
      {stops.map(({name: item}, index) =>
        <div
          {...getItemProps({
            item,
            index,
            key: item,
            style: {
              backgroundColor: highlightedIndex === index ? 'gray' : 'white'
            },
          })}
        >
          {item}
        </div>,
      )}
    </div>
  )
}

const ApolloAutocompleteMenuWithData = graphql(gql`
  query StopsQuery {
    stops {
      name
    }
  }
`)(ApolloAutocompleteMenu);

export default ApolloAutocomplete

