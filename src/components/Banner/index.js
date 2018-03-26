import React, {Component} from 'react';

import styled from 'styled-components';


const DesktopWrapper = styled.section`
  height: 25em;
  width: 100%;
  background-image: url("/banner/desktop.jpg");
  background-repeat: no-repeat;
  background-position: center;
`;

const MobileWrapper = styled.section`
  height: 18em;
  background-image: url("/banner/mobile.jpg");
  background-repeat: no-repeat;
  background-position: center;
`;

class Banner extends Component {
  render () {
    const Wrapper = this.props.isMobile ? MobileWrapper : DesktopWrapper
    return (
      <Wrapper>
      </Wrapper>
    )
  }
}

export default Banner

