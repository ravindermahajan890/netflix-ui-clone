import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Box, Card, CardHeader, Container } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../components/CustomButton';
import Input from '../../components/Input';
import Logo from '../../components/Logo';
import { useAuth } from '../../providers/Auth/Auth';

const SignUp = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const { signUp } = useAuth();
  const navigate = useNavigate();

  const onSubmitHandler = async () => {
    if (password !== confirmPassword) {
      console.log('[SignUp] Confirm password does not match');
      return;
    }

    await signUp(email, password);

    navigate('/', { replace: true });
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Container maxWidth="sm">
        <Card style={{ padding: '24px 64px 40px' }}>
          <CardHeader title={<Logo alignment="center" />} />
          <Box display="flex" flexDirection="column" gap="30px" marginTop="16px">
            <Input
              label="Email"
              icon={<PersonOutlineIcon />}
              type="email"
              onChange={(event) => setEmail((event.target as HTMLInputElement).value)}
            />
            <Input
              label="Password"
              icon={<LockOutlinedIcon />}
              type="password"
              onChange={(event) => setPassword((event.target as HTMLInputElement).value)}
            />
            <Input
              label="Confirm password"
              icon={<LockOutlinedIcon />}
              type="password"
              onChange={(event) => setConfirmPassword((event.target as HTMLInputElement).value)}
            />
            <CustomButton variant="contained" color="tertiary" size="large" onClick={onSubmitHandler}>
              Signup
            </CustomButton>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default SignUp;
