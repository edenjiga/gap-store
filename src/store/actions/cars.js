export const types = {
  FETCH_CARS: 'FETCH_CARS'
};

export const fetchCars = (cars = []) => ({
  type: types.FETCH_CARS,
  payload: {
    data: cars
  }
});
