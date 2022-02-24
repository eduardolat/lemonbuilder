import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles'

export const muiTheme = createTheme({
  palette: {
    gray: {
      light: '#f3f4f6',
      main: '#dbdcdd',
      dark: '#c2c3c5',
      contrastText: '#000000'
    }
  }
})

export const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={muiTheme}>
      {children}
    </MuiThemeProvider>
  )
}
