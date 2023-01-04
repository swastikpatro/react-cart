import { useState } from 'react';
import Navbar from './Navbar';
import Cart from './Cart';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Navbar />
      <Cart />
    </div>
  );
}

export default App;
