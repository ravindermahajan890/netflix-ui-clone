import { Button, ButtonProps, styled } from '@mui/material';

const CustomButton = styled(Button)<ButtonProps>(() => ({
  textTransform: 'none',
  fontSize: '20px',
  fontWeight: '400',
}));

export default CustomButton;
