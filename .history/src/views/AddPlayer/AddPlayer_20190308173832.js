import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Container } from 'reactstrap';

class AddPlayer extends Component{
    
    render(){
        return(
            <Container>
            <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className}>
              <ModalHeader toggle={this.props.toggle}>Insert Player Detail</ModalHeader>
              <ModalBody>
                
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.props.toggle}>Do Something</Button>{' '}
                <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </div>
        )
    }
}
export default AddPlayer