import Navbar from './Navbar';
import Cart from './Cart';
import { QueryClient } from 'react-query';
import { QueryClientProvider } from 'react-query';

function Main() {
  // if (isError) {
  //   return (
  //     <main>
  //       <Navbar />
  //       <section className='cart'>
  //         <header>
  //           <h2>your bag</h2>
  //         </header>
  //         <p className='error'>🔴 404 : Can't fetch data..</p>
  //       </section>
  //     </main>
  //   );
  // }

  // if (isLoading) {
  //   return (
  //     <main>
  //       <Navbar />
  //       <section className='cart'>
  //         <header>
  //           <h2>your bag</h2>
  //         </header>
  //         <div className='loading-container'>
  //           <div className='loader'></div>
  //         </div>
  //         <div className='loading-container'>
  //           <div className='loader'></div>
  //         </div>
  //       </section>
  //     </main>
  //   );
  // }

  return (
    <main>
      <Navbar />
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
