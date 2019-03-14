import React, { Component } from 'react'
import { Table,Button } from 'reactstrap'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import * as PlayerAction from '../../action/player'
import AddPlayer from '../AddPlayer/AddPlayer'

class DisplayPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          editdata:{}
        };
    
        this.toggle = this.toggle.bind(this);
      }
      componentWillUpdate(){
          this.props.action.PlayerAction.FetchDataAction();
      }
      closeModel=()=>{
        this.setState({
            ...this.state,
            editdata:{}
        })
        console.log("ss",this.state)
        this.toggle()
    }

      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

      editdata=(player)=>{
        this.setState({editdata:player})
        this.toggle()
      }
      deletedata=(player)=>{
        const id=player.id
        this.props.action.PlayerAction.DeleteDataAction(id)
      }
    render() {
        let i=0;
        return (
            <div>
                <div style={{margin:'15px'}}>
                <Button color="info" onClick={this.closeModel} >Add Player</Button>
                <AddPlayer isOpen={this.state.modal} toggle={this.toggle} edata={this.state.editdata} />
                </div>
                <Table  hover>
                    <thead className="thead-dark">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Score</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.showplayer.map((player)=>{
                            i=i+1;
                           return (
                            <tr>
                            <th scope="row">{i}</th>
                            <td>{player.lastName} {player.firstName}</td>
                            <td>{player.score}</td>
                            <td><Button color='primary' style={{marginRight:'10px'}} onClick={this.editdata.bind(this,player)}>Edit</Button>
                            <Button color='danger' onClick={this.deletedata.bind(this,player)}>Delete</Button></td>
                            </tr>
                            );
                        })}
                    
                    </tbody>
                </Table>
            </div>
        );
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
export default connect(mapStateToProps,mapDispatchToProps)(DisplayPlayer)