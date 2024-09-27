import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Stack, Text, styled } from 'tamagui';
import { fetchData } from '../../api/getStocksCharts';


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
    const fetchDataFromApi = async () => {
      try {
        setLoading(true);
        const formattedData = await fetchData(symbol, '8h');
        setData(formattedData);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
        setError('No se pudieron obtener los datos');
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromApi();
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
      <Title>Precios cada 8hs de {symbol}</Title>
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
