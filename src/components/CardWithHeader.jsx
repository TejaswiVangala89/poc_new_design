import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Box,
  Typography
} from '@mui/material';

const CardWithHeader = ({ subtitle, children }) => {
  return (
    <>
        <CardHeader
          title={<Typography variant="subtitle1" fontWeight={600} align="left">{subtitle}</Typography>}
          sx={{ pb: 1, pt: 1, pl: 2, pr: 1, borderBottom: '3px solid black !important', borderColor: 'divider', '& .MuiCardHeader-title': { textAlign: 'left' } }}
        />
        <CardContent sx={{ pt: 2, pb: 2 }}>
          {children}
        </CardContent>
      </>
  );
}

export default CardWithHeader;