import { useQuery } from 'react-query';
const URL = 'https://course-api.com/react-useReducer-cart-project';

const fetchData = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Can't Fetch");
  }
  const data = await res.json();
  return data;
};

function useFetch() {
  const { data, isLoading, isError } = useQuery(['cart-data'], () => {
    return fetchData(URL);
  });

  return { data, isLoading, isError };
}

export default useFetch;
