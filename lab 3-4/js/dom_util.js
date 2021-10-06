const titleInput = document.getElementById("title_input");
const producerInput = document.getElementById("producer_input");
const valueInput = document.getElementById("value__input");
const priceInput = document.getElementById("max-price_input");

const itemsContainer = document.getElementById("items_container");
const getItemId = (id) => `item-${id}`;

export const EDIT_BUTTON_PREFIX = 'edit-button-';

const itemTemplate = ({ id, title, producer, value, price }) => `
    <li class="card" id="${getItemId(id)}>
    <div class="card" >
        <img class="dior" src="./picture/dior.jpg" alt="oops">
        <h2 class="main__title">${title}</h2>
        <h1 class="main__subtittle">${producer}</h1>
            <h1 class="change_content"  contenteditable="false">${value} ml</h1>
            <h1  class="change_content"  contenteditable="false">${price} uah</h1>
        <div class="main__button">
        <button id="${EDIT_BUTTON_PREFIX}${id}" name="edit_button"  class="main__button_edit">Edit</button>
        <button id="delete_button_${getItemId(id)}" class="main__button_remove">Remove</button> 
        </div>
    </div>
    </li>
`;

export const clearInputs = () => {
  titleInput.value = "";
  producerInput.value = "";
  valueInput.value = "";
  priceInput.value = "";
};

export const addItemToPage = ({ id, title, producer, value, price}) => {
    itemsContainer.insertAdjacentHTML(
        "beforeend",
        itemTemplate({ id, title, producer, value, price })
    );

    const editButton = document.getElementById(`${EDIT_BUTTON_PREFIX}${id}`);
    editButton.addEventListener("click", (e) => {
        e.preventDefault();    
        document.querySelectorAll('.change_content, .main__title , .main__subtittle').forEach(function(ele){
            ele.contentEditable = "true";
        })        
    });
};

export const renderItemsList = (items) => {
    itemsContainer.innerHTML = "";
    for (const item of items) {
        addItemToPage(item);
    }
};

export const getInputValues = () => {
  return {
    title: titleInput.value,
    producer: producerInput.value,
    value: valueInput.value,
    price: priceInput.value,
  };
};

