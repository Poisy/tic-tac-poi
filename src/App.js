import Table from './Table'
import InfoTable from './InfoTable';
import React from 'react';
import './style/bootstrap.min.css';
import './style/App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      player : 1,
      turn : 1,
      isGameOver : false,
      table : this.renderTable()
    };
  }

  setPlayer(x) {
    if ((x === 1 || x === 2)) {
        this.setState({ player : x });
    }
  }

  getPlayer = () => this.state.player;

  check(area) {
    console.log(this.state.turn);
    if (this.state.turn <= 9 && !this.state.isGameOver) {
      var winner = 0;

      if (this.checkIfWining(area, 1)) winner = 1;
      else if (this.checkIfWining(area, 2)) winner = 2;

      if (winner !== 0) {
        this.setState({ isGameOver : true });

        alert("Player " + winner + " is a Winner!");
      }
      else if (this.state.turn === 9) {
        alert("No Winner!");
      }
      else {
        this.setState({ turn : this.state.turn + 1 });
      }
    }
  }

  checkIfWining(area, player) {
    if ((area[0] === player && area[1] === player && area[2] === player) || 
    (area[3] === player && area[4] === player && area[5] === player) || 
    (area[6] === player && area[7] === player && area[8] === player) ||
    (area[0] === player && area[3] === player && area[6] === player) ||
    (area[1] === player && area[4] === player && area[7] === player) ||
    (area[2] === player && area[5] === player && area[8] === player) ||
    (area[0] === player && area[4] === player && area[8] === player) ||
    (area[2] === player && area[4] === player && area[6] === player)) return true;
    else return false;  
  }

  renderTable() {
    return (
      <Table getPlayer={this.getPlayer.bind(this)} setPlayer={(x) => this.setPlayer(x)} 
        onClick={(b) => this.check(b)}></Table>
    );
  }

  reset() {
    this.setState({ table : undefined }, () => {
      this.setState({ table : this.renderTable() }, () => {
        this.setState({ isGameOver : false }, () => {
          this.setState({ turn : 1 }, () => {
            this.setState({ player : 1 });
          });
        });
      });
    });
  }

  render() {
    return (
      <div className="App container">
        <div className="row align-items-center">
          <div className="col">
            <button className="restart-button btn btn-primary" 
              onClick={() => this.reset()}>Restart</button>
          </div>
          <div className="col-5">
            <p>Tic Tac Poi</p>
            {this.state.table}
          </div>
          <div className="col">
            <InfoTable player={this.state.player} turn={this.state.turn}></InfoTable>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
