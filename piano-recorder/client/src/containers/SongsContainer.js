import {
  connect
} from 'react-redux';
import {
  emptyKey
} from '../actions/index';
import Songs from '../components/song/Songs';

const mapStateToProps = (state) => {
  return {
    keysPlayed: state.keysPlayed
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onStartSong: () => {
      dispatch(emptyKey());
    }
  };
}

const SongsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Songs);

export default SongsContainer;