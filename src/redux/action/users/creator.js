import { actionType } from '../users/type';
import { generateRandomId } from '../../../helpers/utils';


// Data Json
import DataUsers from "../../../assets/data/users.json";

// Mengirimkan aksi saveListUsers dengan data dari DataUsers.
export const getListUsers = () => {
  return (dispatch) => {
    dispatch(saveListUsers(DataUsers));
  };
};

// Mengembalikan aksi dengan tipe loadUsers dan muatan yang berisi data users
export const saveListUsers = (payload) => {
  return {
      type: actionType.loadUsers,
      payload: payload
  };
};

// Create
export const createUser = (users) => ({
  type: actionType.createUser,
  payload: { ...users, id: generateRandomId() }
});

// Delete
export const deleteUser = (userId) => ({
  type: actionType.deleteUser,
  payload: userId,
});