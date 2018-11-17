import { connect } from 'react-redux';
import Main from './Main';

import carsSelector from '../../store/reducers/cars/selectors';
import headerSelector from '../../store/reducers/header/selectors';

const mapStateToProps = state => {
  const cars = carsSelector(state).getAll();
  const searchText = headerSelector(state).getSearchText();
  console.log(searchText);

  return {
    cars,
    searchText
  };
};
export default connect(
  mapStateToProps,
  {}
)(Main);
