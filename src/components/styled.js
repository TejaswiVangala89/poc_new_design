import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

export const LabelCell = styled(Typography)(({ theme }) => ({
  alignSelf: 'center',
  fontWeight: 500,
  textAlign: 'left',
}));

export const InputCell = styled(TextField)(({ theme }) => ({
  width: '15rem',
  '& .MuiInputBase-input': { fontSize: '0.95rem' },
}));

export const SelectCell = styled(FormControl)(({ theme }) => ({
  width: '15rem',
  '& .MuiSelect-select': { fontSize: '0.95rem' },
}));
