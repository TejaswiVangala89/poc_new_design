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


export default function DistributionReference({ isEditmode = false, data = {}, onChange }) {
  // Use data from props or fallback to default
  const [rows, setRows] = React.useState([
    {
      type: 'Cash',
      distRefPrefix: '10000-90000-',
      distRefEditable: '130090',
      distRefSuffix: '-0000-000-109290-PFGSL-00022',
      description: 'Cash Clearing - Corporate Billing',
    },
    {
      type: 'Acct Receivable',
      distRefPrefix: '10000-90000-',
      distRefEditable: '130090',
      distRefSuffix: '-0000-000-109290-PFGSL-00022',
      description: 'Other A/C - Other Consultant',
    },
    {
      type: 'Write Off',
      distRefPrefix: '10000-90000-',
      distRefEditable: '130090',
      distRefSuffix: '-0000-000-109290-PFGSL-00022',
      description: 'Other A/C - Other Consultant',
    },
  ]);

  // If you want to sync with parent, you can useEffect to emit changes
  React.useEffect(() => {
    if (onChange) onChange({ distributionRows: rows });
    // eslint-disable-next-line
  }, [rows]);

  return (
    <CardWithHeader subtitle="Distribution Reference" sx={{ height: '100%' }}>
      <Box sx={{ px: 1, py: 2 }}>
        <Box sx={{ border: '1px solid #ccc', borderRadius: 2 }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: '15% 1fr 25%', background: '#f8f8f8', fontWeight: 700, p: 1 }}>
            <LabelCell>Type</LabelCell>
            <LabelCell>Distribution Reference</LabelCell>
            <LabelCell>Description</LabelCell>
          </Box>
          {rows.map((row, idx) => (
            <Box key={row.type} sx={{ display: 'grid', gridTemplateColumns: '15% 1fr 25%', alignItems: 'center', borderTop: '1px solid #eee', p: 1 }}>
              <LabelValue>{row.type}</LabelValue>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LabelValue>{row.distRefPrefix}</LabelValue>
                {isEditmode ? (
                  <InputCell size="small" value={row.distRefEditable} onChange={e => {
                    const newRows = [...rows];
                    newRows[idx].distRefEditable = e.target.value;
                    setRows(newRows);
                  }} sx={{ width: 80 }} />
                ) : <LabelValue sx={{ width: 80 }}>{row.distRefEditable}</LabelValue>}
                <LabelValue>{row.distRefSuffix}</LabelValue>
              </Box>
              <LabelValue>{row.description}</LabelValue>
            </Box>
          ))}
        </Box>
      </Box>
    </CardWithHeader>
  );
}
