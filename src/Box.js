import React from "react";
import './style/Box.css';

class Box extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            symbol : ' ',
            isClicked : false,
            player : 0
        };
        this.wrapperRef = React.createRef();
    }

    check() {
        if (!this.state.isClicked) {
            let player = this.props.getPlayer();
            if (player === 1) {
                this.setState({ isClicked : true });
                this.setState({ player : 2 }, () => {
                    this.props.setPlayer(this.state.player);
                    this.props.changeArea(this.props.keyData, 1);
                });
                this.setState({ symbol : 'X' }, () => {
                    this.wrapperRef.current.classList.toggle('red-font');
                    this.props.onClick(this.props.getArea());
                });
            } else if (player === 2) {
                this.setState({ isClicked : true });
                this.setState({ player : 1 }, () => {
                    this.wrapperRef.current.classList.toggle('red-font');
                    this.props.setPlayer(this.state.player);
                    this.props.changeArea(this.props.keyData, 2);
                });
                this.setState({ symbol : 'O' }, () => {
                    this.props.onClick(this.props.getArea());
                });
            }
        }
    }

    getInfo() {
        return this.state;
    }

    render() {
        return (
            <div ref={this.wrapperRef} className="Box" onClick={() => this.check()}>
                {this.state.symbol}
            </div>
        );
    }
}

export default Box;
