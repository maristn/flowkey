import React, { Component } from 'react';
import Key from './Key.jsx';
import KEYS from '../../keys-config';
import './KeyBoard.css';

class KeyBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keys: KEYS
    };
  }

  render() {
    return (
      <div className="KeyBoard">
        {this.state.keys.map((key, index) => {
          return <Key key={index} tones={key} onKeyPlay={this.props.onKeyPlay}></Key>
        })}
      </div>
    );
  }
}

export default KeyBoard;