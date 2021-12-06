import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton } from '@material-ui/core';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const useStyles = makeStyles((theme) => ({
    root: {

        borderTop: '1px solid white',
        height: '10vh',
        fontFamily: "monospace"
    },
    appbar: {
        background: 'none',
    },
    appbarTitle: {
        color: 'white',
        flexGrow: '1',
    },
    icon: {
        color:'#fff',
    },
})); 

export default function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appbar} elevation={0}>
                <Container>
                    <Toolbar>
                        <h1 className={classes.appbarTitle}>
                            Dark Shop
                        </h1>
                        <IconButton>
                            <InstagramIcon className={classes.icon} />
                        </IconButton>
                        <IconButton>
                            <FacebookIcon className={classes.icon} />
                        </IconButton>
                        <IconButton >
                            <TwitterIcon className={classes.icon} />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}
