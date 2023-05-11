import { Avatar, Box } from '@mui/material';
import Typography from '@mui/material/Typography';

const Logo = ({ alignment = 'left' }: { alignment?: 'left' | 'center' | 'right' }) => (
  <Box display="flex" justifyContent={alignment} alignItems="center" gap="12px">
    <Avatar alt="TAMASHFLIX" src="/tamashflix.svg" />
    <Typography variant="h5" color="accent.main">
      TAMASHFLIX
    </Typography>
  </Box>
);

export default Logo;
