import React from 'react';

import {
  Select,
  MenuItem,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  InputLabel,
  FormControl,
  Chip,
  Typography,
  IconButton,
  Button,
  Snackbar,
  Alert
} from '@mui/material';
  // Snackbar state

import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';


import { LabelCell, InputCell, SelectCell, LabelValue, StyledButton } from '../styled';
import CardWithHeader from "./CardWithHeader";


export default function ContactBillingInfo({ isEditmode = false, onContactsChange, data = {}, onChange, allEmails, allPhones }) {

  const contactName = data.customerContactName || '';
  const contactEmail = data.customerContactEmail || '';
  const escalationName = data.escalationContactName || '';
  const escalationEmail = data.escalationContactEmail || '';
  const acctPayableName = data.accountPayableName || '';
  const acctPayableEmail = data.accountPayableEmail || '';
  const paymentTerms = data.paymentTerms || '';
  // allEmails and allPhones come from props

  // Emit changes to parent
  const emitChange = (changes) => {
    if (onChange) onChange(changes);
    if (onContactsChange) onContactsChange({ emails: allEmails, phones: allPhones, ...changes });
  };

  // Derived values for phone1/phone2/email1/email2
  const phone1 = allPhones[0] || '';
  const phone2 = allPhones[1] || '';
  const email1 = allEmails[0] || '';
  const email2 = allEmails[1] || '';

    const [snackbar, setSnackbar] = React.useState({ open: false, message: '', severity: 'info' });
  const showSnackbar = (message, severity = 'info') => setSnackbar({ open: true, message, severity });
  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setSnackbar(s => ({ ...s, open: false }));
  };

  // Handlers for editing phone1/phone2/email1/email2
  const handlePhoneChange = (idx, value) => {
    const arr = [...(allPhones || [])];
    if (value === '') {
      arr.splice(idx, 1);
    } else {
      arr[idx] = value;
    }
    const filtered = arr.filter((v, i, a) => v !== '' || i < 2);
    emitChange({ all_phones: filtered });
  };
  const handleEmailChange = (idx, value) => {
    const arr = [...(allEmails || [])];
    if (value === '') {
      arr.splice(idx, 1);
    } else {
      arr[idx] = value;
    }
    const filtered = arr.filter((v, i, a) => v !== '' || i < 2);
    emitChange({ all_emails: filtered });
  };

  const handleDeleteEmail = (email) => {
    emitChange({ all_emails: (allEmails || []).filter(e => e !== email) });
  };
  const handleDeletePhone = (phone) => {
    emitChange({ all_phones: (allPhones || []).filter(p => p !== phone) });
  };

  // Dialog state
  const [openDialog, setOpenDialog] = React.useState(false);
  const [contactType, setContactType] = React.useState('');
  const [contactValue, setContactValue] = React.useState('');

  const handleAddContact = () => {
    setOpenDialog(true);
    setContactType('');
    setContactValue('');
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleApplyContact = () => {
    // Assign to master state in parent
    if (onContactsChange) {
      onContactsChange({ emails: allEmails, phones: allPhones });
    }
    setOpenDialog(false);
  };

  // Add contact from popup
  const handleAddContactValue = () => {
    if (contactType && contactValue) {
      if (contactType === 'Email') {
        if (!(allEmails || []).includes(contactValue)) {
          const arr = [...(allEmails || []), contactValue];
          let idx = arr.length - 1;
          if (idx === 0) showSnackbar('Added as Email 1', 'success');
          else if (idx === 1) showSnackbar('Added as Email 2', 'success');
          emitChange({ all_emails: arr });
        }
      } else if (contactType === 'Phone') {
        if (!(allPhones || []).includes(contactValue)) {
          const arr = [...(allPhones || []), contactValue];
          let idx = arr.length - 1;
          if (idx === 0) showSnackbar('Added as Phone 1', 'success');
          else if (idx === 1) showSnackbar('Added as Phone 2', 'success');
          emitChange({ all_phones: arr });
        }
      }
      setContactValue('');
    }
  };

  return (
    <CardWithHeader subtitle="Contact & Billing Info" sx={{ height: '100%' }}
      headerButton={isEditmode ? (
        <Box display="flex" alignItems="center" justifyContent="flex-end">
          <StyledButton onClick={handleAddContact}>
            Additional Contact
          </StyledButton>
        </Box>
      ) : null}
    >
      <Box component="form" autoComplete="off" sx={{ px: 1 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: '180px 1fr 180px 1fr', columnGap: 2 }}>
          {/* All Emails as chips */}

          <LabelCell>Contact Name:</LabelCell>
          {isEditmode ? (
            <InputCell size="small" value={contactName} onChange={e => emitChange({ customerContactName: e.target.value })} variant="outlined" margin="dense" />
          ) : <LabelValue>{contactName}</LabelValue>}

          <LabelCell>Phone 1:</LabelCell>
          {isEditmode ? (
            <InputCell size="small" value={phone1} onChange={e => handlePhoneChange(0, e.target.value)} variant="outlined" margin="dense" />
          ) : <LabelValue>{phone1}</LabelValue>}

          <LabelCell>Email 1:</LabelCell>
          {isEditmode ? (
            <InputCell size="small" value={email1} onChange={e => handleEmailChange(0, e.target.value)} variant="outlined" margin="dense" />
          ) : <LabelValue>{email1}</LabelValue>}

          <LabelCell>Phone 2:</LabelCell>
          {isEditmode ? (
            <InputCell size="small" value={phone2} onChange={e => handlePhoneChange(1, e.target.value)} variant="outlined" margin="dense" />
          ) : <LabelValue>{phone2}</LabelValue>}

          <LabelCell>Email 2:</LabelCell>
          {isEditmode ? (
            <InputCell size="small" value={email2} onChange={e => handleEmailChange(1, e.target.value)} variant="outlined" margin="dense" />
          ) : <LabelValue>{email2}</LabelValue>}

          <LabelCell>Contact Email:</LabelCell>
          {isEditmode ? (
            <InputCell size="small" value={contactEmail} onChange={e => emitChange({ customerContactEmail: e.target.value })} variant="outlined" margin="dense" />
          ) : <LabelValue>{contactEmail}</LabelValue>}

          <LabelCell>Escalation Name:</LabelCell>
          {isEditmode ? (
            <InputCell size="small" value={escalationName} onChange={e => emitChange({ escalationContactName: e.target.value })} variant="outlined" margin="dense" />
          ) : <LabelValue>{escalationName}</LabelValue>}

          <LabelCell>Escalation Email:</LabelCell>
          {isEditmode ? (
            <InputCell size="small" value={escalationEmail} onChange={e => emitChange({ escalationContactEmail: e.target.value })} variant="outlined" margin="dense" />
          ) : <LabelValue>{escalationEmail}</LabelValue>}

          <LabelCell>Acct Payable Name:</LabelCell>
          {isEditmode ? (
            <InputCell size="small" value={acctPayableName} onChange={e => emitChange({ accountPayableName: e.target.value })} variant="outlined" margin="dense" />
          ) : <LabelValue>{acctPayableName}</LabelValue>}
          <LabelCell>Payment Terms:</LabelCell>
          {isEditmode ? (
            <SelectCell size="small" value={paymentTerms} onChange={e => emitChange({ paymentTerms: e.target.value })}>
              <Select value={paymentTerms} onChange={e => emitChange({ paymentTerms: e.target.value })}>
                <MenuItem value="Net 30">Net 30</MenuItem>
                <MenuItem value="Net 45">Net 45</MenuItem>
                <MenuItem value="Net 60">Net 60</MenuItem>
              </Select>
            </SelectCell>
          ) : <LabelValue>{paymentTerms}</LabelValue>}

          <LabelCell>Acct Payable Email:</LabelCell>
          {isEditmode ? (
            <InputCell size="small" value={acctPayableEmail} onChange={e => emitChange({ accountPayableEmail: e.target.value })} variant="outlined" margin="dense" />
          ) : <LabelValue>{acctPayableEmail}</LabelValue>}
          {allEmails.slice(2).length !== 0 && (
            <>
              <LabelCell>Additional Emails:</LabelCell>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, minHeight: 32, alignItems: 'center' }}>
                {allEmails.slice(2).map((email, idx) => (
                  <Chip
                    key={email}
                    label={email}
                    onDelete={idx >= 2 ? () => handleDeleteEmail(email) : undefined}
                    size="small"
                    variant="outlined"
                    sx={{ bgcolor: '#fff', color: '#000', borderColor: '#000' }}
                  />
                ))}
              </Box>
            </>)}

          {allPhones.slice(2).length !== 0 && (
            <>
              <LabelCell>Additional Phones:</LabelCell>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, minHeight: 32, alignItems: 'center' }}>
                {allPhones.slice(2).map((phone, idx) => (
                  <Chip
                    key={phone}
                    label={phone}
                    onDelete={idx >= 2 ? () => handleDeletePhone(phone) : undefined}
                    size="small"
                    variant="outlined"
                    sx={{ bgcolor: '#fff', color: '#000', borderColor: '#000' }}
                  />
                ))}
              </Box>
            </>
          )}
        </Box>
      </Box>
      {/* Dialog for Additional Contact */}
      <Dialog open={openDialog} onClose={handleDialogClose} maxWidth="xs" fullWidth>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pr: 1 }}>
          Add Additional Contact
          <IconButton aria-label="close" onClick={handleDialogClose} size="small" sx={{ ml: 2 }}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Note: The first two emails and phones are considered as <b>Phone 1</b>, <b>Phone 2</b>, <b>Email 1</b>, and <b>Email 2</b> and can only be edited from the main form.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>
            <FormControl size="small" sx={{ minWidth: 100 }}>
              <InputLabel id="contact-type-label">Type</InputLabel>
              <Select
                labelId="contact-type-label"
                value={contactType}
                size='small'
                label="Type"
                onChange={e => {
                  setContactType(e.target.value);
                  setContactValue('');
                }}
              >
                <MenuItem value="Email">Email</MenuItem>
                <MenuItem value="Phone">Phone</MenuItem>
              </Select>
            </FormControl>
            <InputCell
              size="small"
              value={contactValue}
              onChange={e => setContactValue(e.target.value)}
              placeholder={contactType === 'Email' ? 'Enter email' : contactType === 'Phone' ? 'Enter phone' : ''}
              variant="outlined"
              margin="dense"
              sx={{ flex: 1 }}
              disabled={!contactType}
            />
            <IconButton
              aria-label="add"
              color="primary"
              sx={{ ml: 1, bgcolor: '#000', color: '#fff', '&:hover': { bgcolor: '#222' } }}
              disabled={!(contactType && contactValue)}
              onClick={handleAddContactValue}
              size="small"
            >
              <AddIcon fontSize="small" />
            </IconButton>
          </Box>
          {/* Chips for all emails in popup */}
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle2" sx={{ mb: 0.5 }}>All Emails:</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, minHeight: 32, alignItems: 'center' }}>
              {allEmails.length <= 2 ? <Typography variant="body2" color="text.secondary">None</Typography> :
                allEmails.slice(2).map((email, idx) => (
                  <Chip
                    key={email}
                    label={email}
                    onDelete={() => handleDeleteEmail(email)}
                    size="small"
                    variant="outlined"
                    sx={{ bgcolor: '#fff', color: '#000', borderColor: '#000' }}
                  />
                ))}
            </Box>
          </Box>
          {/* Chips for all phones in popup */}
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle2" sx={{ mb: 0.5 }}>All Phones:</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, minHeight: 32, alignItems: 'center' }}>
              {allPhones.length <= 2 ? <Typography variant="body2" color="text.secondary">None</Typography> :
                allPhones.slice(2).map((phone, idx) => (
                  <Chip
                    key={phone}
                    label={phone}
                    onDelete={() => handleDeletePhone(phone)}
                    size="small"
                    variant="outlined"
                    sx={{ bgcolor: '#fff', color: '#000', borderColor: '#000' }}
                  />
                ))}
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </CardWithHeader>
  );
}
