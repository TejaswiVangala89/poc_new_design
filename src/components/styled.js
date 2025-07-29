import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { Button } from '@mui/material';

export const LabelValue = styled(Typography)(({ theme }) => ({
  alignSelf: 'center',
  textAlign: 'left',
  fontSize: '12px',
  padding: '0.25rem 0 0.25rem 0',
}))

export const LabelCell = styled(Typography)(({ theme }) => ({
  alignSelf: 'center',
  fontWeight: 700,
  textAlign: 'left',
  fontSize: '12px',
}));

export const InputCell = styled(TextField)(({ theme, width }) => ({
  width: width?width:'95%',
  margin: "0.25rem 0 0.25rem 0",
  '& .MuiInputBase-input': { fontSize: '12px' }
}));

export const SelectCell = styled(FormControl)(({ theme, width }) => ({
  width: width?width:'95%',
  fontSize: '12px',
  margin: "0.25rem 0 0.25rem 0",
  '& .MuiSelect-select': { fontSize: '12px', padding: "6px 14px" },
  textAlign: 'left'
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  padding: "1px 5px 1px 5px",
  fontSize: '12px',
  borderRadius: 4,
  background: '#222',
  border: '1px solid #ccc',
  color: '#fff',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#333',
  },
}))

export const CancelButton = styled(Button)(({ theme }) => ({
  padding: '1px 5px 1px 5px',
  fontSize: '12px',
  borderRadius: 4,
  border: '1px solid #ccc',
  background: '#fff',
  color: "#222",
  cursor: 'pointer'  
}));
