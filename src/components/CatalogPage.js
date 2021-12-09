import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import {get} from "../apiService/requests";
import {addToCart} from "../redux/actions/products";
import {useDispatch} from "react-redux";

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
    const dispath = useDispatch()

    const [visible, setVisible] = useState(2);
    const [productsCatalog, setProductsCatalog] = useState([]);
    useEffect(async ()=>{
        const response = await get();
        console.log(response);
        setProductsCatalog(response);
    },[]);


    const loadMore = () => {
        setVisible(visible + 2)
    }

    const renderingCard = (item) =>{
        return(
            <div key={item._id}>
                <ImageCard item={item} handleAddItem={handleAddItem}/>
            </div>
        );
    }
    const handleAddItem = (id)=>(event)=>{
        const item = productsCatalog.find((item)=>(
                item._id === id
            )
        );
        dispath(addToCart(item));
    };

    return (
        <div className={classes.root}>
            {productsCatalog.slice(0, visible).map(item => renderingCard(item))}
            {visible < productsCatalog.length && (
                <button className="button" onClick={loadMore}>View more</button>
            )}
        </div>
    );
}