import { useState } from 'react';
import Navbar from './Navbar';
import Cart from './Cart';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Navbar />
      <Cart />
    </main>
  );
}

export default App;
