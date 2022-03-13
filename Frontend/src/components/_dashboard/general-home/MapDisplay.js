import React from 'react';
import WorldMap from 'react-svg-worldmap';
import { useTheme, styled } from '@mui/material/styles';
import { Grid, Card, CardHeader, CardContent } from '@mui/material';

const MAP_DATA = [
  { country: 'cn', value: 13 }, // china
  { country: 'in', value: 4 }, // india
  { country: 'us', value: 6 }, // united states
  { country: 'id', value: 4 }, // indonesia
  { country: 'pk', value: 6 }, // pakistan
  { country: 'br', value: 10 }, // brazil
  { country: 'ng', value: 14 }, // nigeria
  { country: 'bd', value: 2 }, // bangladesh
  { country: 'ru', value: 6 }, // russia
  { country: 'mx', value: 12 } // mexico
];

export default function MapDisplay() {
  const theme = useTheme();

  return (
    <WorldMap
      color={theme.palette.primary.main}
      tooltipBgColor={theme.palette.primary.darker}
      valueSuffix="companies"
      size="responsive"
      data={MAP_DATA}
    />
  );
}
