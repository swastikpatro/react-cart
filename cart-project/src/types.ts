interface cartItemType {
  id: string;
  title: string;
  price: number;
  img: string;
  amount: number;
}

interface stateType {
  error: boolean;
  loading: boolean;
  cart: cartItemType[];
  totalAmount: number;
  totalCount: number;
}

interface actionType {
  type: string;
  payload?: cartItemType[];
  toggleType?: string;
  iD?: string;
}

interface AppContextType {
  toggleSingleCount: (id: string, toggleType: string) => void;
  cart: cartItemType[];
  clearCart: () => void;
  isLoading: boolean;
  isError: boolean;
  totalAmount: number;
  totalCount: number;
}

type toastFunc = (toastType: string, toastMsg: string) => void;

export type { stateType, cartItemType, actionType, AppContextType, toastFunc };
