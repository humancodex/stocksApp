import axios from 'axios';
import { TWELVEDATA_API_KEY } from '@env';

export type DataItem = {
  datetime: string;
  close: string;
};

export const fetchData = async (
  symbol: string,
  interval: string ,
  start_date: string = '2024-09-01',
  end_date: string = '2024-09-30',
): Promise<{ x: number; y: number }[]> => {
  try {
    const response = await axios.get('https://api.twelvedata.com/time_series', {
      params: {
        symbol,
        interval,
        start_date,
        end_date,
        apikey: TWELVEDATA_API_KEY,
      },
    });

    if (response.data && response.data.values) {
      return response.data.values.map((item: DataItem) => ({
        x: new Date(item.datetime).getTime(),
        y: Number(item.close),
      }));
    } else {
      throw new Error('Invalid or empty response data');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
