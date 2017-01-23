
import React, { Component } from 'react';
import { Menu, Segment, Modal, Button, Header } from 'semantic-ui-react';
import NewPoll from './NewPoll.jsx';

export default class HeaderTop extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />

             <Modal trigger={<Menu.Item name='NewPoll' active={activeItem === 'NewPoll'}/>}>
                 <Modal.Header>Make a new Poll Here</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <Header>Header Here</Header>
                  <NewPoll/>
                </Modal.Description>
              </Modal.Content>
            </Modal>


          <Menu.Menu position='right'>
            <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>


      </div>
    )
  }
}