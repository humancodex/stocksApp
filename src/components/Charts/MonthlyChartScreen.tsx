import React from 'react';
import ChartScreen from './ChartScreen';

const MonthlyChartScreen = ({ symbol }: { symbol: string }) => {
  return <ChartScreen symbol={symbol} interval="1month" title="Precios mensuales" />;
};

export default MonthlyChartScreen;
