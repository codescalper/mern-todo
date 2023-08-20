import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Color switch demo' } };
export default function ButtonAppBar({ change, check, darkMode }) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: 'transparent' }}>
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: darkMode ? 'white' : 'black', textAlign: 'center' }}>
                        My Todo List
                    </Typography>
                    <Switch {...label} defaultChecked color="secondary" onChange={change} checked={check} />
                </Toolbar>
            </AppBar>
        </Box >
    );
}
