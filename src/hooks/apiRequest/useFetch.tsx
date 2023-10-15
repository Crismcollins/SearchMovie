import { useEffect, useState } from 'react';
import Axios, { AxiosResponse, AxiosError } from 'axios';

type UseApiRequest<T> = {
  data: T | null;
  isLoading: boolean;
  error: string | null;
};

function useFetch<T>(url: string): UseApiRequest<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response: AxiosResponse = await Axios.get(url);

        if (response.status === 200) {
          setData(response.data as T);
          setError(null);
        } else {
          setError(`HTTP Error: ${response.status}`);
        }
      } catch (err) {
        const axiosError = err as AxiosError;
        setError(`API Error: ${axiosError.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;
