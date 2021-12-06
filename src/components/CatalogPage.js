import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import products from '../static/productsCatalog';
import productsCatalog from "../static/productsCatalog";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: "wrap"
    },
}));

export default function () {
    const classes = useStyles();

    const [visible, setVisible] = useState(2);

    const loadMore = () => {
        setVisible(visible + 2)
    }

    const renderingCard = (item) =>{
        return(
            <div>
                <ImageCard item={item}/>
            </div>
        );
    }

    return (
        <div className={classes.root}>
            {productsCatalog.slice(0, visible).map(item => renderingCard(item))}
            {visible < productsCatalog.length && (
                <button className="button" onClick={loadMore}>View more</button>
            )}
        </div>
    );
}