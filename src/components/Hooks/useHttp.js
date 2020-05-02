import { useEffect, useState } from 'react';

const useHTTP = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return [data, isLoading, error];
};

export default useHTTP;