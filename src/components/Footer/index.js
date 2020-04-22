import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const Footer = () => {

    const useStyle = makeStyles(() => ({
        header: {
            padding: '30px 0 20px',
            top: 'auto',
            bottom: 0
        }
    }));

    return (
        <AppBar position={'fixed'} color="default" className={useStyle().header}>
            <Container>
                <Toolbar>
                    <Typography>2020. All rights reserved</Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Footer;