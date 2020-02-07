import React, { Component } from 'react';
import './Key.css';

class Key extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whiteSound: '/grand-piano-mp3-sounds/' + this.props.tones.white + '.mp3',
      blackSound: '/grand-piano-mp3-sounds/' + this.props.tones.black + '.mp3'
    }
    this.playSound = this.playSound.bind(this);
  }

  playSound(tone) {
    let audio = document.getElementById(tone);
    audio.play();
    this.props.onKeyPlay(tone);
  }

  render() {
    return (
      <div className="Key">
        <div className="whiteKey" onClick={() => this.playSound(this.props.tones.white)}></div>
        {this.props.tones.black !== null && <div className="blackKey" onClick={() => this.playSound(this.props.tones.black)}></div>}
        <audio id={this.props.tones.white} src={this.state.whiteSound}></audio>
        <audio id={this.props.tones.black} src={this.state.blackSound}></audio>
      </div>
    );
  }
}

export default Key;