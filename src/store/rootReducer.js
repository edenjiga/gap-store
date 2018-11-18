// import formReducer from 'redux-form/lib/reducer';
import { combineReducers } from 'redux';
import cars from './reducers/cars';
import header from './reducers/header';
import selectedCars from './reducers/selectedCars';

export default combineReducers({ cars, header, selectedCars });
