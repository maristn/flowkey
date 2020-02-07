import {
  connect
} from 'react-redux';
import {
  addKey
} from '../actions/index';
import KeyBoard from '../components/piano/KeyBoard.jsx';

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    onKeyPlay: (key) => {
      dispatch(addKey(key));
    }
  };
}

const KeyboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KeyBoard);

export default KeyboardContainer;