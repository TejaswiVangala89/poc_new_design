import React from 'react';
import {
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box
} from '@mui/material';
import { LabelCell, InputCell, SelectCell, LabelValue } from '../styled';
import CardWithHeader from "./CardWithHeader";


export default function AddressInfo({ isEditmode = false, addressDetails = [{}], onChange }) {
  const address = addressDetails[0] || {};
  const handleFieldChange = (field, value) => {
    if (onChange) {
      const updated = { ...address, [field]: value };
      onChange([updated]);
    }
  };

  return (
    <CardWithHeader subtitle="Address Info" sx={{ height: '100%' }}>
      <Box component="form" autoComplete="off" sx={{ px: 1 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: '140px 1fr', columnGap: 2 }}>
          <LabelCell>Address ID:</LabelCell>
          {isEditmode ? (
            <InputCell size="small" value={address.addressId || ''} onChange={e => handleFieldChange('addressId', e.target.value)} variant="outlined" margin="dense" />
          ) : <LabelValue>{address.addressId || ''}</LabelValue>}
          <LabelCell>Contact:</LabelCell>
          {isEditmode ? (
            <InputCell size="small" value={address.contact || ''} onChange={e => handleFieldChange('contact', e.target.value)} variant="outlined" margin="dense" />
          ) : <LabelValue>{address.contact || ''}</LabelValue>}
          <LabelCell>Address Line 1:</LabelCell>
          {isEditmode ? (
            <InputCell size="small" value={address.addressLine1 || ''} onChange={e => handleFieldChange('addressLine1', e.target.value)} variant="outlined" margin="dense" />
          ) : <LabelValue>{address.addressLine1 || ''}</LabelValue>}
          <LabelCell>Address Line 2:</LabelCell>
          {isEditmode ? (
            <InputCell size="small" value={address.addressLine2 || ''} onChange={e => handleFieldChange('addressLine2', e.target.value)} variant="outlined" margin="dense" />
          ) : <LabelValue>{address.addressLine2 || ''}</LabelValue>}
          </Box>


          {/* City and Zip: each with label and input/value, side by side in one row */}
          <Box sx={{ display: 'grid', gridTemplateColumns: '10% 30% 20% 40%', columnGap: 2, alignItems: 'center' }}>
            <LabelCell>City:</LabelCell>
            {isEditmode ? (
              <InputCell size="small" width={"80%"} value={address.city || ''} onChange={e => handleFieldChange('city', e.target.value)} variant="outlined" margin="dense" />
            ) : <LabelValue>{address.city || ''}</LabelValue>}
            <LabelCell>Zip:</LabelCell>
            {isEditmode ? (
              <InputCell width={"70%"} size="small" value={address.zip || ''} onChange={e => handleFieldChange('zip', e.target.value)} variant="outlined" margin="dense" />
            ) : <LabelValue sx={{ width: 80 }}>{address.zip || ''}</LabelValue>}
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: '10% 30% 20% 40%', columnGap: 2, alignItems: 'center' }}>
            <LabelCell>State:</LabelCell>
          {isEditmode ? (
              <SelectCell size="small" width={"80%"} value={address.state || ''} onChange={e => handleFieldChange('state', e.target.value)}>
                <Select value={address.state || ''} onChange={e => handleFieldChange('state', e.target.value)}>
                  <MenuItem value="TX">TX</MenuItem>
                  <MenuItem value="CA">CA</MenuItem>
                  <MenuItem value="NY">NY</MenuItem>
                  <MenuItem value="FL">FL</MenuItem>
                </Select>
              </SelectCell>
            ) : <LabelValue>{address.state || ''}</LabelValue>}
          <LabelCell>Country:</LabelCell>
            {isEditmode ? (
              <SelectCell size="small" width={"70%"} value={address.country || ''} onChange={e => handleFieldChange('country', e.target.value)}>
                <Select value={address.country || ''} onChange={e => handleFieldChange('country', e.target.value)}>
                  <MenuItem value="USA">USA</MenuItem>
                  <MenuItem value="Canada">Canada</MenuItem>
                  <MenuItem value="Mexico">Mexico</MenuItem>
                </Select>
              </SelectCell>
            ) : <LabelValue>{address.country || ''}</LabelValue>}
          </Box>

          
        </Box>
    </CardWithHeader>
  );
}
