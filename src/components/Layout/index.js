import React, { Component} from 'react'
import DesktopContainer from '../DesktopContainer'
import MobileContainer from '../MobileContainer'
import {Switch, Route} from "react-router"
import Loadable from "react-loadable"
import ChunkLoader from '../ChunkLoader'


const Homepage = Loadable({
  loader: () => import(/* webpackChunkName: "Homepage" */ "../Homepage"),
  loading: () => <ChunkLoader/>,
  modules: ['Homepage']
});

const NewsPage = Loadable({
  loader: () => import(/* webpackChunkName: "NewsPage" */ "../NewsPage"),
  loading: () => <ChunkLoader/>,
  modules: ['NewsPage']
});

const ContactPage = Loadable({
  loader: () => import(/* webpackChunkName: "ContactPage" */ "../ContactPage"),
  loading: () => <ChunkLoader/>,
  modules: ['ContactPage']
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
      return width <= 765
    }
  }

  render() {
    const isMobile = this.isMobile()

    const routes =  <Switch>
                      <Route path="/" exact render={routeProps => <Homepage {...routeProps} isMobile={isMobile}/>} />
                      <Route path="/news" component={NewsPage}/>
                      <Route path="/contact" component={ContactPage}/>
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

