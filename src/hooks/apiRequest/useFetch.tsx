import { useEffect, useState } from 'react';
import Axios from 'axios';
import ApiResponse from '../../interfaces/ApiResponse';

const useFetch = (url:string) => {
    const [data, setData] = useState<ApiResponse>({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null)
    
    const fetchData = () => {
        setIsLoading(true);
        return Axios.get(url, {
            timeout: 5000
        })
            .then((response) => {
                if (response.status === 200)
                    setData(response.data)
                else
                    setError(new Error(`HTTP Error: ${response.status}`))
            })
            .catch((error) => { 
                console.error(error.request._response) 
                setError(error)
            })
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        fetchData();
    }, [url]);
    return { data, isLoading, error } ;
}

export default useFetch;