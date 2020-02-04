import React, { Component } from 'react';
import SongControl from './SongControl';
import SongList from './SongList';
import './Songs.css';

class Songs extends Component {
  render() {
    return (
      <div className="Songs">
        <SongControl keysPlayed={this.props.keysPlayed} onStartSong={this.props.onStartSong}></SongControl>
        <SongList></SongList>
      </div>
    );
  }
}

export default Songs;