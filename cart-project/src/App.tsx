import { useReducer, useState } from 'react';
import Navbar from './Navbar';
import Cart from './Cart';
import { QueryClient } from 'react-query';
import { QueryClientProvider, useQuery } from 'react-query';

const URL = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
  cart: [],
};

const fetchData = async (url: string) => {
  const res = await fetch(url);
  console.log(res);
  if (!res.ok) {
    throw new Error("Can't Fetch");
  }
  const data = await res.json();
  return data;
};

function Main() {
  const { data, isLoading, isError } = useQuery(['cart-data'], () => {
    return fetchData(URL);
  });

  if (isError) {
    return (
      <main>
        <Navbar />
        <section className='cart'>
          <header>
            <h2>your bag</h2>
          </header>
          <p className='error'>🔴 404 : Can't fetch data..</p>
        </section>
      </main>
    );
  }

  if (isLoading) {
    return (
      <main>
        <Navbar />
        <section className='cart'>
          <header>
            <h2>your bag</h2>
          </header>
          <div className='loading-container'>
            <div className='loader'></div>
          </div>
          <div className='loading-container'>
            <div className='loader'></div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Cart />
    </main>
  );
}

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
}

export default App;
