import { connect } from 'react-redux';
import Comparer from './Comparer';
import { findIndex } from 'lodash';

import carsSelector from '../../store/reducers/cars/selectors';
import selectedCarsSelector from '../../store/reducers/selectedCars/selectors';

const mapStateToProps = state => {
  const cars = carsSelector(state).getAll();
  const selectedCars = selectedCarsSelector(state).getState();

  const items = selectedCars.carsId.map(id => {
    const index = findIndex(cars, ['id', id]);
    return cars[index];
  });

  return { items };
};
export default connect(
  mapStateToProps,
  {}
)(Comparer);
