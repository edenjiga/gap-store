import { types as at } from '../../actions/cars';
const cars = function(state = [], action) {
  const { data } = action.payload || {};
  switch (action.type) {
    case at.FETCH_CARS: {
      return data;
    }
    default:
      return state;
  }
};

export default cars;
