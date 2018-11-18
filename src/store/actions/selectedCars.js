export const types = {
  CHANGE_SELECTED_CARS: 'CHANGE_SELECTED_CARS'
};

export const changeSelectedCars = (cars = []) => ({
  type: types.CHANGE_SELECTED_CARS,
  payload: {
    data: cars
  }
});
