import { connect } from 'react-redux';
import Header from './Header';

import headerSelector from '../../store/reducers/header/selectors';
import { textChanged } from '../../store/actions/header';

const mapStateToProps = state => {
  return {};
};
export default connect(
  mapStateToProps,
  { changeSearchText: textChanged }
)(Header);
