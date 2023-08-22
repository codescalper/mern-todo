import { useEffect, useState } from "react";
import ButtonAppBar from "./components/AppBar";
import TodoUi from "./components/TodoUi";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AddTodo from "./components/AddTodo";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [todos, setTodos] = useState({});
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  useEffect(() => {
    fetch("https://mern-todo-api-livid.vercel.app/todos", {
      method: "GET",
    }).then((resp) => {
      resp.json().then((data) => {
        // console.log(data);
        setTodos(data);
      });
    });
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <ButtonAppBar
          check={darkMode}
          darkMode={darkMode}
          change={() => setDarkMode(!darkMode)}
        />
        <TodoUi darkMode={darkMode} setTodos={setTodos} />
        <AddTodo todos={todos} setTodos={setTodos} />
      </div>
    </ThemeProvider>
  );
}

export default App;
