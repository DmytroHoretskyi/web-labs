import {
    clearInputs,
    addItemToPage,
    renderItemsList,
    getInputValues,} from "./dom_util.js"

const submitButton = document.getElementById("create__sumnit");
const searchButton = document.getElementById("header__button__serch");
const cancelSearchButton = document.getElementById("header__button__clear");
const searchInput = document.getElementById("find__input");
const itemsCounter = document.getElementById("items_counter");
const totalPowerCounter = document.getElementById("total_value");
const sortAscButton  = document.getElementById("sort_items_asc");
const sortDescButton = document.getElementById("sort_items_desc");
const createCarForm = document.getElementById("create__product");
const main = document.getElementById("main");
const createCarsButton = document.getElementById("create__button");
const priceCounterButton = document.getElementById("count_total");

createCarsButton.addEventListener("click", (event) => {
    event.preventDefault();
    createCarForm.classList.toggle("active");
    main.classList.toggle("active");
})

let product1 = {
    id: 1, 
    title: "dior 1",
    producer: 'dior',
    value: 340,
    price: 240,
};

let product2 = {
    id: 2, 
    title: "dior 2",
    producer: 'dior',
    value: 500,
    price: 220,
};

let product3 = {
    id: 3, 
    title: "armani 256",
    producer: ' Armani',
    value: 250,
    price: 200,
};

let product4 = {
    id: 4, 
    title: "versace btight",
    producer: 'versace',
    value: 1000,
    price: 300,
};

let product = [product1, product2, product3, product4]
let products = [...product];

window.onload = renderItemsList(products);

sortAscButton.addEventListener("click", (event) => {
    event.preventDefault();
    products.sort((a,b) => {
        return b.value - a.value;
    });
    renderItemsList(products);
});

sortDescButton.addEventListener("click", (event) => {
    event.preventDefault();
    products.sort((a,b) => {
        return a.price - b.price;
    });
    renderItemsList(products);
});

const addItem = ({ title, producer, value, price }) => {
    const generatedId = () => Math.random().toString(36).substr(2, 9);

    const newItem = {
        id: generatedId,
        title,
        producer,
        value,
        price,
    };
    products.push(newItem);
    addItemToPage(newItem);
};

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const { title, producer, value, price } = getInputValues();
    clearInputs();
    addItem({
        title,
        producer: producer,
        value,
        price,
    });
});

searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    const foundDevices = products
        .filter(d => d.title.search(searchInput.value) !== -1);
    
    itemsCounter.innerHTML = `${foundDevices.length}`;
    renderItemsList(foundDevices);
});


searchInput.addEventListener ("keydown", (e) => {
    const foundDevices = products
        .filter(d => d.title.toUpperCase().search(searchInput.value.toUpperCase()) !== -1);
    
    if (searchInput.value == 0) {
        itemsCounter.innerHTML = `${"0"}`;
    }
    else {
        itemsCounter.innerHTML = `${foundDevices.length}`;
    }
    renderItemsList(foundDevices);
})


cancelSearchButton.addEventListener("click", (event) => {
    event.preventDefault();

    renderItemsList(products);

    itemsCounter.innerHTML = `${0}`;
    searchInput.value = "";
});

priceCounterButton.addEventListener("click", (e) => {
    e.preventDefault();
    let totalLength = 0;
    for (const product of products) {
        totalLength += Number(product.price);
    }
    totalPowerCounter.innerHTML = `${totalLength} uah`;
});

renderItemsList(products);