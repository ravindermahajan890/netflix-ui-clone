import { Avatar, Box } from '@mui/material';
import Typography from '@mui/material/Typography';

// eslint-disable-next-line react/prop-types
const Logo = ({ alignment = 'left' }) => (
  <Box display="flex" justifyContent={alignment} alignItems="center" gap="12px">
    <Avatar alt="TAMASHFLIXH" src="/tamashflix.svg" />
    <Typography variant="h5" color="accent.main">
      TAMASHFLIX
    </Typography>
  </Box>
);

export default Logo;
