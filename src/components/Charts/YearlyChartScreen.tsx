import React from 'react';
import ChartScreen from './ChartScreen';

const YearlyChartScreen = ({ symbol }: { symbol: string }) => {
  // la api no brinda datos cada año por lo que se opta por mostrar los datos cada 8hs
  return <ChartScreen symbol={symbol} interval="8h" title="Precios cada 8hs" />;
};

export default YearlyChartScreen;
