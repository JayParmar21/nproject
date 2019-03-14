import React, { Component } from 'react'

class AddPlayer extends Component{
    render(){
        return(
            <Container>
            <div className='float-right margin15'>
              <Modal isOpen={this.props.isOpen}  >
                <ModalHeader toggle={this.closeModal} >Team</ModalHeader>
                <ModalBody>
                  <Form method="post">
                    <FormGroup>
                      <Label for="teamName">Team Name</Label>
                      <Input type="text" name="teamName" id="teamName" placeholder="Team Name" defaultValue={this.props.dataid ? this.props.dataid.teamName : ""} onChange={this.inputChangeHandler.bind(this)} />
                      <span className='alert'>{this.state.fieldsErrors.teamName}</span>
                      {(this.state.teamName === '' && this.state.submitted) ? <p className='alert'>* Required Teamname</p> : null}
                    </FormGroup>
                    {image}
                  </Form>
                </ModalBody>
                <ModalFooter>
                  {this.props.dataid && this.props.dataid.length !== 0 ?
                    <Button color="info" onClick={this.UpdateDataData.bind(this)}>Update</Button>
                    : <Button color="info" onClick={this.submitted.bind(this)}>Submit</Button>}
                  <Button color="secondary" onClick={this.closeModal}>Cancel</Button>
                </ModalFooter>
              </Modal>
            </div>
          </Container>
        )
    }
}
