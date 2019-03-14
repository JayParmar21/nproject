import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Form, FormGroup, Label, Input } from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as PlayerAction from '../../action/player'
import { connect } from 'react-redux';

class AddPlayer extends Component {
    state = {
        player: {
            firstName: '',
            lastName: '',
            score: ''
        }
    }

    AddPlayerdata() {
        let c=5;
        c=c+1;
        const newplayer={
            id: c,
            firstName:this.state.player.firstName,
            lastName: this.state.player.lastName,
            score: this.state.player.score
        }
        this.props.action.PlayerAction.AddDataAction(newplayer)
        this.props.toggle()
    }
    onFnamechange(e) {
        this.setState({ player: { firstName: e.target.value } })
    }
    onLnamechange(e) {
        this.setState({ player: { lastName: e.target.value } })
    }
    onScorechange(e) {
        this.setState({ player: { score: e.target.value } })
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
                                <Input type="text" name="fname" id="fname" placeholder="Enter FirstName" onChange={this.onFnamechange.bind(this)} />
                            </FormGroup>
                            <FormGroup>
                                <Label >Last Name</Label>
                                <Input type="text" name="lname" id="lname" placeholder="Enter LastName" onChange={this.onLnamechange.bind(this)} />
                            </FormGroup>
                            <FormGroup>
                                <Label >Score</Label>
                                <Input type="number" name="score" id="score" placeholder="Enter Score" onChange={this.onScorechange.bind(this)} />
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
const mapStateToProps=(state)=>({
    showplayer:state.player.player
})
const mapDispatchToProps=(dispatch)=>({
    action:{
        PlayerAction:bindActionCreators(PlayerAction,dispatch)
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(AddPlayer)
