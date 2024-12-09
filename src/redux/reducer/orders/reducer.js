import { initialState } from '../../action/orders/state';
import { actionType } from '../../action/orders/type';

export const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    // Read
    case actionType.loadOrders:
      state = {
        ...state,
        ordersList: action.payload
      };
      return state;
    case actionType.loadOrdersResetData:
      return initialState;
    // Create
    case actionType.createOrder:
      state = {
        ...state,
        ordersList: [...state.ordersList, action.payload]
      };
      return state;
    // Delete
    case actionType.deleteOrder:
      state = {
        ...state,
        ordersList: state.ordersList.filter((order) => order.id !== action.payload)
      };
      return state;
    // Update
    case actionType.updateOrder:
      state = {
        ...state,
        ordersList: state.ordersList.map((order) =>
          order.id === action.payload.orderId
            ? { ...order, ...action.payload.updatedFields }
            : order
        )
      };
      return state;
    default:
      return state;
  }
};

export default ordersReducer;
