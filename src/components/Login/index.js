import React, {Component} from 'react'
import { Button, Icon,Modal} from 'semantic-ui-react'

class Login extends Component {
  render () {
    return (
      <Modal size='tiny' closeIcon trigger={<Button as='a' basic style={{ marginLeft: '0.5em' }}>Log In</Button>}>
      <Modal.Header>Log in to continue</Modal.Header>
        <Modal.Content>
          <Button size='large' color='facebook' style={{width: "100%"}}>
            <Icon name='facebook f' /> Log in with Facebook
          </Button>

          <div style={{marginTop:'16px', marginBottom: '16px'}}></div>

          <Button basic color='black' content='Black' style={{width: "100%"}}>
            <Icon name='mail' />Email Address
          </Button>
        </Modal.Content>
      </Modal>
    )
  }
}

export default Login

