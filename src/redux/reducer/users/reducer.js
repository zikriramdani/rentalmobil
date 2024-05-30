import { initialState } from '../../action/users/state';
import { actionType } from '../../action/users/type';

export const usersReducer = ( state = initialState, action ) => {
  switch(action.type) {
    // Read
    case actionType.loadUsers:
      state = {
        ...state,
        usersList: action.payload
      }
      return state
    case actionType.loadUsersResetData:
      return initialState
    default:
      return state
  };
};

export default usersReducer;