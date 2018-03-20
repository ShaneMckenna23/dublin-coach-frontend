import React from 'react'
import Downshift from 'downshift'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import {Input} from 'semantic-ui-react'

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
          <label {...getLabelProps()}></label>
          <br />
          <Input {...getInputProps()} />
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
  data: {searchStops, loading},
  selectedItem,
  highlightedIndex,
  getItemProps,
}) {
  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <div>
      {searchStops.map(({name: item}, index) =>
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
  query StopsQuery($inputValue: String!) {
    searchStops(filter: $inputValue){
      name
    }
  }
`)(ApolloAutocompleteMenu);

export default ApolloAutocomplete

