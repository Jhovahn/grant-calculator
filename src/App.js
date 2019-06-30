import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shares: '',
      outstanding: '',
      exercisePrice: '',
      exitValuation: '',
      years: '',
      name: ''
    };
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>Grant Calculator</h1>
        <ul style={{ listStyleType: 'none' }}>
          <li>
            <label>
              Shares: <span />
              <input
                type="text"
                name="shares"
                onChange={e => this.handleInput(e)}
                value={this.state.shares}
              />
            </label>
          </li>
          <li>
            <label>
              Outstanding: <span />
              <input
                type="text"
                name="outstanding"
                onChange={e => this.handleInput(e)}
                value={this.state.outstanding}
              />
            </label>
          </li>
          <li>
            <label>
              Exercise Price: <span />
              <input
                type="text"
                name="exercisePrice"
                onChange={e => this.handleInput(e)}
                value={this.state.exercisePrice}
              />
            </label>
          </li>
          <li>
            <label>
              Exit Valuation: <span />
              <input
                type="text"
                name="exitValuation"
                onChange={e => this.handleInput(e)}
                value={this.state.exitValuation}
              />
            </label>
          </li>
          <li>
            <label>
              Years: <span />
              <input
                type="text"
                name="years"
                onChange={e => this.handleInput(e)}
                value={this.state.years}
              />
            </label>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
