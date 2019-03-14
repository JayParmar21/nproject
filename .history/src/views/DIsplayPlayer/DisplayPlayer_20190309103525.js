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
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

      editdata(e){
        console.log(e);
      }

    render() {
        let i=0;
        console.log(this.props.showplayer);
        return (
            <div>
                <div style={{margin:'15px'}}>
                <Button color="info" onClick={this.toggle} >  Add Player  </Button>
                <AddPlayer isOpen={this.state.modal} toggle={this.toggle} edata={this.s}/>
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
                            <td><Button color='primary' style={{marginRight:'10px'}} onClick={this.editdata.bind(this)}>Edit</Button>
                            <Button color='danger'>Delete</Button></td>
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