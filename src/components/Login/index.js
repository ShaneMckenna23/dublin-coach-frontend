import React, {Component} from 'react'
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'

class Login extends Component {
  render () {
    return (
      <Modal size='tiny' closeIcon trigger={<Button as='a' basic style={{ marginLeft: '0.5em' }}>Log In</Button>}>
      <Modal.Header>Log in to continue</Modal.Header>
        <Modal.Content image>
          <Button size='large' color='facebook' style={{width: "100%"}}>
            <Icon name='facebook' /> Log in with Facebook
          </Button>
          <Modal.Description>

          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

export default Login

