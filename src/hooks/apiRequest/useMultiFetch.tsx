import { useEffect, useState } from 'react';
import Axios from 'axios';

export function useMultiFetch(urls:string[]) {
    const [data, setResponse] = useState<any[]>([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    const fetchData = () => {
        try {
            const requests = urls.map((url) => Axios.get(url));
        Axios.all(requests).then((responses) => {
            const newData = responses.map((resp) => ({
                data: resp.data
            }));
            
            setResponse(newData)
          })
          .finally(() => {
            setLoading(false);
          })
          .catch((error) => {
            setError(error.response.request._response)
          });
          
        } catch (error) {
            console.error("ERROR MULTIFETCH", error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [urls]);

    return { data, loading, error } ;
}