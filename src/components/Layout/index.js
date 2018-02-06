import React, { Component, Children } from 'react'
import DesktopContainer from '../DesktopContainer'
import MobileContainer from '../MobileContainer'

class Layout extends Component {

  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 1075;
    const children = this.props.children
    // the rest is the same...

    if (isMobile) {
      return (
        <MobileContainer >
          {children}
        </MobileContainer>
      );
    } else {
      return (
        <DesktopContainer >
          {children}
        </DesktopContainer>
      );
    }
  }
}

export default Layout
