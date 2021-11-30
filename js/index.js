import {
  EDIT_BUTTON_PREFIX,
  clearInputs,
  renderItemsList,
  getInputValues,
} from "./dom_util.js";
import { deleteProduct, getAllProducts, postProduct, updateProduct } from "./api.js";

const submitButton = document.getElementById("submit_button");
const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById("cancel_find_button");
const findInput = document.getElementById("find_input");

let hamsters = [];

const onEditItem = async (e) => {
  const itemId = e.target.id.replace(EDIT_BUTTON_PREFIX, "");

  await updateProduct(itemId, getInputValues())

  clearInputs();
  
  refetchAllProducts();
};

const onRemoveItem = (id) => deleteProduct(id).then(refetchAllProducts);

export const refetchAllProducts = async () => {
  const allProducts = await getAllProducts();

  hamsters = allProducts;

  renderItemsList(hamsters, onEditItem, onRemoveItem);
};

submitButton.addEventListener("click", (event) => {
  // Prevents default page reload on submit
  event.preventDefault();

  const { title, producer, price,value } = getInputValues();

  clearInputs();

  postProduct({
    title,
    producer ,
    price,
    value
  }).then(refetchAllProducts);
});

findButton.addEventListener("click", () => {
  const foundProducts = hamsters.filter(
    (hamster) => hamster.title.search(findInput.value) !== -1
  );

  renderItemsList(foundProducts, onEditItem, onRemoveItem);
});

cancelFindButton.addEventListener("click", () => {
  renderItemsList(hamsters, onEditItem, onRemoveItem);

  findInput.value = "";
});

// main code
refetchAllProducts();
