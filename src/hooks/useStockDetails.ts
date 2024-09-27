import { useState, useEffect } from 'react';
import axios from 'axios';
import { StockDetails } from './../types/Stocks';

const useStockDetails = (symbol: string) => {
  const [stockDetails, setStockDetails] = useState < StockDetails>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStockDetails = async () => {
      try {
        const response = await axios.get('https://api.twelvedata.com/stocks', {
          params: {
            symbol: symbol,
            source: 'docs',
            apikey: process.env.TWELVEDATA_API_KEY,
          },
        });
        setStockDetails(response.data.data || {});
      } catch (err) {
        setError('Error al cargar los detalles de la acción');
      } finally {
        setLoading(false);
      }
    };

    fetchStockDetails();
  }, [symbol]);

  return { stockDetails, loading, error };
};

export default useStockDetails;
