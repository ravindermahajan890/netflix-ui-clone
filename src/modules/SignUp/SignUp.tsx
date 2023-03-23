import {
  Box,
  Button,
  Card,
  CardHeader,
  Container,
  InputAdornment,
  InputBase,
  InputLabel,
  InputLabelProps,
  styled,
} from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Logo from '../../components/Logo';

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

const SignUp = () => (
  <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
    <Container maxWidth="sm">
      <Card
        sx={{
          paddingX: (theme) => theme.spacing(8),
          paddingTop: (theme) => theme.spacing(3),
          paddingBottom: (theme) => theme.spacing(5),
        }}
      >
        <CardHeader title={<Logo alignment="center" />} />
        <Box display="flex" flexDirection="column" gap="30px" marginTop="16px">
          <div>
            <CustomInputLabel>Username</CustomInputLabel>
            <CustomInputBox
              startAdornment={
                <InputAdornment position="start">
                  <PersonOutlineIcon />
                </InputAdornment>
              }
            />
          </div>
          <div>
            <CustomInputLabel>Password</CustomInputLabel>
            <CustomInputBox
              startAdornment={
                <InputAdornment position="start">
                  <LockOutlinedIcon />
                </InputAdornment>
              }
              type="password"
            />
          </div>
          <div>
            <CustomInputLabel>Confirm password</CustomInputLabel>
            <CustomInputBox
              startAdornment={
                <InputAdornment position="start">
                  <LockOutlinedIcon />
                </InputAdornment>
              }
              type="password"
            />
          </div>
          <Button
            variant="contained"
            color="tertiary"
            size="large"
            style={{ textTransform: 'none', fontSize: '20px', fontWeight: '400' }}
          >
            Signup
          </Button>
        </Box>
      </Card>
    </Container>
  </Box>
);

export default SignUp;
