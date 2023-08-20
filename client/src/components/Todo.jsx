import React from 'react';
import { Card } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Todo() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
            <Card style={{ width: '30%' }}>
                <div style={{ padding: 16 }}>
                    <TextField
                        id="outlined-basic"
                        label="Title"
                        variant="outlined"
                        fullWidth
                        sx={{
                            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: '#942fad'
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                                color: '#942fad'
                            }
                        }}
                    />
                    <div style={{ paddingTop: 16 }} />
                    <TextField
                        id="outlined-basic"
                        label="Description"
                        variant="outlined"
                        fullWidth
                        sx={{
                            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: '#942fad'
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                                color: '#942fad'
                            }
                        }}
                    />
                </div>
                <div style={{ textAlign: 'center', paddingBottom: 16 }}>
                    <Button variant="contained" sx={{
                        backgroundColor: '#942fad', ":hover": {
                            backgroundColor: '#ada32f',
                            color: 'black'
                        }
                    }}>Add Todo</Button>
                </div>
            </Card>
        </div>
    )
}

export default Todo;
