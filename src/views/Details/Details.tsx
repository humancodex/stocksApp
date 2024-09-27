import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { View, Text, styled } from 'tamagui';
import axios from 'axios';
import StockDetailTabs from '@components/StockDetailTabs';


const Container = styled(View, {
  flex: 1,
  padding: 20,
  backgroundColor: '#f5f5f5',
  justifyContent: 'center',
});

const ContainerLoader = styled(View, {
  flex: 1,
  padding: 20,
  backgroundColor: '#f5f5f5',
  justifyContent: 'center',
  alignItems: 'center',
});

const Title = styled(Text, {
  fontSize: 28,
  fontWeight: 'bold',
  marginBottom: 15,
  color: '#333',
});

const StockDetailScreen = ({ route }: any) => {
  const { symbol } = route.params;


  const [stockDetails, setStockDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

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



  if (loading) return <ContainerLoader><ActivityIndicator size="large" color="#0000ff" /></ContainerLoader>
  if (error) return <Text>{error}</Text>;

  return (
    <Container>
      <Title>{stockDetails[0].name}</Title>
      <Text>Símbolo: {stockDetails[0].symbol}</Text>
      <Text>Moneda: {stockDetails[0].currency}</Text>
      <Text>Tipo: {stockDetails[0].type}</Text>

      <StockDetailTabs symbol={symbol} />
    </Container>
  );
};


export default StockDetailScreen;
