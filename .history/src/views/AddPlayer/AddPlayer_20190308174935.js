import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container ,Form, FormGroup, Label, Input} from 'reactstrap';


class AddPlayer extends Component {

    AddPlayerdata(){

    }
    onchangeHandler(){

    }
    render() {
        return (
            <Container>

                <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.props.toggle}>Insert Player Detail</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label >First Name</Label>
                                <Input type="text" name="fname" id="fname" placeholder="Enter FirstName" onChange={this.onchangeHandler.} />
                            </FormGroup>
                            <FormGroup>
                                <Label >Last Name</Label>
                                <Input type="text" name="lname" id="lname" placeholder="Enter LastName" />
                            </FormGroup>
                            <FormGroup>
                                <Label >Score</Label>
                                <Input type="number" name="score" id="score" placeholder="Enter Score" />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.AddPlayerdata}>Submit</Button>{' '}
                        <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        )
    }
}
export default AddPlayer