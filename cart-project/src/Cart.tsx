import React from 'react';
import { useAppContext } from './AppContextProvider';
import SingleCartItem from './SingleCartItem';
import { cartItemType } from './types';
import { Toaster } from 'react-hot-toast';

const Cart = () => {
  const {
    cart,
    toggleSingleCount,
    clearCart,
    isLoading,
    isError,
    totalAmount,
  } = useAppContext();

  function handleContainerClick(e: React.MouseEvent<HTMLDivElement>) {
    const targetElement = (e.target as HTMLElement).closest(
      'button'
    ) as HTMLButtonElement;
    if (!targetElement) {
      return;
    }
    const cartid = targetElement.dataset.cartid!;
    const clicktype = targetElement.dataset.clicktype!;

    toggleSingleCount(cartid, clicktype);
  }

  if (isLoading) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
        </header>

        <div className='loading-container'>
          <div className='loader'></div>
        </div>
        <div className='loading-container'>
          <div className='loader'></div>
        </div>
        <div className='loading-container'>
          <div className='loader'></div>
        </div>

        <Toaster
          position='top-center'
          reverseOrder={false}
          gutter={8}
          containerClassName=''
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: '',
            duration: Infinity,
            style: {
              background: '#000',
              color: '#fff',
              minWidth: '7rem',
              maxWidth: 'fit-content',
              paddingTop: '.75rem',
              paddingRight: '1.5rem',
              borderRadius: '.25rem',
            },
          }}
        />
      </section>
    );
  }
  if (isError) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
        </header>
        <p className='error'>404 : Can't fetch data...</p>
      </section>
    );
  }

  // if (cart.length === 0) {
  //   return (
  //     <section className='cart'>
  //       {/* cart header */}
  //       <header>
  //         <h2>your bag</h2>
  //       </header>
  //       <p className='empty-cart'>your cart is empty 0️⃣</p>
  //       <Toaster
  //         position='top-center'
  //         reverseOrder={false}
  //         gutter={8}
  //         containerClassName=''
  //         containerStyle={{}}
  //         toastOptions={{
  //           // Define default options
  //           className: '',
  //           duration: 1000,
  //           style: {
  //             background: '#363636',
  //             color: '#fff',
  //             minWidth: '7rem',
  //             maxWidth: 'fit-content',
  //             paddingTop: '.75rem',
  //             paddingRight: '1.5rem',
  //             borderRadius: '.25rem',
  //           },
  //         }}
  //       />
  //     </section>
  //   );
  // }

  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}

      {cart.length === 0 ? (
        <p className='empty-cart'>your cart is empty 0️⃣</p>
      ) : (
        <>
          <div onClick={handleContainerClick}>
            {cart.map((singleItem: cartItemType) => {
              return (
                <SingleCartItem
                  key={singleItem.id}
                  singleCartData={singleItem}
                />
              );
            })}
          </div>
          <footer>
            <hr />
            <div className='cart-total'>
              <h4>
                total <span>${totalAmount}</span>
              </h4>
            </div>
            <button className='btn clear-btn' onClick={clearCart}>
              clear cart
            </button>
          </footer>
        </>
      )}

      <Toaster
        position='top-center'
        reverseOrder={false}
        gutter={8}
        containerClassName=''
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 1000,
          style: {
            background: '#363636',
            color: '#fff',
            minWidth: '7rem',
            maxWidth: 'fit-content',
            paddingTop: '.75rem',
            paddingRight: '1.5rem',
            borderRadius: '.25rem',
          },
        }}
      />
    </section>
  );
};

export default Cart;
