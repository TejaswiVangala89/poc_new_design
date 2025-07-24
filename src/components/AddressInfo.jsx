import React from 'react';
import {
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box
} from '@mui/material';
import { LabelCell, InputCell, SelectCell, LabelValue } from './styled';
import CardWithHeader from "./CardWithHeader";

export default function AddressInfo({ isEditmode = false }) {
  const [addressId, setAddressId] = React.useState('Bill To');
  const [contact, setContact] = React.useState('Accounts Payable');
  const [addressLine1, setAddressLine1] = React.useState('123 Main St');
  const [addressLine2, setAddressLine2] = React.useState('');
  const [city, setCity] = React.useState('Irving');
  const [zip, setZip] = React.useState('08033');
  const [state, setState] = React.useState('TX');
  const [country, setCountry] = React.useState('USA');

  return (
    <CardWithHeader subtitle="Address Info" sx={{ height: '100%' }}>
      <Box component="form" autoComplete="off" sx={{ px: 1 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: '140px 1fr', columnGap: 2, rowGap: 1 }}>
          <LabelCell>Address ID:</LabelCell>
          {isEditmode ? (
            <InputCell size="small" value={addressId} onChange={e => setAddressId(e.target.value)} variant="outlined" margin="dense" />
          ) : <LabelValue>{addressId}</LabelValue>}
          <LabelCell>Contact:</LabelCell>
          {isEditmode ? (
            <InputCell size="small" value={contact} onChange={e => setContact(e.target.value)} variant="outlined" margin="dense" />
          ) : <LabelValue>{contact}</LabelValue>}
          <LabelCell>Address Line 1:</LabelCell>
          {isEditmode ? (
            <InputCell size="small" value={addressLine1} onChange={e => setAddressLine1(e.target.value)} variant="outlined" margin="dense" />
          ) : <LabelValue>{addressLine1}</LabelValue>}
          <LabelCell>Address Line 2:</LabelCell>
          {isEditmode ? (
            <InputCell size="small" value={addressLine2} onChange={e => setAddressLine2(e.target.value)} variant="outlined" margin="dense" />
          ) : <LabelValue>{addressLine2}</LabelValue>}
          <LabelCell>City:</LabelCell>
          {isEditmode ? (
              <InputCell size="small" value={city} onChange={e => setCity(e.target.value)} variant="outlined" margin="dense" sx={{ flex: 1 }} />
            ) : <LabelValue sx={{ flex: 1 }}>{city}</LabelValue>}
            <LabelCell>Zip:</LabelCell>
            {isEditmode ? (
              <InputCell size="small" value={zip} onChange={e => setZip(e.target.value)} variant="outlined" margin="dense" sx={{ flex: 1 }} />
            ) : <LabelValue sx={{ width: 80 }}>{zip}</LabelValue>}
          <LabelCell>State:</LabelCell>
          {isEditmode ? (
              <SelectCell size="small" value={state} onChange={e => setState(e.target.value)}>
                <Select value={state} onChange={e => setState(e.target.value)}>
                  <MenuItem value="TX">TX</MenuItem>
                  <MenuItem value="CA">CA</MenuItem>
                  <MenuItem value="NY">NY</MenuItem>
                  <MenuItem value="FL">FL</MenuItem>
                </Select>
              </SelectCell>
            ) : <LabelValue>{state}</LabelValue>}
          <LabelCell>Country:</LabelCell>
            {isEditmode ? (
              <SelectCell size="small" value={country} onChange={e => setCountry(e.target.value)}>
                <Select value={country} onChange={e => setCountry(e.target.value)}>
                  <MenuItem value="USA">USA</MenuItem>
                  <MenuItem value="Canada">Canada</MenuItem>
                  <MenuItem value="Mexico">Mexico</MenuItem>
                </Select>
              </SelectCell>
            ) : <LabelValue>{country}</LabelValue>}
        </Box>
      </Box>
    </CardWithHeader>
  );
}
