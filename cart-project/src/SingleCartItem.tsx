import { AiFillDelete, AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { cartItemType } from './types';

const SingleCartItem = ({
  singleCartData,
}: {
  singleCartData: cartItemType;
}) => {
  return (
    <article className='cart-item'>
      <img src={singleCartData.img} alt={singleCartData.title} />
      <div>
        <h4>{singleCartData.title}</h4>
        <h4 className='item-price'>${singleCartData.price}</h4>
        {/* remove button */}
        <button
          className='remove-btn'
          data-cartid={singleCartData.id}
          data-clicktype='remove'
        >
          <AiFillDelete />
        </button>
      </div>
      <div className='toggle-div'>
        {/* increase amount */}
        <button
          className='amount-btn'
          data-cartid={singleCartData.id}
          data-clicktype='increment'
        >
          <AiOutlineUp />
        </button>
        {/* amount */}
        <p className='amount'>{singleCartData.amount}</p>
        {/* decrease amount */}
        <button
          className='amount-btn'
          data-cartid={singleCartData.id}
          data-clicktype='decrement'
        >
          <AiOutlineDown />
        </button>
      </div>
    </article>
  );
};

export default SingleCartItem;
