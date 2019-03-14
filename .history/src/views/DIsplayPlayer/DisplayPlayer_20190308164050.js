import React, { Component } from 'react'
import { Table } from 'reactstrap'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';

class DisplayPlayer extends Component {
    render() {
        console.log(this.props.showplayer);
        return (
            <div>
                <Table  hover>
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
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark Otto</td>
                            <td>120</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default DisplayPlayer

const mapStateToProps=(state)=>{
    showplayer:state.player
}
const mapDispatchToProps=(state)=>{
    action:{
        PlayerAction:bindActionCreators()
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DisplayPlayer)