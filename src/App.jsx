import React, { useState } from 'react';
import './App.css';
import AccountInfo from './components/AccountInfo';
import AddressInfo from './components/AddressInfo';
import ContactBillingInfo from './components/ContactBillingInfo';
import DistributionReference from "./components/DistributionReference"
import { Stack, Box, Card } from '@mui/material';

function App() {
  const [isEditmode, setIsEditmode] = useState(false);

  return (
    <>
      <button onClick={() => setIsEditmode((prev) => !prev)} style={{ marginBottom: 16 }}>
        {isEditmode ? 'Readonly' : 'Edit'}
      </button>
      <Stack spacing={2} direction={"column"}>
        <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} alignItems="stretch" sx={{ width: '100%' }}>
          <Card variant="outlined" sx={{ boxShadow: 1, flex: 0.35, display: 'flex', flexDirection: 'column' }}>
            <AccountInfo isEditmode={isEditmode} />
          </Card>
          <Card variant="outlined" sx={{ boxShadow: 1, flex: 0.65, display: 'flex', flexDirection: 'column' }}>
            <ContactBillingInfo isEditmode={isEditmode} />
          </Card>
        </Stack>
        <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} alignItems="stretch" sx={{ width: '100%' }}>
          <Card variant="outlined" sx={{ boxShadow: 1, flex: 0.35, display: 'flex', flexDirection: 'column' }}>
            <AddressInfo isEditmode={isEditmode} />
          </Card>
          <Card variant="outlined" sx={{ boxShadow: 1, flex: 0.65, display: 'flex', flexDirection: 'column' }}>
            <DistributionReference isEditmode={isEditmode} />
          </Card>
        </Stack>
      </Stack>
    </>
  );
}

export default App;
