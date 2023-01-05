import { actionType, stateType } from './types';

function appReducer(state: stateType, action: actionType): stateType {
  if (action.type === 'DISPLAY_CART') {
    return {
      ...state,
      cart: action.payload!,
      loading: false,
      error: false,
    };
  }
  if (action.type === 'LOADING') {
    return {
      ...state,
      cart: [],
      loading: true,
      error: false,
    };
  }
  if (action.type === 'ERROR') {
    return {
      ...state,
      cart: [],
      loading: false,
      error: true,
    };
  }
  if (action.type === 'TOGGLE_COUNT') {
    if (action.toggleType === 'increment') {
      return {
        ...state,
        cart: state.cart.map((singleItem) => {
          if (singleItem.id === action.iD) {
            return { ...singleItem, amount: singleItem.amount + 1 };
          } else {
            return singleItem;
          }
        }),
      };
    }
    if (action.toggleType === 'decrement') {
      return {
        ...state,
        cart: state.cart
          .map((singleItem) => {
            if (singleItem.id === action.iD) {
              return {
                ...singleItem,
                amount: singleItem.amount <= 0 ? 0 : singleItem.amount - 1,
              };
            } else {
              return singleItem;
            }
          })
          .filter((singleItem) => singleItem.amount !== 0),
      };
    }
    if (action.toggleType === 'remove') {
      return {
        ...state,
        cart: state.cart
          .map((singleItem) => {
            if (singleItem.id === action.iD) {
              return { ...singleItem, amount: 0 };
            } else {
              return singleItem;
            }
          })
          .filter((singleItem) => singleItem.id !== action.iD),
      };
    }
  }

  if (action.type === 'CLEAR_CART') {
    return {
      ...state,
      cart: [],
      totalAmount: 0,
      totalCount: 0,
    };
  }
  if (action.type === 'GET_TOTAL') {
    let { finalAmount, finalCount } = state.cart.reduce(
      (acc, curr) => {
        // console.log({ acc, curr });
        acc.finalAmount += curr.amount * curr.price;
        acc.finalCount += curr.amount;
        return acc;
      },
      { finalAmount: 0, finalCount: 0 }
    );

    finalAmount = Number(finalAmount.toFixed(2));
    // console.log(tempTotalCountAndTotalAmount);

    return {
      ...state,
      totalAmount: finalAmount,
      totalCount: finalCount,
    };
  } else {
    throw new Error('Cant fetch data');
  }
}

export default appReducer;
