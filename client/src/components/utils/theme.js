// TODO: adjust for Techo
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#28B463',
      dark: '#333333',
      light: '#868686',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#231837',
      dark: '#D78E01',
      light: '#EA6D4F',
    },
    info: {
      main: '#CCE0E3',
      dark: '#C9E2C9',
      light: '#F9F9F9',
      contrastText: '#E3EFE4',
    },
    uppsebuy: {
      main: '#28B463',
      dark: '#28B463',
      light: '#28B463',
      contrastText: '#28B463',
    }
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        '&:hover': {
          backgroundColor: 'black',
          color: '#FFFF01',
          fontWeight: 800,
        },
      },
      containedSecondary: {
        backgroundColor: 'black',
        color: 'white',
        '&:hover': {
          backgroundColor: '#FFFF01',
          color: 'black',
          fontWeight: 800,
        },
      },
    },
  },
});

export default theme;
