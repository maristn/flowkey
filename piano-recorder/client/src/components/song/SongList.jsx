import React, { Component } from 'react';
import './SongList.css';
import gql from "graphql-tag";
import {
  Query
} from "react-apollo";

const GET_SONGS = gql`
  query {
    songs {
      id
      title
      keysPlayed
    }
  }
`;

class SongList extends Component {
  constructor(props) {
    super(props);
    this.playSong = this.playSong.bind(this);
  }

  playSong(e) {
    let keys = e.target.parentElement.getElementsByClassName('songKeys')[0].value.split(',');
    let i = 0;
    let audio = document.getElementById(keys[i]);
    audio.play();
    audio.onended = () => {
      i++;
      if (i < keys.length) {
        audio = document.getElementById(keys[i]);
        audio.play();
      }
    };
  }

  render() {
    return (
      <div className="SongList">
        <h3>My Songs</h3>
        <Query query={GET_SONGS}>
          {({ loading, error, data }) => {
            if (loading) return (
              <div>Loading</div>
            );
            if (error) return `Error!: ${error}`;

            if (typeof (data.songs) !== 'undefined') {
              return (data.songs.map((song, index) => {
                return (<div key={index} className="songItem">
                  <div className="songTitle">Title: {song.title}</div>
                  <input type="hidden" className="songId" value={song.id} />
                  <input type="hidden" className="songKeys" value={song.keysPlayed} />
                  <button onClick={(e) => this.playSong(e)}>Replay</button>
                </div>)
              }));
            }
          }}
        </Query>
      </div>
    );
  }
}

export default SongList;