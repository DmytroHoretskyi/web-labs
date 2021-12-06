import React, {useState} from 'react';
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
        flexWrap: "wrap"
    },
    inputs: {
        width: '80%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 auto',
    },
    filter:{
        margin: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
}));


export function Catalog() {
    const classes = useStyles();

    const [searchText, setSearchText] = useState('');
    const [data, setData] = useState(productsCatalog);
    const [sortType, setSortType] = useState(null)

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
            setData(productsCatalog);
        }
        else {
            const filteredData = productsCatalog.filter(item =>{
                return Object.keys(item).some(key =>{
                    return excludeColumn.includes(key) ? false: item[key].toString().toLowerCase().includes(lowerCaseValue);

                })
            });
            setData(filteredData);
        }
    }

    productsCatalog.sort((a , b) => {
        if (sortType == "asc") {
            const isReserved = (sortType === 'asc') ? 1: -1;
            return isReserved * parseFloat(a.price) - parseFloat(b.price)
        } else {
            return parseFloat(b.price) - parseFloat(a.price)
        }
    });

    return (
        <div>
            <div className={classes.inputs}>
                <div className={classes.filter}>
                    <button className="buttonSecondPage" onClick={() => onSort('asc')}>Sort by asc</button>
                    <button className="buttonSecondPage" onClick={() => onSort('desc')}>Sort by desc</button>
                </div>
            </div>
            <div className="">
                <input
                    type="text"
                    placeholder="Type to search..."
                    value={searchText}
                    onChange={e => handleChange(e.target.value)}
                />
                <div className="">
                    <div className={classes.root}>
                        {data.map(item => (<ImageCard item={item}/>))}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Catalog;