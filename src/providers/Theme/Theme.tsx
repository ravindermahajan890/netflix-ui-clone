import { ThemeProvider } from '@mui/material';
import { amber, common } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { PaletteColor, PaletteColorOptions } from '@mui/material/styles/createPalette';
import { PropsWithChildren } from 'react';

declare module '@mui/material' {
  interface Palette {
    tertiary: PaletteColor;
    accent: PaletteColor;
    lightGrey: PaletteColor;
  }

  interface PaletteOptions {
    tertiary: PaletteColorOptions;
    accent: PaletteColorOptions;
    lightGrey: PaletteColorOptions;
  }

  interface ButtonPropsColorOverrides {
    tertiary: true;
    accent: true;
    lightGrey: true;
  }
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#212529', paper: common.black },
    primary: { main: common.black },
    secondary: { main: '#212529' },
    success: { main: '#28A745' },
    info: { main: '#17A2B8' },
    warning: { main: amber['500'] },
    error: { main: '#DC3545' },
    tertiary: { main: '#842029' },
    accent: { main: '#FE0039' },
    lightGrey: { main: '#ADB5BD' },
  },
  typography: {
    fontFamily: 'Inter',
  },
});

const Theme = ({ children }: PropsWithChildren) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
