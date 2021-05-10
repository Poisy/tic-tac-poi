import React, { Component } from 'react';
import './style/InfoTable.css';

export default class InfoTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            score : 0, // To be added
            time : 0, // To be added
        };
    }

    render() {
        return (
            <div className="InfoTable align-middle">
                <p className="">Player {this.props.player}</p>
                <p>Turn {this.props.turn}</p>
            </div>
        );
    }
}
