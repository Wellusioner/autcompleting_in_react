import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = () => {
    return (
        <AppBar position={'relative'}>
            <Container>
                <Toolbar>
                    <Typography>User form</Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;