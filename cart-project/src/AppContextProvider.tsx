import { createContext, useContext, useReducer, useEffect } from 'react';
import appReducer from './appReducer';
import useFetch from './useFetch';
import { AppContextType } from './types';
import useToast from './useToast';

const AppContext = createContext<AppContextType>(null!);

function useAppContext() {
  return useContext(AppContext);
}

const initialState = {
  error: false,
  loading: true,
  cart: [],
  totalAmount: 0,
  totalCount: 0,
};

const AppContextProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const showToastGivenTypeAndMsg = useToast();
  useFetch(dispatch, showToastGivenTypeAndMsg);

  useEffect(() => {
    dispatch({ type: 'GET_TOTAL' });
  }, [state.cart]);

  const toggleSingleCount = (itemID: string, toggleType: string): void => {
    dispatch({ type: 'TOGGLE_COUNT', iD: itemID, toggleType });
    // @ts-ignore
    const titleOfItemIncremented = state.cart.find(
      (singleItem) => singleItem.id === itemID
    ).title;
    if (toggleType === 'increment') {
      showToastGivenTypeAndMsg('success', `+1 ${titleOfItemIncremented}`);
    }
    if (toggleType === 'decrement') {
      showToastGivenTypeAndMsg('remove-single', ` ${titleOfItemIncremented}`);
    }
    if (toggleType === 'remove') {
      showToastGivenTypeAndMsg('remove-all', ` ${titleOfItemIncremented}`);
    }
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    showToastGivenTypeAndMsg('remove-all', ' items');
  };

  return (
    <AppContext.Provider
      value={{
        clearCart,
        toggleSingleCount,
        cart: state.cart,
        isLoading: state.loading,
        isError: state.error,
        totalAmount: state.totalAmount,
        totalCount: state.totalCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider, useAppContext };
