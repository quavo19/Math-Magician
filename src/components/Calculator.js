import React, { Component } from 'react';
import calculate from '../Logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  render() {
    const clickEvent = (event) => {
      this.setState((state) => ({
        ...state,
        ...calculate(state, event.target.name),
        // next: event.target.name,
      }));
    };
    const { next, operation, total } = this.state;
    return (
      <div className="container flex">
        <div className="Output-bar flex button-container">
          { total }
          {' '}
          { operation }
          {' '}
          { next }
        </div>
        <div className="buttons">
          <div className="col-1 button-container flex">
            <button type="button" name="AC" onClick={clickEvent}>AC</button>
            <button type="button" name="+/-" onClick={clickEvent}>+/-</button>
            <button type="button" name="%" onClick={clickEvent}>%</button>
            <button type="button" name="÷" onClick={clickEvent}>÷</button>
          </div>
          <div className="col-2 button-container flex">
            <button type="button" name="7" onClick={clickEvent}>7</button>
            <button type="button" name="8" onClick={clickEvent}>8</button>
            <button type="button" name="9" onClick={clickEvent}>9</button>
            <button type="button" name="x" onClick={clickEvent}>X</button>
          </div>

          <div className="col-3 button-container flex">
            <button type="button" name="4" onClick={clickEvent}>4</button>
            <button type="button" name="5" onClick={clickEvent}>5</button>
            <button type="button" name="6" onClick={clickEvent}>6</button>
            <button type="button" name="-" onClick={clickEvent}>-</button>
          </div>
          <div className="col-4 button-container flex">
            <button type="button" name="1" onClick={clickEvent}>1</button>
            <button type="button" name="2" onClick={clickEvent}>2</button>
            <button type="button" name="3" onClick={clickEvent}>3</button>
            <button type="button" name="+" onClick={clickEvent}>+</button>
          </div>
          <div className="col-5 button-container flex">
            <button onClick={clickEvent} name="0" type="button">0</button>
            <button onClick={clickEvent} name="." type="button">
              .
            </button>
            <button onClick={clickEvent} name="=" type="button">=</button>
          </div>
        </div>
      </div>
    );
  }
}
