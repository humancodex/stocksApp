import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Stack, styled, YStack, Card } from 'tamagui';
import DailyChartScreen from './Charts/DailyChartScreen';
import WeeklyChartScreen from './Charts/WeeklyChartScreen';
import MonthlyChartScreen from './Charts/MonthlyChartScreen';
import YearlyChartScreen from './Charts/YearlyChartScreen';

const Tab = createMaterialTopTabNavigator();

const StockDetailTabs = ({ symbol }: { symbol: string }) => {
  return (

      <StyledCard>
        <Tab.Navigator
          initialRouteName="Diario"
          screenOptions={{
            tabBarStyle: {
              backgroundColor: '#ffffff',
            },
            tabBarIndicatorStyle: {
              backgroundColor: '#000000',
            },
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: 'bold',
            },
          }}>
          <Tab.Screen name="Diario">{() => <DailyChartScreen symbol={symbol} />}</Tab.Screen>
          <Tab.Screen name="Semanal">{() => <WeeklyChartScreen symbol={symbol} />}</Tab.Screen>
          <Tab.Screen name="Mensual">{() => <MonthlyChartScreen symbol={symbol} />}</Tab.Screen>
          <Tab.Screen name="Anual">{() => <YearlyChartScreen symbol={symbol} />}</Tab.Screen>
        </Tab.Navigator>
      </StyledCard>

  );
};



const StyledCard = styled(Card, {
  flex: 1,
  width: '100%',

  backgroundColor: '#ffffff',
  borderRadius: 8,
  elevation: 4,
});

export default StockDetailTabs;
