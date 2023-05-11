import { InputAdornment, InputBase, InputLabel, InputLabelProps, styled } from '@mui/material';
import { ChangeEvent, ReactElement } from 'react';

const CustomInputLabel = styled(InputLabel)<InputLabelProps>(() => ({
  color: 'white',
  fontSize: '20px',
}));

const CustomInputBox = styled(InputBase)(({ theme }) => ({
  border: `1px solid ${theme.palette.lightGrey.main}`,
  borderRadius: '4px',
  width: '100%',
  padding: theme.spacing(2),
  marginTop: theme.spacing(1),
  '& .MuiInputBase-input': { fontSize: '20px', fontWeight: '300', padding: '0' },
}));

interface InputProps {
  label: string;
  icon: ReactElement;
  type?: string;
  onChange?: (event: ChangeEvent) => void;
}

const Input = ({ label, icon, type, onChange }: InputProps) => (
  <div>
    <CustomInputLabel>{label}</CustomInputLabel>
    <CustomInputBox
      startAdornment={<InputAdornment position="start">{icon}</InputAdornment>}
      type={type}
      onChange={onChange}
    />
  </div>
);

export default Input;
