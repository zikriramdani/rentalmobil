import { actionType } from '../orders/type';
import { generateRandomId } from '../../../helpers/utils';
import axios from 'axios';

// Mengirimkan aksi saveListOders dengan data dari DataCrders.
export const getListOrders = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        'https://67037f39bd7c8c1ccd41a62e.mockapi.io/rent-car/api/v1/orders'
      );
      dispatch(saveListOrders(response?.data)); // Mengirim data yang diterima ke saveListOrders
    } catch (error) {
      console.error('Error fetching Crders list:', error);
    }
  };
};

// Mengembalikan aksi dengan tipe loadCrders dan muatan yang berisi data Crders
export const saveListOrders = (payload) => {
  return {
    type: actionType.loadOrders,
    payload: payload
  };
};

// Create
export const createOrder = (orders) => ({
  type: actionType.createOrder,
  payload: { ...orders, id: generateRandomId() }
});

// Delete
export const deleteOrder = (orderId) => ({
  type: actionType.deleteOrder,
  payload: orderId
});

// Update
export const updateOrder = (orderId, updatedFields) => ({
  type: actionType.updateOrder,
  payload: { orderId, updatedFields }
});
