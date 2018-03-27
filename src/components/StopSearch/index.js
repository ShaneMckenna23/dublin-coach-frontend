import React, {Component} from 'react'
import Downshift from 'downshift'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import {Input} from 'semantic-ui-react'
import styled from 'styled-components';
import {searchStops, updatePlannerState} from '../../graphql'

const Label = styled.label`
  color: white;
  font-size: 150%;
  font-weight: bold;
`
const DropdownDesktop = styled.div`
  position: absolute;
  background-color: white;
  width: 22em;
  border: solid 1px grey;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  z-index: 99;
`

const DropdownMobile = styled.div`
  position: absolute;
  background-color: white;
  width: 16.5em;
  border: solid 1px grey;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`

const DropdownItem = styled.div`
  padding: 5px 10px;
  font-size: 150%;
`

const Wrapper = styled.div`
  margin-right: 1em;
`

class ApolloAutocomplete extends Component{

  onChange = async (item) => {
    let {updatePlannerState, label} = this.props
    label = label.toLowerCase()
    try {
      await updatePlannerState({
        variables: {
          [label]: item
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  render(){
    const {label, isMobile, placeholder} = this.props
    const Dropdown = isMobile ? DropdownMobile : DropdownDesktop
    return (
      <Wrapper>
        <Downshift onChange={(item) => this.onChange(item)}>
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
              <Label {...getLabelProps()}>{label}:</Label>
              <br />
              <Input placeholder={placeholder} size={isMobile ? "big":"massive"} {...getInputProps()} />
              {isOpen
                ? <Dropdown>
                    <ApolloAutocompleteMenuWithData
                      {...{
                        inputValue,
                        selectedItem,
                        highlightedIndex,
                        getItemProps,
                      }}
                    />
                  </Dropdown>
                : null}
            </div>}
        </Downshift>
      </Wrapper>
    )
  }
}

function ApolloAutocompleteMenu({
  data: {searchStops, loading},
  selectedItem,
  highlightedIndex,
  getItemProps,
}) {
  if (loading) {
    return <DropdownItem>Loading...</DropdownItem>
  }
  return (
    <div>
      {searchStops.map(({name: item}, index) =>
        <DropdownItem
          {...getItemProps({
            item,
            index,
            key: item,
            style: {
              backgroundColor: highlightedIndex === index ? '#b3c6ff' : '',
            },
          })}
        >
          {item}
        </DropdownItem>,
      )}
    </div>
  )
}

const ApolloAutocompleteMenuWithData = graphql(searchStops)(ApolloAutocompleteMenu);

export default graphql(updatePlannerState, { name: 'updatePlannerState' })(ApolloAutocomplete)



