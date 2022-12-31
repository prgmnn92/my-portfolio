import { createContext, useReducer } from "react";

export const StoreContext = createContext();

export const ACTION_TYPES = {
  SET_IS_OVER_BUTTON: "SET_IS_OVER_BUTTON",
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_IS_OVER_BUTTON: {
      return { ...state, isOverButton: action.payload };
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const StoreProvider = ({ children }) => {
  const initialState = {
    isOverButton: false,
  };

  const [state, dispatch] = useReducer(storeReducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
