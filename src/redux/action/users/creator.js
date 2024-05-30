import { actionType } from '../users/type';

// Data Json
import DataUsers from "../../../assets/data/users.json";

// Read
export const getListUsers = () => {
  return (dispatch) => {
    return dispatch(saveListUsers(DataUsers));
  };
};

// Read
export const saveListUsers = (payload) => {
  return {
      type: actionType.loadUsers,
      payload: payload
  };
};