import { onDragNDrop } from "./drag_n_drop.js";

export const EDIT_BUTTON_PREFIX = 'edit-button-';

const titleInput = document.getElementById("title_input");
const producerInput = document.getElementById("producer_input");
const priceInput = document.getElementById('price_input')
const  valueInput = document.getElementById('value_input')
const itemsContainer = document.getElementById("items_container");

// local functions

const itemTemplate = ({ id, title,producer, price, value }) => `
<li id="${id}" class="card mb-3 item-card" draggable="true">
  <img
    src="https://fimgs.net/mdimg/perfume/375x500.58714.jpg"
    class="item-container__image card-img-top" alt="card">
  <div class="card-body">
    <h5 class="card-title">title: ${title}</h5>
    <p class="card-text">producer: ${producer}</p>
    <p class="card-text"> price: ${price}</p>
    <p class="card-text">value: ${value}</p>
    <button id="${EDIT_BUTTON_PREFIX}${id}" type="button" class="btn btn-info">
      Edit
    </button>
  </div>
</li>`;

// exposed functions
export const clearInputs = () => {
  titleInput.value = "";

 producerInput.value = "";
};

export const addItemToPage = ({ _id: id, title, producer, price, value }, onEditItem, onRemoveItem) => {
  itemsContainer.insertAdjacentHTML(
    "afterbegin",
    itemTemplate({ id, title,producer, price, value })
  );

  const element = document.getElementById(id);
  const editButton = document.getElementById(`${EDIT_BUTTON_PREFIX}${id}`);

  element.onmousedown = onDragNDrop(element, onRemoveItem);
  editButton.addEventListener("click", onEditItem);

  // VERY IMPORTANT
  // Allows not to trigger DragNDrop when user clicks Edit Button
  editButton.onmousedown = e => e.stopPropagation();
};

export const renderItemsList = (items, onEditItem, onRemoveItem) => {
  itemsContainer.innerHTML = "";

  for (const item of items) {
    addItemToPage(item, onEditItem, onRemoveItem);
  }
};

export const getInputValues = () => {
  return {
    title: titleInput.value,
   producer:producerInput.value,
    price: priceInput.value,
    value: valueInput.value,
  };
};
