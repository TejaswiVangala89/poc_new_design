import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Box,
  Typography
} from '@mui/material';


const CardWithHeader = ({ subtitle, children, headerButton }) => {
  return (
    <>
      <CardHeader
        title={
          <Box display="flex" alignItems="center" width="100%">
            <Box flex={1} display="flex" alignItems="center">
              <Typography variant="subtitle1" fontWeight={600} align="left" sx={{ textAlign: 'left', width: '100%' }}>{subtitle}</Typography>
            </Box>
            {headerButton && (
              <Box ml={2} display="flex" alignItems="center" justifyContent="flex-end">
                {headerButton}
              </Box>
            )}
          </Box>
        }
        sx={{ pb: 1, pt: 1, pl: 2, pr: 1, borderBottom: '3px solid black !important', borderColor: 'divider', '& .MuiCardHeader-title': { textAlign: 'left', width: '100%' } }}
      />
      <CardContent sx={{ pt: 2, pb: 2 }}>
        {children}
      </CardContent>
    </>
  );
}

export default CardWithHeader;