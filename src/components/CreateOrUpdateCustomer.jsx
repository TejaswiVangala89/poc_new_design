import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import customersData from '../data/customers.json';
import { Snackbar, Alert, IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AccountInfo from './cards/AccountInfo';
import AddressInfo from './cards/AddressInfo';
import ContactBillingInfo from './cards/ContactBillingInfo';
import DistributionReference from './cards/DistributionReference';
import { Stack, Box, Card } from '@mui/material';
import { CancelButton, StyledButton } from './styled';


const CreateOrUpdateCustomer = ({id}) =>  {
  const navigate = useNavigate();
  const [isEditmode, setIsEditmode] = useState(id ? false : true);
  const [customer, setCustomer] = useState({
    id: '',
    customerName: '',
    shortName: '',
    statementName: '',
    customerContactName: '',
    customerContactEmail: '',
    territoryId: '',
    escalationContactName: '',
    escalationContactEmail: '',
    accountPayableName: '',
    accountPayableEmail: '',
    classID: '',
    customerParentId: '',
    subclassCode: '',
    paymentTerms: '',
    status: 'Active',
    all_phones: [],
    all_emails: [],
    addressDetails: [
      {
        attention: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        postalCode: '',
        state: '',
        country: ''
      }
    ]
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Populate customer if id is present
  useEffect(() => {
    if (id) {
      const found = customersData.find(c => String(c.id) === String(id));
      if (found) {
        setCustomer({
          ...found,
          addressDetails: found.addressDetails || [{
            attention: '', addressLine1: '', addressLine2: '', city: '', postalCode: '', state: '', country: ''
          }],
          all_phones: found.all_phones || [],
          all_emails: found.all_emails || []
        });
      }
    }
  }, [id]);


  // Handlers for updating main state from each card
  const handleAccountInfoChange = (changes) => {
    setCustomer(prev => ({ ...prev, ...changes }));
  };
  const handleContactsChange = ({ emails, phones, ...rest }) => {
    setCustomer(prev => ({ ...prev, all_emails: emails, all_phones: phones, ...rest }));
  };
  const handleAddressChange = (addressDetails) => {
    setCustomer(prev => ({ ...prev, addressDetails }));
  };
  const handleDistributionChange = (changes) => {
    setCustomer(prev => ({ ...prev, ...changes }));
  };

  const onAddOrUpdate = () => {
    // Logic to add or update customer
    // Here you would save to backend or update state
    setOpenSnackbar(true);
    setTimeout(() => {
      setOpenSnackbar(false);
      navigate('/');
    }, 3000);
    console.log('Customer data to be saved:', customer);
  }

  return (
    <>
      <Stack spacing={2} direction={"column"}>
        <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} alignItems="stretch" sx={{ width: '100%' }}>
          <Card variant="outlined" sx={{ boxShadow: 1, flex: 0.35, display: 'flex', flexDirection: 'column' }}>
            <AccountInfo
              isEditmode={isEditmode}
              data={customer}
              onChange={handleAccountInfoChange}
            />
          </Card>
          <Card variant="outlined" sx={{ boxShadow: 1, flex: 0.65, display: 'flex', flexDirection: 'column' }}>
            <ContactBillingInfo
              isEditmode={isEditmode}
              onContactsChange={handleContactsChange}
              allEmails={customer.all_emails}
              allPhones={customer.all_phones}
              data={customer}
            />
          </Card>
        </Stack>
        <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} alignItems="stretch" sx={{ width: '100%' }}>
          <Card variant="outlined" sx={{ boxShadow: 1, flex: 0.35, display: 'flex', flexDirection: 'column' }}>
            <AddressInfo
              isEditmode={isEditmode}
              addressDetails={customer.addressDetails}
              onChange={handleAddressChange}
            />
          </Card>
          <Card variant="outlined" sx={{ boxShadow: 1, flex: 0.65, display: 'flex', flexDirection: 'column' }}>
            <DistributionReference
              isEditmode={isEditmode}
              data={customer}
              onChange={handleDistributionChange}
            />
          </Card>
        </Stack>
      </Stack>
      <Box display="flex" justifyContent="flex-end" gap={2} mt={2}>
        <CancelButton size='small' onClick={() => navigate('/')}> 
            Cancel
        </CancelButton>
        {id ? (
          <StyledButton size='small' onClick={() => {
            if (!isEditmode) setIsEditmode(true);
            else onAddOrUpdate();
          }}>
            {isEditmode ? 'Update' : 'Edit'}
          </StyledButton>
        ) : (
          <StyledButton size='small' onClick={onAddOrUpdate}>
            Add
          </StyledButton>
        )}
      </Box>
      <Snackbar
        open={openSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
          Customer {id ? 'updated' : 'added'} successfully!
        </Alert>
      </Snackbar>
    </>
  );
}

export default CreateOrUpdateCustomer;
