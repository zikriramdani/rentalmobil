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
    // Create
    case actionType.createUser:
      state = {
        ...state,
        usersList: [...state.usersList, action.payload]
      }
      return state
    // Delete
    case actionType.deleteUser:
      state = {
        ...state,
        usersList: state.usersList.filter(user => user.id !== action.payload)
      };
      return state;
		// Update
		case actionType.updateUser:
			state = {
        ...state,
        usersList: state.usersList.map(user =>
          user.id === action.payload.userId
            ? { ...user, ...action.payload.updatedFields }
            : user
        ),
      };
			return state;
    default:
      return state
  }
};

export default usersReducer;