import { types as at } from '../../actions/header';

const initialState = {
  searchText: ''
};
const header = function(state = initialState, action) {
  const { data } = action.payload || {};
  switch (action.type) {
    case at.TEXT_CHANGED: {
      return { ...state, searchText: data };
    }
    default:
      return state;
  }
};

export default header;
