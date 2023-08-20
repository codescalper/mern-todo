import React from 'react'
import Paper from '@mui/material/Paper';

function AddTodo({ todos }) {
    return (
        <>
            {todos.map((todo) => (
                <div key={todo.id} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
                    <Paper style={{ width: '30%' }}>
                        <div style={{ margin: 8 }}>Title: {todo.title}</div>
                        <div style={{ margin: 8 }}>Description: {todo.description}</div>
                    </Paper>
                </div>
            ))}
        </>
    )
}

export default AddTodo
