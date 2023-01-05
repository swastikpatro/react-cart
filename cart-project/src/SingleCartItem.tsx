import { AiFillDelete, AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

const SingleCartItem = () => {
  return (
    <article className='cart-item'>
      <img src='' alt='' />
      <div>
        <h4>Some Title</h4>
        <h4 className='item-price'>$399.90</h4>
        {/* remove button */}
        <button
          className='remove-btn'
          onClick={() => console.log('remove item')}
        >
          <AiFillDelete />
        </button>
      </div>
      <div className='toggle-div'>
        {/* increase amount */}
        <button className='amount-btn' onClick={() => console.log('increase')}>
          <AiOutlineUp />
        </button>
        {/* amount */}
        <p className='amount'>2</p>
        {/* decrease amount */}
        <button className='amount-btn' onClick={() => console.log('decrease')}>
          <AiOutlineDown />
        </button>
      </div>
    </article>
  );
};

export default SingleCartItem;
