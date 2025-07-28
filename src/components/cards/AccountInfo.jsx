import React, { useEffect } from 'react';
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


export default function AccountInfo({ isEditmode = false, data = {}, onChange }) {

  // Use props for controlled fields
  const handleFieldChange = (field, value) => {
    if (onChange) onChange({ [field]: value });
  };

  return (
    <CardWithHeader subtitle="Account Info" sx={{ height: '100%' }}>
      <Box component="form" autoComplete="off" sx={{ px: 1 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: '40% 60%', columnGap: 1 }}>
          <LabelCell>Customer Name</LabelCell>
          {isEditmode ? (
            <InputCell
              size="small"
              value={data.customerName || ''}
              onChange={e => handleFieldChange('customerName', e.target.value)}
              variant="outlined"
              margin="dense"
            />) : <LabelValue>{data.customerName || ''}</LabelValue>}
          <LabelCell>Short Name</LabelCell>
          {isEditmode ? (
            <InputCell
              size="small"
              value={data.shortName || ''}
              onChange={e => handleFieldChange('shortName', e.target.value)}
              variant="outlined"
              margin="dense"
            />) : <LabelValue>{data.shortName || ''}</LabelValue>}
          <LabelCell>Class Code</LabelCell>
          {isEditmode ? (
            <SelectCell size="small" margin="dense">
              <Select
                value={data.classID || ''}
                onChange={e => handleFieldChange('classID', e.target.value)}
              >
                <MenuItem value="MSC">MSC</MenuItem>
                <MenuItem value="ABC">ABC</MenuItem>
              </Select>
            </SelectCell>) : <LabelValue>{data.classID || ''}</LabelValue>}
          <LabelCell>SubClass Code</LabelCell>
          {isEditmode ? (
            <SelectCell size="small" margin="dense" disabled={!isEditmode}>
              <Select
                value={data.subclassCode || ''}
                onChange={e => handleFieldChange('subclassCode', e.target.value)}
              >
                <MenuItem value="Trailing Credit">Trailing Credit</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </SelectCell>
          ) : <LabelValue>{data.subclassCode || ''}</LabelValue>}
          <LabelCell>Parent Ref ID</LabelCell>
          {isEditmode ? (
            <InputCell
              size="small"
              value={data.customerParentId || ''}
              onChange={e => handleFieldChange('customerParentId', e.target.value)}
              variant="outlined"
              margin="dense"
            />) : <LabelValue>{data.customerParentId || 'N/A'}</LabelValue>}
          <LabelCell>Status</LabelCell>
          {isEditmode ? (
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              minWidth: 0,
              width: '100%'
            }}>
              <RadioGroup
                row
                value={data.status || 'Active'}
                onChange={e => handleFieldChange('status', e.target.value)}
                disabled={!isEditmode}
                sx={{
                  minWidth: 0,
                  width: '100%',
                }}
              >
                <FormControlLabel value="Active" control={<Radio color="primary" sx={{ transform: 'scale(0.85)' }} />} label="Active" disabled={!isEditmode} sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.9rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 70 } }} />
                <FormControlLabel value="In-active" control={<Radio color="primary" sx={{ transform: 'scale(0.85)' }} />} label="In-active" disabled={!isEditmode} sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.9rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 90 } }} />
                <FormControlLabel value="Hold" control={<Radio color="primary" sx={{ transform: 'scale(0.85)' }} />} label="Hold" disabled={!isEditmode} sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.9rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 60 } }} />
              </RadioGroup>
            </Box>
          ) : (
            <LabelValue>{data.status || 'Active'}</LabelValue>
          )}
        </Box>
      </Box>
    </CardWithHeader>
  );
}
