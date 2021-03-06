import React, { Component } from 'react'
import { Table,Button } from 'reactstrap'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import * as PlayerAction from '../../action/player'

class DisplayPlayer extends Component {
    
    render() {
        const i=0
        console.log(this.props.showplayer);
        return (
            <div>
                <Table  hover size="sm">
                    <thead className="thead-dark">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Score</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.showplayer.map((player)=>{
                           return (
                            <tr>
                            <th scope="row">i</th>
                            <td>{player.lastName} {player.firstName}</td>
                            <td>{player.score}</td>
                            <td><Button>Edit</Button></td>
                            <td><Button>Delete</Button></td>
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