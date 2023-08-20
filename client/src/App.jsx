
import { useState } from 'react'
import ButtonAppBar from './components/AppBar'
import Todo from './components/Todo'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const [darkMode, setDarkMode] = useState(false);
const darkTheme = createTheme({
  palette: {
    mode: darkMode ? 'dark' : 'light',
  },
});


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <ButtonAppBar check={darkMode} change={() => setDarkMode(!darkMode)} />
        <Todo />
      </div >
    </ThemeProvider>
  )
}

export default App
