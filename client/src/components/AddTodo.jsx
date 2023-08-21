import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function AddTodo({ todos, setTodos }) {
    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState(null);
    const [updatedTitle, setUpdatedTitle] = useState('');
    const [updatedDescription, setUpdatedDescription] = useState('');

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

    const handleEdit = (id) => {
        fetch(`https://mern-todo-api-livid.vercel.app/todos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: updatedTitle,
                description: updatedDescription
            })
        }).then((resp) => {
            resp.json().then((data) => {
                console.log("Updated data:", data);
                const updatedTodos = data;
                console.log("Updated todos:", updatedTodos);
                setTodos(updatedTodos);
                setEditMode(false);
                setEditId(null);
            });
        });
    }

    return (
        <>
            {todos.map((todo) => (
                <div key={todo.id} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
                    <Paper style={{ width: '30%', textAlign: 'center', marginLeft: '6%', marginRight: 10 }}>
                        {editMode && editId === todo.id ? (
                            <>
                                <TextField
                                    label="Title"
                                    value={updatedTitle}
                                    onChange={e => setUpdatedTitle(e.target.value)}
                                />
                                <TextField
                                    label="Description"
                                    value={updatedDescription}
                                    onChange={e => setUpdatedDescription(e.target.value)}
                                />
                            </>
                        ) : (
                            <>
                                <div style={{ margin: 8 }}><h2>{todo.title}</h2></div>
                                <div style={{ margin: 8 }}>{todo.description}</div>
                            </>
                        )}
                    </Paper>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Button onClick={() => handleDel(todo.id)} variant="contained" color="error">Delete</Button>
                        {editMode && editId === todo.id ? (
                            <Button onClick={() => handleEdit(todo.id)} variant="contained" color="success">Save</Button>
                        ) : (
                            <Button onClick={() => { setEditMode(true); setEditId(todo.id); setUpdatedTitle(todo.title); setUpdatedDescription(todo.description); }} variant="contained" color="success">Edit</Button>
                        )}
                    </div >
                </div>
            ))}
        </>
    )
}

export default AddTodo;
