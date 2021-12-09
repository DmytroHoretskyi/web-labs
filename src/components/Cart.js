import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { removeItem} from "../redux/actions/products";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import {makeStyles} from "@material-ui/core/styles";
import "../App"

function Cart() {
    const items = useSelector(state => state.itemsReducer)
    console.log(items)
    const dispath = useDispatch()
    const handleRemoveItem = (id)=>(event)=>{
        dispath(removeItem(id));
    };
    const useStyles = makeStyles({
        root: {
            borderStyle: "double",
            borderColor: "white",
            width: 670,
            background: 'black',
            margin: '20px',
            paddingBottom: '15px',
        },
        media: {
            height: 440,
        },
        title: {
            fontFamily: "monospace",
            fontWeight: 'bold',
            fontSize: '2rem',
            color: '#fff',
        },
        producer: {
            fontSize: '1.1rem',
            color: '#fff',
        },
        price: {
            fontFamily: "monospace",
            fontWeight: 'bold',
            fontSize: '1.5rem',
            color: '#fff',
        },
        value: {
            fontFamily: "monospace",
            fontWeight: 'bold',
            fontSize: '1.5rem',
            color: '#fff',
        },
        button:{
          backgroundColor: "white"
        }
    });
    const classes = useStyles();

    return(
        <div>

        {items.map(item => {
            return (
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image={'https://www.dior.com/couture/var/dior/storage/images/24470110/7-eng-US/06-the-new-art-of-perfuming2_1440_1200.jpg'}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                            {item.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.producer}>
                            {item.producer}
                        </Typography>
                        <Typography variant="h5" color="textSecondary" component="h2" className={classes.price}>
                            Price: {item.price} UAH
                        </Typography>
                        <Typography variant="h5" color="textSecondary" component="h2" className={classes.value}>
                            Value: {item.value} UAH
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" className={classes.button} onClick={handleRemoveItem(item._id)}>del</Button>
                    </CardActions>
                </Card>)

        })}
        </div>
    )

}

export default Cart