import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Form, FormGroup, Label, Input } from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as PlayerAction from '../../action/player'
import { connect } from 'react-redux';

class AddPlayer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            player: {
                id: '',
                firstName: '',
                lastName: '',
                score: '',
            },
            add: true,
            validf:true,
            validl:true,
        }
    }

    closeModel = () => {
        this.setState({
            player: {
                id: '',
                firstName: '',
                lastName: '',
                score: ''
            },
            add: true,
            validf:true,
            validl:true,
            valids:true
        })
        this.props.toggle()
    }

    AddPlayerdata = () => {
        let c = this.props.showplayer.length;
        c = c + 1;
        const newplayer = {
            id: c,
            firstName: this.state.player.firstName,
            lastName: this.state.player.lastName,
            score: this.state.player.score
        }
        this.props.action.PlayerAction.AddDataAction(newplayer)
        this.closeModel()
    }
    EditPlayerdata = () => {
        const fname = this.state.player.firstName !== '' ? this.state.player.firstName : this.props.edata.firstName
        const lname = this.state.player.lastName !== '' ? this.state.player.lastName : this.props.edata.lastName
        const score = this.state.player.score !== '' ? this.state.player.score : this.props.edata.score
        const newplayer = {
            id: this.props.edata.id,
            firstName: fname,
            lastName: lname,
            score: score
        }

        this.props.action.PlayerAction.EditDataAction(newplayer)
        this.closeModel()
    }
    onFnamechange(e) {
        this.setState({ player: { ...this.state.player, firstName: e.target.value } })
        this.validateName(e.target.name,e.target.value)
        this.validateForm()
    }
    onLnamechange(e) {
        this.setState({ player: { ...this.state.player, lastName: e.target.value } })
        this.validateName(e.target.name,e.target.value)
        this.validateForm()
    }
    onScorechange(e) {
        this.setState({ player: { ...this.state.player, score: e.target.value } })
        this.validateName(e.target.name,e.target.value)
        this.validateForm()
    }
    validateForm = () => {
        const player = this.state.player
        if (player.firstName !== '' && player.lastName !== '' && player.score !== '') {
            this.setState({
                ...this.state.player,
                add: false
            })
        }
    }
    validateName = (name,value) => {
        let r;
        if(name==='score'){
            r = 1<=name && 
        }
        else{
        r = value.match(/^[a-zA-Z ]+$/i)
    }
        const v=r?true:false
        console.log('name..',name)
        if(name==='fname'){
            this.setState({...this.state,validf:v})
        }
        else if(name==='lname'){
            this.setState({...this.state,validl:v})
        } 
        else{
            this.setState({...this.state,valids:v})
        }
    }
    render() {

        const player = this.props.edata.id ? this.props.edata : this.state.player;

        return (
            <Container>
                <Modal isOpen={this.props.isOpen} toggle={this.closeModel} className={this.props.className}>
                    <ModalHeader toggle={this.closeModel}>Insert Player Detail</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label >First Name</Label>
                                <Input type="text" name="fname" defaultValue={player.firstName} placeholder="Enter FirstName" onChange={this.onFnamechange.bind(this)} />
                                <p style={{color:'red'}}>{ this.state.validf?'' : 'Only Alphabets Allow' }</p>
                            </FormGroup>
                            <FormGroup>
                                <Label >Last Name</Label>
                                <Input type="text" name="lname" defaultValue={player.lastName} placeholder="Enter LastName" onChange={this.onLnamechange.bind(this)} />
                                <p style={{color:'red'}}>{ this.state.validl?'' : 'Only Alphabets Allow' }</p>
                            </FormGroup>
                            <FormGroup>
                                <Label >Score</Label>
                                <Input type="number" name="score" defaultValue={player.score} placeholder="Enter Score" min='1' max='100' onChange={this.onScorechange.bind(this)} />
                                <p style={{color:'red'}}>{ this.state.valids?'' : 'Score between 1 to 100' }</p>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        {this.props.edata.id ? <Button color="primary" onClick={this.EditPlayerdata}>Update</Button>
                            : <Button color="primary" disabled={this.state.add} onClick={this.AddPlayerdata}>Submit</Button>}
                        {' '}
                        <Button color="secondary" onClick={this.closeModel}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        )
    }
}
const mapStateToProps = (state) => ({
    showplayer: state.player.player
})
const mapDispatchToProps = (dispatch) => ({
    action: {
        PlayerAction: bindActionCreators(PlayerAction, dispatch)
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(AddPlayer)
