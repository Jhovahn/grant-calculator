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
      name: '',
      exerciseCost: '',
      percentOwnership: '',
      grantValue: '',
      returnPerYear: '',
      netGrant: ''
    };
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  calculatePercentOwnership = (shares, outstanding) => {
    shares = Number(shares);
    outstanding = Number(outstanding);
    this.setState({
      percentOwnership: Math.round(shares / outstanding * 100 * 100) / 100
    });
  };

  handleCalculatePercentOwnership = e => {
    this.calculatePercentOwnership(this.state.shares, this.state.outstanding);
  };

  calculateGrantValue = (shares, outstanding, exitValuation) => {
    shares = Number(shares);
    outstanding = Number(outstanding);
    exitValuation = Number(exitValuation);

    this.setState({
      grantValue: Math.round(shares / outstanding * exitValuation * 100) / 100
    });
  };

  handleCalculateGrantValue = e => {
    this.calculateGrantValue(
      this.state.shares,
      this.state.outstanding,
      this.state.exitValuation
    );
  };

  calculateReturnPerYear = (grantValue, years) => {
    this.setState({
      returnPerYear: Math.round(grantValue / years * 100) / 100
    });
  };

  handleCalculateReturnPerYear = () => {
    this.calculateReturnPerYear(this.state.grantValue, this.state.years);
  };

  costCalculation = (shares, exercisePrice) => {
    shares = Number(shares);
    exercisePrice = Number(exercisePrice);
    this.setState({ cost: shares * exercisePrice });
  };

  calculateExerciseCost = (cost, shares) => {
    this.setState({ exerciseCost: cost * shares });
  };

  handleCalculateExerciseCost = e => {
    this.calculateExerciseCost(this.state.exercisePrice, this.state.shares);
  };

  calculateNetGrant = (grantValue, exerciseCost) => {
    grantValue = Number(grantValue);
    exerciseCost = Number(exerciseCost);
    console.log(exerciseCost);
    this.setState({
      netGrant: Math.round((grantValue - exerciseCost) * 100) / 100
    });
  };

  handleCalculateNetGrant = e => {
    this.calculateNetGrant(this.state.grantValue, this.state.exerciseCost);
  };

  reset() {
    this.setState({
      shares: '',
      outstanding: '',
      exercisePrice: '',
      exitValuation: '',
      years: '',
      percentOwnership: '',
      grantValue: '',
      returnPerYear: '',
      exerciseCost: '',
      netGrant: ''
    });
  }

  render() {
    let {
      shares,
      outstanding,
      exercisePrice,
      exitValuation,
      years,
      percentOwnership,
      grantValue,
      returnPerYear,
      exerciseCost,
      netGrant
    } = this.state;
    let disablePercentOwnership =
      shares.length &&
      outstanding.length &&
      Number(shares) &&
      Number(outstanding) &&
      Number(shares) <= Number(outstanding)
        ? false
        : true;
    let disableGrantValue =
      !disablePercentOwnership &&
      exitValuation.length > 0 &&
      Number(exitValuation) > 0
        ? false
        : true;
    let disableReturnPerYear =
      !disableGrantValue && years.length > 0 && Number(years) > 0
        ? false
        : true;
    let disableCost =
      Number(this.state.exercisePrice) && this.state.exercisePrice.length > 0
        ? false
        : true;
    let disableNetGrant =
      this.state.grantValue > 0 && this.state.exercisePrice > 0 ? false : true;

    return (
      <div className="App">
        <h1>Grant Calculator</h1>
        <h4>Instructions</h4>
        <ul style={{ listStyleType: 'none' }}>
          <li>
            Enter available information about your grant in the fields below.
          </li>
          <li>
            Buttons become clickable once the appropriate fields are filled,
            click to calculate once you've entered new data.
          </li>
          <li>Calculations appear to the right of clicked buttons</li>
          <li>Reset clears all fields</li>
        </ul>

        <ul style={{ listStyleType: 'none', margin: '5px' }}>
          <li>
            <label>
              Shares <span />
              <input
                type="text"
                name="shares"
                onChange={e => this.handleInput(e)}
                value={shares}
              />
            </label>
          </li>
          <li>
            <label>
              Outstanding <span />
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
              Exit Valuation <span />
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
              Years <span />
              <input
                type="text"
                name="years"
                onChange={e => this.handleInput(e)}
                value={this.state.years}
              />
            </label>
          </li>
          <li>
            <label>
              Exercise Price <span />
              <input
                type="text"
                name="exercisePrice"
                onChange={e => this.handleInput(e)}
                value={exercisePrice}
              />
            </label>
          </li>
        </ul>
        <ul style={{ listStyleType: 'none', margin: '5px' }}>
          <li>
            <button
              disabled={disablePercentOwnership}
              onClick={e => this.handleCalculatePercentOwnership(e)}
            >
              Ownership (%)
            </button>
            {percentOwnership}
          </li>
          <li>
            <button
              disabled={disableGrantValue}
              onClick={e => this.handleCalculateGrantValue(e)}
            >
              Grant Value ($)
            </button>
            {grantValue}
          </li>
          <li>
            <button
              disabled={disableReturnPerYear}
              onClick={() => this.handleCalculateReturnPerYear()}
            >
              Return Per Year ($)
            </button>
            {returnPerYear}
          </li>
          <li>
            <button
              disabled={disableCost}
              onClick={() => this.handleCalculateExerciseCost()}
            >
              Cost ($)
            </button>
            {exerciseCost}
          </li>
          <li>
            <button
              disabled={disableNetGrant}
              onClick={() => this.handleCalculateNetGrant()}
            >
              Net Grant ($)
            </button>
            {netGrant}
          </li>
        </ul>
        <button onClick={() => this.reset()}>Reset</button>
      </div>
    );
  }
}

export default App;
