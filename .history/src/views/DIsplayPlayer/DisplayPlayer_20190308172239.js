import React, { Component } from 'react'
import { Table,Button } from 'reactstrap'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import * as PlayerAction from '../../action/player'

class DisplayPlayer extends Component {
    
    render() {
        let i=0;
        console.log(this.props.showplayer);
        return (
            <div>
                <Button color="info" onClick={this.toggle} >Add</Button>
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
                            <td><Button color='primary' style={{marginRight:'10px'}}>Edit</Button>
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