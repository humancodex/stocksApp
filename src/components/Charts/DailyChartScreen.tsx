import React from 'react';
import ChartScreen from './ChartScreen';

const DailyChartScreen = ({ symbol }: { symbol: string }) => {
  return <ChartScreen symbol={symbol} interval="1day" title="Precios diarios" />;
};

export default DailyChartScreen;
