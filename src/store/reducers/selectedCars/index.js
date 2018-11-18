import { types as at } from '../../actions/selectedCars';

const initialState = {
  carsId: [],
  selected: 0
};
const selectedCars = function(state = initialState, action) {
  const { data } = action.payload || {};
  switch (action.type) {
    case at.CHANGE_SELECTED_CARS: {
      return { ...state, carsId: data, selected: data.length };
    }
    default:
      return state;
  }
};

export default selectedCars;
