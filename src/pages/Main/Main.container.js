import { connect } from 'react-redux';
import Main from './Main';

import carsSelector from '../../store/reducers/cars/selectors';
import headerSelector from '../../store/reducers/header/selectors';
import selectedCarsSelector from '../../store/reducers/selectedCars/selectors';
import { changeSelectedCars } from '../../store/actions/selectedCars';

const mapStateToProps = state => {
  const cars = carsSelector(state).getAll();
  const searchText = headerSelector(state).getSearchText();
  const selectedCars = selectedCarsSelector(state).getState();

  return {
    cars,
    searchText,
    selectedCars
  };
};
export default connect(
  mapStateToProps,
  { changeSelectedCars }
)(Main);
