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

export default function ContactBillingInfo({ isEditmode = false }) {
  const [contactName, setContactName] = React.useState('John Doe');
  const [contactEmail, setContactEmail] = React.useState('John.Doe@samsung.com');
  const [escalationName, setEscalationName] = React.useState('Jen Carrol');
  const [escalationEmail, setEscalationEmail] = React.useState('Jen.Carrol@samsung.com');
  const [acctPayableName, setAcctPayableName] = React.useState('Mike Richard');
  const [acctPayableEmail, setAcctPayableEmail] = React.useState('Mike.Richard@samsung.com');
  const [phone1, setPhone1] = React.useState('+1 469 230 3479');
  const [email1, setEmail1] = React.useState('jannet.charles@samsung.com');
  const [phone2, setPhone2] = React.useState('+1 980 435 4702');
  const [email2, setEmail2] = React.useState('');
  const [paymentTerms, setPaymentTerms] = React.useState('Net 30');

  return (
    <CardWithHeader subtitle="Contact & Billing Info" sx={{ height: '100%' }}>
      <Box component="form" autoComplete="off" sx={{ px: 1 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: '180px 1fr 180px 1fr', columnGap: 2, rowGap: 1 }}>
          <LabelCell>Contact Name:</LabelCell>
          {isEditmode ? (
            <InputCell size="small" value={contactName} onChange={e => setContactName(e.target.value)} variant="outlined" margin="dense" />
          ) : <LabelValue>{contactName}</LabelValue>}
          <LabelCell>Phone 1:</LabelCell>
          {isEditmode ? (
            <InputCell size="small" value={phone1} onChange={e => setPhone1(e.target.value)} variant="outlined" margin="dense" />
          ) : <LabelValue>{phone1}</LabelValue>}

          <LabelCell>Contact Email:</LabelCell>
          {isEditmode ? (
            <InputCell size="small" value={contactEmail} onChange={e => setContactEmail(e.target.value)} variant="outlined" margin="dense" />
          ) : <LabelValue>{contactEmail}</LabelValue>}
          <LabelCell>Email 1:</LabelCell>
          {isEditmode ? (
            <InputCell size="small" value={email1} onChange={e => setEmail1(e.target.value)} variant="outlined" margin="dense" />
          ) : <LabelValue>{email1}</LabelValue>}

          <LabelCell>Escalation Name:</LabelCell>
          {isEditmode ? (
            <InputCell size="small" value={escalationName} onChange={e => setEscalationName(e.target.value)} variant="outlined" margin="dense" />
          ) : <LabelValue>{escalationName}</LabelValue>}
          <LabelCell>Phone 2:</LabelCell>
          {isEditmode ? (
            <InputCell size="small" value={phone2} onChange={e => setPhone2(e.target.value)} variant="outlined" margin="dense" />
          ) : <LabelValue>{phone2}</LabelValue>}

          <LabelCell>Escalation Email:</LabelCell>
          {isEditmode ? (
            <InputCell size="small" value={escalationEmail} onChange={e => setEscalationEmail(e.target.value)} variant="outlined" margin="dense" />
          ) : <LabelValue>{escalationEmail}</LabelValue>}
          <LabelCell>Email 2:</LabelCell>
          {isEditmode ? (
            <InputCell size="small" value={email2} onChange={e => setEmail2(e.target.value)} variant="outlined" margin="dense" />
          ) : <LabelValue>{email2}</LabelValue>}

          <LabelCell>Acct Payable Name:</LabelCell>
          {isEditmode ? (
            <InputCell size="small" value={acctPayableName} onChange={e => setAcctPayableName(e.target.value)} variant="outlined" margin="dense" />
          ) : <LabelValue>{acctPayableName}</LabelValue>}
          <LabelCell>Payment Terms:</LabelCell>
          {isEditmode ? (
            <SelectCell size="small" value={paymentTerms} onChange={e => setPaymentTerms(e.target.value)}>
              <Select value={paymentTerms} onChange={e => setPaymentTerms(e.target.value)}>
                <MenuItem value="Net 30">Net 30</MenuItem>
                <MenuItem value="Net 45">Net 45</MenuItem>
                <MenuItem value="Net 60">Net 60</MenuItem>
              </Select>
            </SelectCell>
          ) : <LabelValue>{paymentTerms}</LabelValue>}

          <LabelCell>Acct Payable Email:</LabelCell>
          {isEditmode ? (
            <InputCell size="small" value={acctPayableEmail} onChange={e => setAcctPayableEmail(e.target.value)} variant="outlined" margin="dense" />
          ) : <LabelValue>{acctPayableEmail}</LabelValue>}

          {isEditmode && <Box gridColumn="1 / span 4" sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
            <button type="button" style={{ padding: '6px 16px', fontSize: '0.8rem', borderRadius: 4, background: '#222', color: '#fff', border: 'none', cursor: 'pointer' }}>
              Additional Contact
            </button>
          </Box>}
        </Box>
      </Box>
    </CardWithHeader>
  );
}
