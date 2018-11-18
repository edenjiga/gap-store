import { connect } from 'react-redux';
import Header from './Header';

import { textChanged } from '../../store/actions/header';

const mapStateToProps = () => {
  return {};
};
export default connect(
  mapStateToProps,
  { changeSearchText: textChanged }
)(Header);
