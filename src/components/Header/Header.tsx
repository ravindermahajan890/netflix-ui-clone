import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Box, Menu, MenuItem, styled } from '@mui/material';
import { useState } from 'react';
import { useAuth } from '../../providers/Auth';
import Logo from '../Logo';

const CustomMenu = styled(Menu)(({ theme }) => ({
  '& .MuiMenu-paper': {
    border: `1px solid ${theme.palette.lightGrey.main}`,
    borderRadius: '4px',
    background: theme.palette.primary.main,
    padding: '2px 20px',
  },
}));

const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
  borderColor: theme.palette.lightGrey.main,
  justifyContent: 'center',
}));

const Header = () => {
  const { logout } = useAuth();

  const [menuAnchorElement, setMenuAnchorElement] = useState<null | SVGSVGElement>(null);
  const openMenu = ({ currentTarget }: { currentTarget: SVGSVGElement }) => setMenuAnchorElement(currentTarget);
  const closeMenu = () => setMenuAnchorElement(null);

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" px="40px" py="16px" bgcolor="primary.main">
      <Logo />
      <PersonOutlineIcon fontSize="large" onClick={openMenu} />
      <CustomMenu anchorEl={menuAnchorElement} open={Boolean(menuAnchorElement)} onClose={closeMenu}>
        <CustomMenuItem onClick={closeMenu} divider>
          Profile
        </CustomMenuItem>
        <CustomMenuItem onClick={closeMenu} divider>
          Settings
        </CustomMenuItem>
        <CustomMenuItem onClick={logout}>Logout</CustomMenuItem>
      </CustomMenu>
    </Box>
  );
};

export default Header;
