import React from 'react';

const Cart = () => {
  return (
    <section className='cart-section'>
      <h2>your bag</h2>
      <div className='cart-container'>
        <article>cart items</article>
        <article>cart items</article>
        <article>cart items</article>
        <article>cart items</article>
      </div>

      <button className='btn red-btn'>Clear Cart</button>
    </section>
  );
};

export default Cart;
