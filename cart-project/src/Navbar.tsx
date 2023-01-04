import { BsCart } from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav>
      <div className='nav-center'>
        <h2>UseReducer</h2>
        <div className='span-icon'>
          <BsCart />
          <span className='cart-count'>0</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
