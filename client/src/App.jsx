
import { useState } from 'react'
import ButtonAppBar from './components/AppBar'
import Todo from './components/Todo'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <ButtonAppBar check={darkMode} darkMode={darkMode} change={() => setDarkMode(!darkMode)} />
        <Todo darkMode={darkMode} />
      </div >
    </ThemeProvider>
  )
}

export default App
