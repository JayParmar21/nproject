import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Form, FormGroup, Label, Input } from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as PlayerAction from '../../action/player'
import { connect } from 'react-redux';

class AddPlayer extends Component {
   
    constructor(props) {
        super(props);
        this.state = {player: {
            firstName: '',
            lastName: '',
            score: ''
        }
      }
    }

    AddPlayerdata=()=> {
        let c=5;
        c=c+1;
        console.log('fn',this.state.player.firstName,this.state.player.lastName);
        const newplayer={
            id: c,
            firstName:this.state.player.firstName,
            lastName: this.state.player.lastName,
            score: this.state.player.score
        }
        console.log('data...',newplayer);
        this.props.action.PlayerAction.AddDataAction(newplayer)
        this.props.toggle()
    }
    EditPlayerdata=()=> {
        let c=5;
        c=c+1;
        console.log('fn',this.state.player.firstName,this.state.player.lastName);
        const newplayer={
            id: c,
            firstName:this.state.player.firstName,
            lastName: this.state.player.lastName,
            score: this.state.player.score
        }
        console.log('data...',newplayer);
        this.props.action.PlayerAction.AddDataAction(newplayer)
        this.props.toggle()
    }
    onFnamechange(e) {
        console.log('fname',e.target.value);
        this.setState({ player: {...this.state.player, firstName: e.target.value } })
        console.log('state',this.state)
    }
    onLnamechange(e) {
        console.log('lname',e.target.value);
        this.setState({ player: {...this.state.player, lastName: e.target.value } })
        console.log('state',this.state)
    }
    onScorechange(e) {
        this.setState({ player: {...this.state.player, score: e.target.value } })
        console.log('state',this.state)
    }
    render() {
        const
        return (
            <Container>

                <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.props.toggle}>Insert Player Detail</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label >First Name</Label>
                                <Input type="text" name="fname" value={} placeholder="Enter FirstName" onChange={this.onFnamechange.bind(this)} />
                            </FormGroup>
                            <FormGroup>
                                <Label >Last Name</Label>
                                <Input type="text" name="lname"  placeholder="Enter LastName" onChange={this.onLnamechange.bind(this)} />
                            </FormGroup>
                            <FormGroup>
                                <Label >Score</Label>
                                <Input type="number" name="score" placeholder="Enter Score" min='1' max='100' onChange={this.onScorechange.bind(this)} />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        {this.props.edata.id?<Button color="primary" onClick={this.EditPlayerdata}>Update</Button>
                        :<Button color="primary" onClick={this.AddPlayerdata}>Submit</Button>}
                        {' '}
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
