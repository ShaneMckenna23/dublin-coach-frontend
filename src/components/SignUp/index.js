import React, {Component} from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react'

class SignUp extends Component {
  render () {
    return (
      <Modal size='tiny' closeIcon trigger={<Button as='a' basic style={{ marginLeft: '0.5em' }}>Sign Up</Button>}>
        <Modal.Content image>
          <Button size='large' color='facebook' style={{width: "100%"}}>
            <Icon name='facebook' /> Sign Up with Facebook
          </Button>
          <Modal.Description>

          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

export default SignUp

