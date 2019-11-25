import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = state => ({
  name: state.name,
  lastName: state.lastName,
  membership: state.membership,
});

export default connect(mapStateToProps, null)(Header);
