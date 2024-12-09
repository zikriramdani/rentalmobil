import { initialState } from '../../action/cars/state';
import { actionType } from '../../action/cars/type';

export const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Read
    case actionType.loadCars:
      state = {
        ...state,
        carsList: action.payload
      };
      return state;
    case actionType.loadCarsResetData:
      return initialState;
    // Create
    case actionType.createCar:
      state = {
        ...state,
        carsList: [...state.carsList, action.payload]
      };
      return state;
    // Delete
    case actionType.deleteCar:
      state = {
        ...state,
        carsList: state.carsList.filter((car) => car.id !== action.payload)
      };
      return state;
    // Update
    case actionType.updateCar:
      state = {
        ...state,
        carsList: state.carsList.map((car) =>
          car.id === action.payload.carId ? { ...car, ...action.payload.updatedFields } : car
        )
      };
      return state;
    default:
      return state;
  }
};

export default carsReducer;
