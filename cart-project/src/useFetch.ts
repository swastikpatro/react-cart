import { Dispatch, useEffect } from 'react';
import { actionType, cartItemType, toastFunc } from './types';
const URL = 'https://course-api.com/react-useReducer-cart-project';

type dispatchType = Dispatch<actionType>;

const fetchData = async (
  url: string,
  myDispatch: dispatchType,
  showToast: toastFunc
) => {
  myDispatch({ type: 'LOADING' });
  showToast('loading', 'Fetching Data');
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Can't Fetch");
    }
    const data = await res.json();
    const updatedCart: cartItemType[] = data.map((item: any) => {
      return { ...item, price: Number(item.price) };
    });
    myDispatch({ type: 'DISPLAY_CART', payload: updatedCart });
    showToast('success', 'Fetching Data successful');
  } catch (error) {
    myDispatch({ type: 'LOADING' });
    showToast('error', 'Oops, unable to fetch, refresh again');
  }
};

function useFetch(myDispatch: dispatchType, showToast: toastFunc): void {
  useEffect(() => {
    fetchData(URL, myDispatch, showToast);
  }, []);
}

export default useFetch;
