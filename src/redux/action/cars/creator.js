import { actionType } from '../cars/type';
import { generateRandomId } from '../../../helpers/utils';
import axios from 'axios';

// Mengirimkan aksi saveListCars dengan data dari DataCars.
export const getListCars = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        'https://67037f39bd7c8c1ccd41a62e.mockapi.io/rent-car/api/v1/cars'
      );
      dispatch(saveListCars(response?.data)); // Mengirim data yang diterima ke saveListCars
    } catch (error) {
      console.error('Error fetching cars list:', error);
    }
  };
};

// Mengembalikan aksi dengan tipe loadCars dan muatan yang berisi data cars
export const saveListCars = (payload) => {
  return {
    type: actionType.loadCars,
    payload: payload
  };
};

// Create
export const createCar = (cars) => ({
  type: actionType.createCar,
  payload: { ...cars, id: generateRandomId() }
});

// Delete
export const deleteCar = (carId) => ({
  type: actionType.deleteCar,
  payload: carId
});

// Update
export const updateCar = (carId, updatedFields) => ({
  type: actionType.updateCar,
  payload: { carId, updatedFields }
});
