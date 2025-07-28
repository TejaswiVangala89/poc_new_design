
import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Stack, Typography, Tabs, Tab, IconButton, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { StyledButton } from './styled';
import customersData from '../data/customers.json';

export default function Home() {
  const navigate = useNavigate();
  const [editId, setEditId] = useState('');
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState(0);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    setCustomers(customersData);
  }, []);

  const filtered = customers.filter(c =>
    c.customerName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ p: 3 }}>
      <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ mb: 2 }}>
        <Tab label="Account Details" />
        <Tab label="Invoice Details" />
      </Tabs>
      {tab === 0 && (
        <>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <TextField
                size="small"
                select={false}
                label="Search By Customer Name"
                value={search}
                onChange={e => setSearch(e.target.value)}
                sx={{ minWidth: 220 }}
              />
              <StyledButton variant="contained" color="primary" onClick={() => {}} sx={{ minWidth: 80 }}>
                Search
              </StyledButton>
            </Stack>
            <Tooltip title="Add Customer">
              <IconButton color="primary" onClick={() => navigate('/customer')} size="large">
                <AddIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ height: 520, width: '100%', bgcolor: '#fff', borderRadius: 2, boxShadow: 0, border: '1px solid #e0e0e0' }}>
            <DataGrid
              rows={filtered.map(c => ({
                id: c.id,
                customerName: c.customerName,
                customerContactName: c.customerContactName,
                phone: c.all_phones && c.all_phones[0],
                email: c.all_emails && c.all_emails[0],
                status: c.status,
                actions: c.id
              }))}
              columns={[
                { field: 'id', headerName: 'Customer ID', flex: 1, minWidth: 90, maxWidth: 120 },
                { field: 'customerName', headerName: 'Customer Name', flex: 2, minWidth: 140 },
                { field: 'customerContactName', headerName: 'Contact', flex: 2, minWidth: 120 },
                { field: 'phone', headerName: 'Phone', flex: 1.2, minWidth: 100 },
                { field: 'email', headerName: 'Email', flex: 2, minWidth: 160 },
                { field: 'status', headerName: 'Status', flex: 1, minWidth: 80, maxWidth: 100 },
                {
                  field: 'actions',
                  headerName: 'Actions',
                  flex: 1.1,
                  minWidth: 70,
                  maxWidth: 90,
                  sortable: false,
                  renderCell: (params) => (
                    <Tooltip title="Edit Customer">
                      <IconButton color="primary" onClick={() => navigate(`/customer/${params.value}`)} size="small">
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                  )
                }
              ]}
              pageSize={7}
              rowsPerPageOptions={[7, 14, 21]}
              disableSelectionOnClick
              sx={{
                border: 'none',
                '& .MuiDataGrid-columnHeaders': { bgcolor: '#f8f8f8', fontWeight: 700 },
                '& .MuiDataGrid-row': { cursor: 'pointer' },
                fontSize: 15,
                '.MuiDataGrid-virtualScroller': { minHeight: '350px' },
                '.MuiDataGrid-cell': { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }
              }}
              autoHeight={false}
              sortingOrder={['asc', 'desc']}
            />
          </Box>
        </>
      )}
      {tab === 1 && (
        <Typography variant="body1" sx={{ mt: 4, textAlign: 'center' }}>
          Invoice Details (not implemented)
        </Typography>
      )}
    </Box>
  );
}
