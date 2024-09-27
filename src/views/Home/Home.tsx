// components/HomeScreen.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { ActivityIndicator, FlatList, ListRenderItem, RefreshControl } from 'react-native';
import { Input, Text, View, YStack, Card, Button } from 'tamagui';
import useFetchStocks from '../../hooks/useFetchStocks';
import { Stock } from '../../types/Stocks';

const ITEMS_PER_PAGE = 20;

export const HomeScreen = ({ navigation }: { navigation: any }) => {
  const { stocks, loading, error, fetchStocks } = useFetchStocks(
    `https://api.twelvedata.com/stocks?source=docs&exchange=NYSE&apikey=${process.env.TWELVEDATA_API_KEY}`,
  );
  const [filteredStocks, setFilteredStocks] = useState<Stock[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [nameSearch, setNameSearch] = useState('');
  const [symbolSearch, setSymbolSearch] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    setFilteredStocks(stocks);
  }, [stocks]);

  useEffect(() => {
    handleSearch();
  }, [nameSearch, symbolSearch, stocks]);

  const handleSearch = () => {
    const filtered = stocks.filter(
      stock =>
        stock?.name.toLowerCase().includes(nameSearch.toLowerCase()) &&
        stock?.symbol.toLowerCase().includes(symbolSearch.toLowerCase()),
    );
    setFilteredStocks(filtered);
    setPage(1);
  };

  const renderStockItem: ListRenderItem<Stock> = ({ item }) => (
    <Card
      borderRadius="$10"
      animation="bouncy"
      hoverStyle={{ scale: 0.925 }}
      pressStyle={{ scale: 0.875 }}
      marginVertical={5}
      bordered
      padding={10}>
      <YStack margin={5}>
        <Button
          onPress={() => navigation.navigate('DetailsStack', { from: 'Home', symbol: item.symbol })}
          backgroundColor="$blue8">
          <Text color="black" fontWeight="bold">
            {item.symbol}
          </Text>
        </Button>
        <Text>
          <Text fontWeight="bold">Name:</Text> {item.name}
        </Text>
        <Text>
          <Text fontWeight="bold">Currency:</Text> {item.currency}
        </Text>
        <Text>
          <Text fontWeight="bold">Type:</Text> {item.type}
        </Text>
      </YStack>
    </Card>
  );

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchStocks();
    setRefreshing(false);
  }, [fetchStocks]);

  const loadMoreStocks = () => {
    if (page * ITEMS_PER_PAGE < filteredStocks.length) {
      setPage(prevPage => prevPage + 1);
    }
  };

  return (
    <View flex={1} padding={10}>
      <YStack gap={10} paddingBottom={10}>
        <Input
          placeholder="Search by stock name..."
          value={nameSearch}
          onChangeText={setNameSearch}
        />
        <Input
          placeholder="Search by stock symbol..."
          value={symbolSearch}
          onChangeText={setSymbolSearch}
        />
      </YStack>

      {loading && !refreshing ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={filteredStocks.slice(0, page * ITEMS_PER_PAGE)}
          renderItem={renderStockItem}
          keyExtractor={item => item.symbol}
          onEndReached={loadMoreStocks}
          onEndReachedThreshold={0.5}
          ListEmptyComponent={
            <Text textAlign="center" marginTop={20}>
              No stocks found
            </Text>
          }
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          style={{ flexGrow: 1 }} // Asegura que ocupe todo el espacio
        />
      )}
    </View>
  );
};

export default HomeScreen;

// export default function Home({ navigation }: StackProps) {
//   return (
//     <View style={styles.root}>
//       <StatusBar barStyle="light-content" />
//       <Text style={styles.title}>Home</Text>
//       <Button
//         title="Go to Details"
//         titleStyle={styles.buttonTitle}
//         style={styles.button}
//         onPress={() => navigation.navigate('DetailsStack', { from: 'Home' })}
//       />
//     </View>
//   );
// }
