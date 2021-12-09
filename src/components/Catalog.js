import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@mui/material/CircularProgress';
import ImageCard from './ImageCard';
import '../App.css';
import {get} from "../apiService/requests";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../redux/actions/products";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: "wrap"
    },
    inputs: {
   marginLeft: "70%",
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: '0 auto',
    },
    filter:{
        margin: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sortButton:{
        width: '40%',
        borderRadius: '10%'

    },
    input:{

    },
    media: {
        height: 440,
    },
    title: {
        fontFamily: "monospace",
        fontWeight: 'bold',
        fontSize: '2rem',
        color: 'black',
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
    }
}));
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export function Catalog() {
    const classes = useStyles();
    const dispath = useDispatch()
    const items = useSelector(state => state.itemsReducer);
    console.log(items)

    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const [searchText, setSearchText] = useState('');
    const [data, setData] = useState([]);
    const [sortType, setSortType] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [currentItem, setCurrentItem] = useState({});

    const handleOpen = (id) => () => {
        setOpen(true);
        setCurrentItem(data.find(item =>item._id === id));

    };

    useEffect(async ()=>{
        setIsLoading(true)
        setTimeout(async ()=>{
            const response = await get();
            console.log(response);
            setData(response);
            setIsLoading(false)},1000)

    },[]);

    const excludeColumn = ['paragraph', 'price'];

    const onSort = sortType =>{
        setSortType(sortType);
    }

    const handleChange = value =>{
        setSearchText(value);
        filterData(value);
    }

    const filterData = value => {
        const lowerCaseValue = value.toLowerCase().trim();
        if(!lowerCaseValue) {
            setData(data);
        }
        else {
            const filteredData = data.filter(item =>{
                return Object.keys(item).some(key =>{
                    return excludeColumn.includes(key) ? false: item[key].toString().toLowerCase().includes(lowerCaseValue);

                })
            });
            setData(filteredData);
        }
    }
    const filterByValue = (value) => setData(data.filter(item => item.value < value))

    data.sort((a , b) => {
        if (sortType === "asc") {
            const isReserved = (sortType === 'asc') ? 1: -1;
            return isReserved * parseFloat(a.price) - parseFloat(b.price)
        } else {
            return parseFloat(b.price) - parseFloat(a.price)
        }
    });
    const handleAddItem = (id)=>(event)=>{
        const item = data.find((item)=>(
            item._id === id
            )
        );
        dispath(addToCart(item));
    };





    return (
        <div>
            <div className={classes.inputs}>
                <div className={classes.filter}>
                    <button className={classes.sortButton} onClick={() => onSort('asc')}>Sort by asc</button>
                    <button className={classes.sortButton} onClick={() => onSort('desc')}>Sort by desc</button>
                    <button className={classes.sortButton} onClick={() => filterByValue(200)}>value lower 200 </button>
                </div>
            </div>
            <div className="">
                <input className={classes.inputs}
                    type="text"
                    placeholder="Type to search..."
                    value={searchText}
                    onChange={e => handleChange(e.target.value)}
                />
                <div className="">
                    <div className={classes.root}>
                        {isLoading && <CircularProgress />}
                        {data.map(item => (<ImageCard key={item._id} item={item} handleAddItem={handleAddItem} handleModelOpen={handleOpen}/>))}
                    </div>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx = {style}>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                        {currentItem.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.producer}>
                        {currentItem.producer}
                    </Typography>
                    <Typography variant="h5" color="textSecondary" component="h2" className={classes.price}>
                        Price: {currentItem.price} UAH
                    </Typography>
                    <Typography variant="h5" color="textSecondary" component="h2" className={classes.value}>
                        Value: {currentItem.value} UAH
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default Catalog;