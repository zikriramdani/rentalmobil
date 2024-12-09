import { combineReducers } from 'redux';

// Import reducers yang diperlukan
import { carsReducer } from './cars/reducer';
import { ordersReducer } from './orders/reducer';

// Combine semua reducers menjadi satu
const rootReducer = combineReducers({
  cars: carsReducer,
  orders: ordersReducer
});

export default rootReducer;
