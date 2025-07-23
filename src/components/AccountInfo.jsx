import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  Typography
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import { LabelCell, InputCell, SelectCell } from './styled';

export default function AccountInfo({ isEditmode = false }) {
  const [classCode, setClassCode] = React.useState('MSC');
  const [subClassCode, setSubClassCode] = React.useState('Trailing Credit');
  const [status, setStatus] = React.useState('Active');

  return (
    <Box sx={{ maxWidth: 500, margin: '40px auto' }}>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 500, fontSize: 22, textAlign: "left" }}>
        Customer Info <b>CB00010006</b>
      </Typography>
      <Card variant="outlined" sx={{ borderRadius: 3, boxShadow: 1 }}>
        <CardHeader
          title={<Typography variant="subtitle1" fontWeight={600} align="left">Account Info</Typography>}
          action={
            <Box>
              <IconButton aria-label="save" size="small">
                <SaveIcon fontSize="small" />
              </IconButton>
              <IconButton aria-label="close" size="small">
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>
          }
          sx={{ pb: 1, pt: 1, pl: 2, pr: 1, borderBottom: '4px solid', borderColor: 'divider', '& .MuiCardHeader-title': { textAlign: 'left' } }}
        />
        <CardContent sx={{ pt: 2, pb: 2 }}>
          <Box component="form" autoComplete="off" sx={{ px: 1 }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: '160px 1fr', columnGap: 1 }}>
              <LabelCell>Customer Name</LabelCell>
              <InputCell
                size="small"
                value="Samsung Corporation"
                InputProps={{ readOnly: !isEditmode }}
                variant="outlined"
                margin="dense"
              />
              <LabelCell>Short Name</LabelCell>
              <InputCell
                size="small"
                value="Samsung"
                InputProps={{ readOnly: !isEditmode }}
                variant="outlined"
                margin="dense"
              />
              <LabelCell>Class Code</LabelCell>
              <SelectCell size="small" margin="dense" disabled={!isEditmode}>
                <Select
                  value={classCode}
                  onChange={e => setClassCode(e.target.value)}
                >
                  <MenuItem value="MSC">MSC</MenuItem>
                  <MenuItem value="ABC">ABC</MenuItem>
                </Select>
              </SelectCell>
              <LabelCell>SubClass Code</LabelCell>
              <SelectCell size="small" margin="dense" disabled={!isEditmode}>
                <Select
                  value={subClassCode}
                  onChange={e => setSubClassCode(e.target.value)}
                >
                  <MenuItem value="Trailing Credit">Trailing Credit</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </SelectCell>
              <LabelCell>Parent Ref ID</LabelCell>
              <InputCell
                size="small"
                value=""
                InputProps={{ readOnly: !isEditmode }}
                variant="outlined"
                margin="dense"
              />
              <LabelCell>Status</LabelCell>
              <Box sx={{ display: 'flex', alignItems: 'center', height: 40 }}>
                <RadioGroup
                  row
                  value={status}
                  onChange={e => setStatus(e.target.value)}
                  disabled={!isEditmode}
                >
                  <FormControlLabel value="Active" control={<Radio color="primary" />} label="Active" disabled={!isEditmode} />
                  <FormControlLabel value="In-active" control={<Radio color="primary" />} label="In-active" disabled={!isEditmode} />
                  <FormControlLabel value="Hold" control={<Radio color="primary" />} label="Hold" disabled={!isEditmode} />
                </RadioGroup>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
