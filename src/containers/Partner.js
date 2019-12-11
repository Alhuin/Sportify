import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import Partner from '../pages/Partner';

const mapDispatchToProps = dispatch => ({
  generatePass: payload => dispatch(actions.generatePass(payload)),
});

export default connect(null, mapDispatchToProps)(Partner);
