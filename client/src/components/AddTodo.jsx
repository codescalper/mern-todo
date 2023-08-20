import React from 'react'
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function AddTodo({ todos, setTodos }) {
    if (!Array.isArray(todos)) {
        return null;
    }

    const handleDel = (id) => {
        fetch(`https://mern-todo-api-livid.vercel.app/todos/${id}`, {
            method: 'DELETE'
        }).then((resp) => {
            resp.json().then((data) => {
                console.log("Deleted data:", data); // Check the data returned by the API
                const updatedTodos = data; // Make sure data is the updated list of todos
                console.log("Updated todos:", updatedTodos); // Verify the updated todos
                setTodos(updatedTodos); // Update the todos state with the new array
            });
        });
    }


    return (
        <>
            {todos.map((todo) => (
                <div key={todo.id} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
                    <Paper style={{ width: '30%', textAlign: 'center', marginLeft: '6%', marginRight: 10 }}>
                        <div style={{ margin: 8 }}><h2>{todo.title}</h2></div>
                        <div style={{ margin: 8 }}>{todo.description}</div>
                    </Paper>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Button onClick={() => handleDel(todo.id)} variant="contained" color="error">Delete</Button>
                        <Button variant="contained" color="success">Edit</Button>
                    </div >
                </div>
            ))}
        </>
    )
}

export default AddTodo;
