import React from 'react';
import ChartScreen from './ChartScreen';

const WeeklyChartScreen = ({ symbol }: { symbol: string }) => {
  return <ChartScreen symbol={symbol} interval="1month" title="Precios semanales" />;
};

export default WeeklyChartScreen;
