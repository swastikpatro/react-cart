interface cartItemType {
  id: string;
  title: string;
  price: number;
  img: string;
  amount: number;
}

interface stateType {
  cart: cartItemType[];
  totalAmount: number;
  totalCount: number;
}

export type { stateType, cartItemType };
