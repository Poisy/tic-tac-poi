import React from "react";
import Box from './Box'
import './style/Table.css'

class Table extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            area : [0, 0, 0, 0, 0, 0, 0, 0, 0],
            boxes : this.setBoxes()
        }
    }

    setBoxes() {
        let b = [];
        for (let i = 0; i < 9; i++) {
            b.push(<Box keyData={i} key={i} onClick={this.props.onClick} setPlayer={this.props.setPlayer} 
                getPlayer={this.props.getPlayer} getArea={this.getArea.bind(this)}
                changeArea={(k, p) => this.changeArea(k, p)}></Box>);
        }
        return b;
    }

    getArea = () => this.state.area;

    changeArea(key, player) {
        let a = this.state.area;
        a[key] = player;

        this.setState({ area : a });
    }

    render() {
        return (
            <div className="Table">
                {this.state.boxes}
            </div>
        );
    }

    //Make tf2 version
}
  
export default Table;