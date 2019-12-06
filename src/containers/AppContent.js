import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import AppContent from '../pages/AppContent';

const mapStateToProps = state => ({
  name: state.name,
  lastName: state.lastName,
  favorites: state.favorites,
  membership: state.membership,
  firstSearch: state.firstSearch,
});

const mapDispatchToProps = dispatch => ({
  addToFavorites: payload => dispatch(actions.addToFavorites(payload)),
  removeFromFavorites: payload => dispatch(actions.removeFromFavorites(payload)),
  setFirstSearch: payload => dispatch(actions.setFirstSearch(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContent);
