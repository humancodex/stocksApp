import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Stack, Text, styled } from 'tamagui';
import axios from 'axios';

const screenWidth = Dimensions.get('window').width;

type DataItem = {
  datetime: string;
  close: number;
};

const DailyChartScreen = ({ symbol }: { symbol: string }) => {
  const [data, setData] = useState<{ x: number; y: number }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://api.twelvedata.com/time_series', {
          params: {
            symbol,
            interval: '1day',
            start_date: '2024-09-01',
            end_date: '2024-09-30',
            apikey: process.env.TWELVEDATA_API_KEY,
          },
        });

        if (response.data && response.data.values) {
            const formattedData = response.data.values?.map((item: DataItem) => ({
            x: new Date(item.datetime).getTime(),
            y: Number(item.close),
            }));
          setData(formattedData);
        } else {
          throw new Error('Datos de respuesta inválidos o vacíos');
        }
      } catch (error) {
        console.error('Error al obtener los datos:', error);
        setError('No se pudieron obtener los datos');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [symbol]);



  if (loading) {
    return (
      <Container>
        <Title>Cargando...</Title>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Title>{error}</Title>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Precios diarios de {symbol}</Title>
      <LineChart
        data={{
          labels: data.length > 0 ? data.map(item => new Date(item.x).toLocaleDateString()) : [],
          datasets: [{ data: data.length > 0 ? data.map(item => item.y) : [] }],
        }}
        width={screenWidth}
        height={220}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          strokeWidth: 2,
        }}
        bezier
      />
    </Container>
  );
};

const Container = styled(Stack, {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

const Title = styled(Text, {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 10,
});

export default DailyChartScreen;
