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

export default function AccountInfo({ isEditmode = false }) {
  const [classCode, setClassCode] = React.useState('MSC');
  const [subClassCode, setSubClassCode] = React.useState('Trailing Credit');
  const [status, setStatus] = React.useState('Active');

  return (
    <CardWithHeader subtitle="Account Info" sx={{ height: '100%' }}>
      <Box component="form" autoComplete="off" sx={{ px: 1 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: '160px 1fr', columnGap: 1 }}>
          <LabelCell>Customer Name</LabelCell>
          {isEditmode ? (
            <InputCell
              size="small"
              value="Samsung Corporation"
              variant="outlined"
              margin="dense"
            />) : <LabelValue>Samsung Corporation</LabelValue>}
          <LabelCell>Short Name</LabelCell>
          {isEditmode ? (
            <InputCell
              size="small"
              value="Samsung"
              variant="outlined"
              margin="dense"
            />) : <LabelValue>Samsung</LabelValue>}
          <LabelCell>Class Code</LabelCell>
          {isEditmode ? (
            <SelectCell size="small" margin="dense">
              <Select
                value={classCode}
                onChange={e => setClassCode(e.target.value)}
              >
                <MenuItem value="MSC">MSC</MenuItem>
                <MenuItem value="ABC">ABC</MenuItem>
              </Select>
            </SelectCell>) : <LabelValue>{classCode}</LabelValue>}
          <LabelCell>SubClass Code</LabelCell>
          {isEditmode ? (
            <SelectCell size="small" margin="dense" disabled={!isEditmode}>
              <Select
                value={subClassCode}
                onChange={e => setSubClassCode(e.target.value)}
              >
                <MenuItem value="Trailing Credit">Trailing Credit</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </SelectCell>
          ) : <LabelValue>{subClassCode}</LabelValue>}
          <LabelCell>Parent Ref ID</LabelCell>
          {isEditmode ? (
            <InputCell
              size="small"
              value=""
              variant="outlined"
              margin="dense"
            />) : <LabelValue>N/A</LabelValue>}
          <LabelCell>Status</LabelCell>
          {isEditmode ? (
            <Box sx={{ display: 'flex', alignItems: 'center', height: 40 }}>
              <RadioGroup
                row
                value={status}
                onChange={e => setStatus(e.target.value)}
                disabled={!isEditmode}
              >
                <FormControlLabel value="Active" control={<Radio color="primary" sx={{ transform: 'scale(0.85)' }} />} label="Active" disabled={!isEditmode} sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.9rem' } }} />
                <FormControlLabel value="In-active" control={<Radio color="primary" sx={{ transform: 'scale(0.85)' }} />} label="In-active" disabled={!isEditmode} sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.9rem' } }} />
                <FormControlLabel value="Hold" control={<Radio color="primary" sx={{ transform: 'scale(0.85)' }} />} label="Hold" disabled={!isEditmode} sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.9rem' } }} />
              </RadioGroup>
            </Box>
          ) : (
            <LabelValue>{status}</LabelValue>
          )}
        </Box>
      </Box>
    </CardWithHeader>
  );
}
