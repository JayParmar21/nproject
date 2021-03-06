import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Form, FormGroup, Label, Input } from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as PlayerAction from '../../action/player'
import { connect } from 'react-redux';

class AddPlayer extends Component {
   
    constructor(props) {
        super(props);
        this.state = {player: {
            id:'',
            firstName: '',
            lastName: '',
            score: ''
        }
      }
    }
    // componentWillReceiveProps(){
    //     debugger;
    //     if(this.props.edata.id)
    //     {
    //     this.setState({
    //         player: {
    //             id:this.props.edata.id,
    //             firstName: this.props.edata.firstName,
    //             lastName: this.props.edata.lastName,
    //             score: this.props.edata.score
    //         }
    //     })
    // }
    // console.log('will..',this.state)
    // }

    closeModel=()=>{
        this.setState({
            player: {
                id:'',
                firstName: '',
                lastName: '',
                score: ''
            }
        })
        this.props.toggle()
    }

    AddPlayerdata=()=> {
        let c=this.props.showplayer.le;
        c=c+1;
        const newplayer={
            id: c,
            firstName:this.state.player.firstName,
            lastName: this.state.player.lastName,
            score: this.state.player.score
        }
        this.props.action.PlayerAction.AddDataAction(newplayer)
        this.closeModel()
    }
    EditPlayerdata=()=> {
        const newplayer={
            id: this.props.edata.id,
            firstName:this.state.player.firstName,
            lastName: this.state.player.lastName,
            score: this.state.player.score
        }
      
        this.props.action.PlayerAction.EditDataAction(newplayer)
        this.closeModel()
    }
    onFnamechange(e) {
        this.setState({ player: {...this.state.player, firstName: e.target.value } })
    }
    onLnamechange(e) {
        this.setState({ player: {...this.state.player, lastName: e.target.value } })
    }
    onScorechange(e) {
        this.setState({ player: {...this.state.player, score: e.target.value } })
        
    }
    render() {
        
        const player=this.props.edata.id?this.props.edata:this.state.player;
        console.log('rdata..',this.props.edata.id)
        return (
            <Container>

                <Modal isOpen={this.props.isOpen} toggle={this.closeModel} className={this.props.className}>
                    <ModalHeader toggle={this.closeModel}>Insert Player Detail</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label >First Name</Label>
                                <Input type="text" name="fname" defaultValue={player.firstName} placeholder="Enter FirstName" onChange={this.onFnamechange.bind(this)} />
                            </FormGroup>
                            <FormGroup>
                                <Label >Last Name</Label>
                                <Input type="text" name="lname" defaultValue={player.lastName}  placeholder="Enter LastName" onChange={this.onLnamechange.bind(this)} />
                            </FormGroup>
                            <FormGroup>
                                <Label >Score</Label>
                                <Input type="number" name="score" defaultValue={player.score} placeholder="Enter Score" min='1' max='100' onChange={this.onScorechange.bind(this)} />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        {this.props.edata.id?<Button color="primary" onClick={this.EditPlayerdata}>Update</Button>
                        :<Button color="primary" onClick={this.AddPlayerdata}>Submit</Button>}
                        {' '}
                        <Button color="secondary" onClick={this.closeModel}>Cancel</Button>
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
