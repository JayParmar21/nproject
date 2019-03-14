import React, { Component } from 'react'
import { Table } from 'reactstrap'

class DisplayPlayer extends Component {
    render() {
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
                     </Table>
            </div>
        );
    }
}
export default DisplayPlayer