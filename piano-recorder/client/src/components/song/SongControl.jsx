import React, { Component } from 'react';
import './SongControl.css';
import gql from "graphql-tag";
import {
  Mutation
} from "react-apollo";

const ADD_SONG = gql`
  mutation addSong($title: String, $keysPlayed: [String]) {
    addSong(title: $title, keysPlayed: $keysPlayed) {
      title
      keysPlayed
    }
  }
`;

class SongControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
    this.updateTitle = this.updateTitle.bind(this);
    this.storeSong = this.storeSong.bind(this);
  }

  updateTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  storeSong(addSong) {
    addSong({
      variables: {
        title: this.state.title,
        keysPlayed: this.props.keysPlayed
      }
    });
  }

  render() {
    return (
      <div className="SongControl">
        <button onClick={() => this.props.onStartSong()}>Start Song</button>
        <Mutation mutation={ADD_SONG}>
          {(addSong, { data }) => (
            <div>
              <input className="song-title-input" type="text" value={this.state.title} onChange={(e) => this.updateTitle(e)} placeholder="Enter the title" />
              <button onClick={() => this.storeSong(addSong)}>Store Song</button>
            </div>
          )}
        </Mutation>

      </div>
    );
  }
}

export default SongControl;
