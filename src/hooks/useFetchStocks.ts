import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Stock } from '../types/Stocks';
const useFetchStocks = (url: string) => {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchStocks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setStocks(response.data.data);
    } catch (err) {
      setError('Error fetching stocks');
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchStocks();
  }, [fetchStocks]);

  return { stocks, loading, error, fetchStocks };
};

export default useFetchStocks;
