import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import Login from '../pages/Login';

const mapDispatchToProps = dispatch => ({
  setName: payload => dispatch(actions.setName(payload)),
  setLastName: payload => dispatch(actions.setLastName(payload)),
  setMembership: payload => dispatch(actions.setMembership(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
