import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SecondPage from './CatalogPage';

const useStyles = makeStyles((theme) => ({
    main: {
        fontFamily: "monospace",
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'center',
        height: '80vh',
        backgroundImage: `url(${'https://scontent.flwo3-1.fna.fbcdn.net/v/t39.30808-6/259457219_5351311361550036_6428190075378303139_n.png?_nc_cat=1&_nc_rgb565=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=hbIvu-TsckwAX_1jbgw&_nc_ht=scontent.flwo3-1.fna&oh=0e63673a74d7790ddc1fda4f1ddad881&oe=61A37D11'})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '-50px',
        width: '90%',
        margin: '0 auto',
    },
    image:{
        height: '500px',
        width: '500px',
        marginRight: '15%'
    },

    title: {
        fontSize: '50px',
        color: '#fff',
    },
    sizeParagraph: {
        fontSize: '30px',
        color: '#fff',
    },
}));

export default function About() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.main}>
                <img src="https://thumbs.dreamstime.com/b/shopping-bag-simple-icon-logo-dark-background-white-shopping-bag-simple-icon-logo-dark-background-132662938.jpg" alt="" className={classes.image}/>
                <div>
                    <h1 className={classes.title}>Dark Shop</h1>
                    <p className={classes.sizeParagraph}> 
                    Dark Shop – Shop for people who like dark colors  <br/>
                    and dont like other people   <br/>
                    </p>
                </div>
            </div>
            <SecondPage />
        </div>
        
    );
}

