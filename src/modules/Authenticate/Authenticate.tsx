import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Box, Card, CardHeader, Container, Divider, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../components/CustomButton';
import Input from '../../components/Input';
import Logo from '../../components/Logo';
import env from '../../env';
import { useAuth } from '../../providers/Auth';
import Routes from '../../routes';
import authBackground from './auth_background.jpg';

const Authenticate = ({ isLogin }: { isLogin?: boolean }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const reCaptchaRef = useRef<ReCAPTCHA>(null);

  const { signUp, login } = useAuth();
  const navigate = useNavigate();

  const isInputValid = () => {
    if (!email && !password) {
      console.log('[Auth] Email and password should not be empty');
      return false;
    }

    if (!isLogin && password !== confirmPassword) {
      console.log('[Signup] Confirm password is not matching');
      return false;
    }

    return true;
  };

  const onSubmitHandler = async () => {
    if (!isInputValid()) return;

    if (isLogin) await login(email, password);
    else await signUp(email, password, reCaptchaRef.current?.getValue());

    reCaptchaRef.current?.reset();
    navigate('/', { replace: true });
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      style={{
        backgroundImage: `url(${authBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container maxWidth="sm" style={{ padding: '0' }}>
        <Card style={{ padding: '24px 52px 40px' }}>
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
            {!isLogin && (
              <>
                <Input
                  label="Confirm password"
                  icon={<LockOutlinedIcon />}
                  type="password"
                  onChange={(event) => setConfirmPassword((event.target as HTMLInputElement).value)}
                />
                <ReCAPTCHA sitekey={env.RECAPTCHA_SITE_KEY} ref={reCaptchaRef} />
              </>
            )}
            <CustomButton variant="contained" color="tertiary" size="large" onClick={onSubmitHandler}>
              {isLogin ? 'Login' : 'Signup'}
            </CustomButton>
            <Divider sx={(theme) => ({ backgroundColor: theme.palette.lightGrey.main })} />
            <Typography style={{ fontSize: '20px', fontWeight: '500', textAlign: 'center' }}>
              {isLogin ? 'Dont have an account already, click here to  ' : 'Already have an account, click here to '}
              <Typography
                color="tertiary.main"
                component="span"
                variant="inherit"
                onClick={() => navigate(isLogin ? Routes.SIGN_UP : Routes.LOGIN)}
                style={{ cursor: 'pointer' }}
              >
                {isLogin ? 'sign-up' : 'login'}
              </Typography>
            </Typography>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default Authenticate;
