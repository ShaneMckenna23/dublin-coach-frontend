import React, { Component} from 'react'
import DesktopContainer from '../DesktopContainer'
import MobileContainer from '../MobileContainer'
import {Switch, Route} from "react-router"

import Loadable from "react-loadable"

const Playground = Loadable({
  loader: () => import(/* webpackChunkName: "Playground" */ "../Playground"),
  loading: () => <div>loading...</div>,
  modules: ['Playground']
});

const Homepage = Loadable({
  loader: () => import(/* webpackChunkName: "Homepage" */ "../Homepage"),
  loading: () => <div>loading...</div>,
  modules: ['Homepage']
});

const NewsPage = Loadable({
  loader: () => import(/* webpackChunkName: "NewsPage" */ "../NewsPage"),
  loading: () => <div>loading...</div>,
  modules: ['NewsPage']
});

const ContactPage = Loadable({
  loader: () => import(/* webpackChunkName: "ContactPage" */ "../ContactPage"),
  loading: () => <div>loading...</div>,
  modules: ['ContactPage']
});

const Styled = Loadable({
  loader: () => import(/* webpackChunkName: "Styled" */ "../Styled"),
  loading: () => <div>loading...</div>,
  modules: ['Styled']
});


class Layout extends Component {

  constructor(props) {
    super(props);
    if(!this.props.server){
      this.state = {
        width: window.innerWidth,
      };
    }
  }

  componentWillMount() {
    if(!this.props.server){
      window.addEventListener('resize', this.handleWindowSizeChange);
    }
  }

  componentWillUnmount() {
    if(!this.props.server){
      window.removeEventListener('resize', this.handleWindowSizeChange);
    }
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  isMobile = () =>{
    const {server} = this.props

    if(server){
      return this.props.isMobile
    }else{
      const { width } = this.state;
      return width <= 1075
    }
  }

  render() {
    const isMobile = this.isMobile()

    const routes = <Switch>
      <Route path="/" exact component={Homepage}/>
      <Route path="/news" component={NewsPage}/>
      <Route path="/contact" component={ContactPage}/>
      <Route path="/playground" component={Playground}/>
      <Route path="/style" component={Styled} />
    </Switch>

    if (isMobile) {
      return (
        <MobileContainer >
          {routes}
        </MobileContainer>
      );
    } else {
      return (
        <DesktopContainer >
          {routes}
        </DesktopContainer>
      );
    }
  }
}

export default Layout

