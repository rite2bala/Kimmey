import { createMuiTheme } from '@material-ui/core';
import overrides from './overrides';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#115293',
      },
    secondary: {
      light: '#4791db',
      main: '#1976d2',
      contrastText: '#ffcc00',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',

    ].join(','),
    fontSize: 12,
  },
  overrides,
  zIndex: {
    appBar: 1200,
    drawer: 1100
  }
});

export default theme;
