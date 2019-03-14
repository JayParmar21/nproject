import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class AddPlayer extends Component{
    
    render(){
        return(
            <div>
            <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Insert Player Detail</ModalHeader>
              <ModalBody>
                
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </div>
        )
    }
}
default