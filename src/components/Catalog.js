import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import productsCatalog from '../static/productsCatalog';
import '../App.css';


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));


 export function Catalog() {
    const classes = useStyles();
    return (
    <div>    
        <div className={classes.root}>
            {productsCatalog.map(item => (<ImageCard item={item} />))}
        </div>
    </div>     
    );
}

export default Catalog;
