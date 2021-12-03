import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import products from '../static/products';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

export default function () {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {products.map(item => (<ImageCard item={item} />))}
        </div>
    );
}