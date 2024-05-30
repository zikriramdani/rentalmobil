import { combineReducers } from "redux";

// Import reducers yang diperlukan
import { usersReducer } from "./users/reducer";

// Combine semua reducers menjadi satu
const rootReducer = combineReducers({
	users: usersReducer
});

export default rootReducer;