import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
    palette: {
      primary: {
        main: '#2196f3',
      },
      secondary: {
        main: '#d05ce3',
      },
      error: {
        main: '#f44336',
      },
      warning: {
        main: '#ff6333',
        contrastText: '#ffffff'
      },
      info: {
        main: '#009688',
      },
      success: {
        main: '#00a152',
      },
    },
  });
  